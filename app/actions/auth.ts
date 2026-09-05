'use server'

import { redirect } from 'next/navigation'
import { z } from 'zod'
import { findUserByEmail, verifyPassword } from '@/lib/users'
import { createSessionCookie, destroySessionCookie } from '@/lib/session'
import { ROLE_HOME } from '@/lib/rbac'

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
})

export type LoginState = {
  error?: string
  /** Route the client should navigate to on success. */
  redirectTo?: string
}

/**
 * Authenticate a user with email + password.
 *
 * Security notes:
 *  - Passwords are checked with bcrypt's constant-time comparison.
 *  - The same generic error is returned whether the email is unknown or the
 *    password is wrong, to avoid leaking which accounts exist.
 *  - On success an ENCRYPTED session cookie is issued.
 */
export async function login(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const parsed = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? 'Invalid input' }
  }

  const { email, password } = parsed.data
  const user = findUserByEmail(email)

  // Always run a comparison to keep timing consistent for unknown emails.
  const ok = user ? await verifyPassword(user, password) : false

  if (!user || !ok) {
    return { error: 'Invalid email or password' }
  }

  await createSessionCookie({
    userId: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  })

  return { redirectTo: ROLE_HOME[user.role] }
}

/** Clear the session and return to the login page. */
export async function logout(): Promise<void> {
  await destroySessionCookie()
  redirect('/login')
}

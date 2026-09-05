import { EncryptJWT, jwtDecrypt } from 'jose'
import { hkdf } from '@panva/hkdf'
import { cookies } from 'next/headers'
import type { Role } from './rbac'

/**
 * Encrypted session management.
 *
 * The session is stored client-side in an httpOnly cookie, but the payload is
 * ENCRYPTED (JWE, A256GCM) — not merely signed. Even with the cookie in hand,
 * the contents cannot be read or tampered with without the server secret.
 */

export const SESSION_COOKIE = 'laundryos_session'
const MAX_AGE_SECONDS = 60 * 60 * 8 // 8 hours

export type SessionPayload = {
  userId: string
  email: string
  name: string
  role: Role
}

function getSecret(): string {
  const secret = process.env.SESSION_SECRET
  if (!secret || secret.length < 32) {
    throw new Error(
      'SESSION_SECRET env var must be set to a random string of at least 32 characters.'
    )
  }
  return secret
}

/** Derive a 256-bit encryption key from the secret using HKDF. */
async function getEncryptionKey(): Promise<Uint8Array> {
  return hkdf('sha256', getSecret(), '', 'laundryos-session-encryption', 32)
}

/** Encrypt a session payload into a compact JWE string. */
export async function encryptSession(payload: SessionPayload): Promise<string> {
  const key = await getEncryptionKey()
  return new EncryptJWT({ ...payload })
    .setProtectedHeader({ alg: 'dir', enc: 'A256GCM' })
    .setIssuedAt()
    .setExpirationTime(`${MAX_AGE_SECONDS}s`)
    .encrypt(key)
}

/** Decrypt and validate a JWE session string. Returns null if invalid. */
export async function decryptSession(token: string | undefined): Promise<SessionPayload | null> {
  if (!token) return null
  try {
    const key = await getEncryptionKey()
    const { payload } = await jwtDecrypt(token, key)
    if (!payload.userId || !payload.role) return null
    return {
      userId: String(payload.userId),
      email: String(payload.email),
      name: String(payload.name),
      role: payload.role as Role,
    }
  } catch {
    return null
  }
}

/** Persist an encrypted session in an httpOnly cookie. */
export async function createSessionCookie(payload: SessionPayload): Promise<void> {
  const token = await encryptSession(payload)
  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: MAX_AGE_SECONDS,
  })
}

/** Read and decrypt the current session, if any. */
export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE)?.value
  return decryptSession(token)
}

/** Clear the session cookie (logout). */
export async function destroySessionCookie(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE)
}

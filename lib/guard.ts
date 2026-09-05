import { redirect } from 'next/navigation'
import { getSession, type SessionPayload } from './session'
import { roleAtLeast, roleHasPermission, ROLE_HOME, type Permission, type Role } from './rbac'

/**
 * Server-component guards. Use these at the top of protected pages to ensure a
 * valid session exists and the user holds the required role/permission.
 */

/** Require any authenticated user. Redirects to /login if not signed in. */
export async function requireSession(): Promise<SessionPayload> {
  const session = await getSession()
  if (!session) redirect('/login')
  return session
}

/**
 * Require at least the given role. If the user is signed in but lacks the
 * privilege, they are redirected to their own role's home instead of seeing
 * a page they cannot access.
 */
export async function requireRole(required: Role): Promise<SessionPayload> {
  const session = await requireSession()
  if (!roleAtLeast(session.role, required)) {
    redirect(ROLE_HOME[session.role])
  }
  return session
}

/** Require a specific permission (accounting for role inheritance). */
export async function requirePermission(permission: Permission): Promise<SessionPayload> {
  const session = await requireSession()
  if (!roleHasPermission(session.role, permission)) {
    redirect(ROLE_HOME[session.role])
  }
  return session
}

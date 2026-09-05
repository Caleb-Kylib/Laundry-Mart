import bcrypt from 'bcryptjs'
import type { Role } from './rbac'

/**
 * User account record. In production this would live in a database; here it is
 * an in-memory seed store. Passwords are NEVER stored in plaintext — only the
 * bcrypt hash is kept.
 */
export type User = {
  id: string
  name: string
  email: string
  role: Role
  /** bcrypt hash of the password (cost factor 12). */
  passwordHash: string
}

/**
 * Seeded accounts, one per role. The bcrypt hashes below correspond to:
 *   employee@laundryos.co.ke    -> Employee@123
 *   manager@laundryos.co.ke     -> Manager@123
 *   admin@laundryos.co.ke       -> SuperAdmin@123
 *
 * Change these credentials before deploying to any real environment.
 */
const SEED_USERS: User[] = [
  {
    id: 'usr_employee',
    name: 'Amina Wanjiku',
    email: 'employee@laundryos.co.ke',
    role: 'employee',
    passwordHash: '$2b$12$HPzimvPCx3jzD1LRkoSLseNzzxmHwDSCu.eSt6VW7cNfiINnYT26y',
  },
  {
    id: 'usr_manager',
    name: 'David Kamau',
    email: 'manager@laundryos.co.ke',
    role: 'manager',
    passwordHash: '$2b$12$CEjzv1VU8sqpGnPNKE97eOwV4qPtjE5UiQ8joYqk2CfmTz7l9zm16',
  },
  {
    id: 'usr_super_admin',
    name: 'Grace Njeri',
    email: 'admin@laundryos.co.ke',
    role: 'super_admin',
    passwordHash: '$2b$12$Dtk13CgHAEyCzhep8lKZ8OBwBuYxQpwiXrMaIAoVtx2bsH9sYb6DS',
  },
]

/** Look up a user by email (case-insensitive). */
export function findUserByEmail(email: string): User | undefined {
  const normalized = email.trim().toLowerCase()
  return SEED_USERS.find(u => u.email.toLowerCase() === normalized)
}

/**
 * Verify a plaintext password against a stored user record using bcrypt's
 * constant-time comparison.
 */
export async function verifyPassword(user: User, password: string): Promise<boolean> {
  return bcrypt.compare(password, user.passwordHash)
}

/** Hash a plaintext password for storing a new/updated account. */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

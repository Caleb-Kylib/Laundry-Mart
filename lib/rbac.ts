/**
 * Role-Based Access Control (RBAC) definitions for LaundryOS.
 *
 * Roles are ordered by privilege level. `super_admin` inherits everything a
 * `manager` can do, and a `manager` inherits everything an `employee` can do.
 */

export const ROLES = ['employee', 'manager', 'super_admin'] as const
export type Role = (typeof ROLES)[number]

/** Numeric rank used for "at least this role" checks. Higher = more access. */
export const ROLE_RANK: Record<Role, number> = {
  employee: 1,
  manager: 2,
  super_admin: 3,
}

/** Granular permissions in the system. */
export type Permission =
  | 'orders:view'
  | 'orders:update'
  | 'customers:view'
  | 'customers:manage'
  | 'reports:view'
  | 'staff:manage'
  | 'settings:manage'
  | 'billing:manage'

/**
 * Permissions granted directly to each role. Because roles inherit from lower
 * ranks (see `roleHasPermission`), each entry only lists the *additional*
 * permissions that role introduces.
 */
const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
  employee: ['orders:view', 'orders:update', 'customers:view'],
  manager: ['customers:manage', 'reports:view'],
  super_admin: ['staff:manage', 'settings:manage', 'billing:manage'],
}

/** Human-friendly labels for UI display. */
export const ROLE_LABELS: Record<Role, string> = {
  employee: 'Employee',
  manager: 'Manager',
  super_admin: 'Super Admin',
}

/** The landing route each role is sent to after login. */
export const ROLE_HOME: Record<Role, string> = {
  employee: '/employee',
  manager: '/manager',
  super_admin: '/admin',
}

export function isRole(value: unknown): value is Role {
  return typeof value === 'string' && (ROLES as readonly string[]).includes(value)
}

/** Returns the full (inherited) set of permissions for a role. */
export function getPermissions(role: Role): Set<Permission> {
  const perms = new Set<Permission>()
  for (const r of ROLES) {
    if (ROLE_RANK[r] <= ROLE_RANK[role]) {
      ROLE_PERMISSIONS[r].forEach(p => perms.add(p))
    }
  }
  return perms
}

/** True if `role` has `permission`, accounting for inheritance. */
export function roleHasPermission(role: Role, permission: Permission): boolean {
  return getPermissions(role).has(permission)
}

/** True if `role` meets or exceeds `required` in the privilege hierarchy. */
export function roleAtLeast(role: Role, required: Role): boolean {
  return ROLE_RANK[role] >= ROLE_RANK[required]
}

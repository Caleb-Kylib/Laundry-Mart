import { NextResponse, type NextRequest } from 'next/server'
import { jwtDecrypt } from 'jose'
import { hkdf } from '@panva/hkdf'
import { ROLE_RANK, type Role } from '@/lib/rbac'
import { SESSION_COOKIE } from '@/lib/session'

/**
 * Edge middleware that guards role-scoped route prefixes.
 *
 * It decrypts the session cookie (JWE) using the same key derivation as the
 * server helpers. bcrypt and next/headers are NOT usable on the Edge runtime,
 * but jose + @panva/hkdf are, so we inline the minimal decrypt here.
 */

// Each protected prefix requires *at least* the given role.
const ROUTE_RULES: { prefix: string; minRole: Role }[] = [
  { prefix: '/admin', minRole: 'super_admin' },
  { prefix: '/manager', minRole: 'manager' },
  { prefix: '/employee', minRole: 'employee' },
]

const ROLE_HOME: Record<Role, string> = {
  employee: '/employee',
  manager: '/manager',
  super_admin: '/admin',
}

async function getKey(secret: string): Promise<Uint8Array> {
  return hkdf('sha256', secret, '', 'laundryos-session-encryption', 32)
}

async function readRole(req: NextRequest): Promise<Role | null> {
  const token = req.cookies.get(SESSION_COOKIE)?.value
  const secret = process.env.SESSION_SECRET
  if (!token || !secret) return null
  try {
    const { payload } = await jwtDecrypt(token, await getKey(secret))
    const role = payload.role
    if (typeof role === 'string' && role in ROLE_RANK) return role as Role
    return null
  } catch {
    return null
  }
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  const rule = ROUTE_RULES.find(
    r => pathname === r.prefix || pathname.startsWith(r.prefix + '/')
  )
  if (!rule) return NextResponse.next()

  const role = await readRole(req)

  // Not authenticated -> send to login with a return path.
  if (!role) {
    const url = req.nextUrl.clone()
    url.pathname = '/login'
    url.searchParams.set('from', pathname)
    return NextResponse.redirect(url)
  }

  // Authenticated but insufficient privilege -> bounce to their own home.
  if (ROLE_RANK[role] < ROLE_RANK[rule.minRole]) {
    const url = req.nextUrl.clone()
    url.pathname = ROLE_HOME[role]
    url.search = ''
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/manager/:path*', '/employee/:path*'],
}

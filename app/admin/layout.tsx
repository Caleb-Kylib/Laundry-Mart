import { requireRole } from '@/lib/guard'

// Guards the entire /admin segment: only super_admin may enter. This is a
// server-side enforcement layer in addition to the Edge middleware.
export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireRole('super_admin')
  return <>{children}</>
}

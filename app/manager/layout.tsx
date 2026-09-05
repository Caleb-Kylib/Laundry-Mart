import { requireRole } from '@/lib/guard'

// Only manager and above (super_admin inherits) may access /manager.
export default async function ManagerLayout({ children }: { children: React.ReactNode }) {
  await requireRole('manager')
  return <>{children}</>
}

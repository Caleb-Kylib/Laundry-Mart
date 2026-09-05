import { requireRole } from '@/lib/guard'

// Any authenticated user with employee rank or above may access /employee.
export default async function EmployeeLayout({ children }: { children: React.ReactNode }) {
  await requireRole('employee')
  return <>{children}</>
}

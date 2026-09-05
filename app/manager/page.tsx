import { requireRole } from '@/lib/guard'
import { getPermissions, ROLE_LABELS } from '@/lib/rbac'
import { LogoutButton } from '@/components/auth/LogoutButton'
import { BarChart3, Users, Package, ClipboardCheck, TrendingUp } from 'lucide-react'

export default async function ManagerDashboard() {
  const session = await requireRole('manager')
  const permissions = getPermissions(session.role)

  const metrics = [
    { label: 'Team Members', value: '14', icon: Users, tone: 'text-blue-600 bg-blue-100' },
    { label: 'Orders Today', value: '32', icon: Package, tone: 'text-indigo-600 bg-indigo-100' },
    { label: 'Quality Checks', value: '9', icon: ClipboardCheck, tone: 'text-emerald-600 bg-emerald-100' },
    { label: 'Weekly Growth', value: '+12.5%', icon: TrendingUp, tone: 'text-amber-600 bg-amber-100' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-30">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">L</div>
          <span className="font-bold text-lg tracking-tight">Laundry<span className="text-indigo-600">OS</span></span>
          <span className="ml-3 px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-50 text-indigo-700">
            {ROLE_LABELS[session.role]}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:block text-sm text-gray-500">{session.name}</span>
          <LogoutButton />
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 sm:p-8 space-y-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Manager Dashboard</h1>
          <p className="text-gray-500 mt-1">Oversee operations, staff, and reporting.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map(m => (
            <div key={m.label} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${m.tone}`}>
                <m.icon size={20} />
              </div>
              <p className="text-sm font-medium text-gray-500">{m.label}</p>
              <p className="text-2xl font-bold mt-1">{m.value}</p>
            </div>
          ))}
        </div>

        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 size={18} className="text-indigo-600" />
            <h2 className="font-bold text-lg">Your Access</h2>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Permissions granted to the {ROLE_LABELS[session.role]} role:
          </p>
          <div className="flex flex-wrap gap-2">
            {[...permissions].map(p => (
              <span key={p} className="px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                {p}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

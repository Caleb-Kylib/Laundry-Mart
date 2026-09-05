import { requireRole } from '@/lib/guard'
import { getPermissions, ROLE_LABELS } from '@/lib/rbac'
import { LogoutButton } from '@/components/auth/LogoutButton'
import { Package, CheckCircle2, Clock } from 'lucide-react'

const assignedOrders = [
  { id: '#LD-2849', customer: 'Amina Wanjiku', items: '3 items', status: 'Washing', tone: 'bg-blue-100 text-blue-700' },
  { id: '#LD-2851', customer: 'Peter Otieno', items: '5 items', status: 'Drying', tone: 'bg-amber-100 text-amber-700' },
  { id: '#LD-2853', customer: 'Lucy Achieng', items: '2 items', status: 'Ready', tone: 'bg-emerald-100 text-emerald-700' },
]

export default async function EmployeeDashboard() {
  const session = await requireRole('employee')
  const permissions = getPermissions(session.role)

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-30">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">L</div>
          <span className="font-bold text-lg tracking-tight">Laundry<span className="text-blue-600">OS</span></span>
          <span className="ml-3 px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-700">
            {ROLE_LABELS[session.role]}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:block text-sm text-gray-500">{session.name}</span>
          <LogoutButton />
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 sm:p-8 space-y-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Hi {session.name.split(' ')[0]}!</h1>
          <p className="text-gray-500 mt-1">Here are the orders assigned to you today.</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Assigned', value: '3', icon: Package, tone: 'text-blue-600 bg-blue-100' },
            { label: 'In Progress', value: '2', icon: Clock, tone: 'text-amber-600 bg-amber-100' },
            { label: 'Completed', value: '7', icon: CheckCircle2, tone: 'text-emerald-600 bg-emerald-100' },
          ].map(s => (
            <div key={s.label} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${s.tone}`}>
                <s.icon size={18} />
              </div>
              <p className="text-xs font-medium text-gray-500">{s.label}</p>
              <p className="text-xl font-bold mt-0.5">{s.value}</p>
            </div>
          ))}
        </div>

        <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-200">
            <h2 className="font-bold text-lg">My Orders</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {assignedOrders.map(o => (
              <div key={o.id} className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                <div>
                  <p className="font-semibold text-sm">{o.customer}</p>
                  <p className="text-xs text-gray-500">{o.id} &bull; {o.items}</p>
                </div>
                <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${o.tone}`}>{o.status}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="font-bold text-lg mb-3">Your Access</h2>
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

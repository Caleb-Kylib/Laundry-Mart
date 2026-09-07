'use client'

import { useState } from 'react'
import { LayoutDashboard, Package, Users, Settings, Plus, Search, Bell, Menu, X, ArrowUpRight, Truck, CircleDot, ChevronDown, MoreHorizontal, BarChart3, Sparkles, Clock3, CheckCircle2, TrendingUp } from 'lucide-react'
import { LogoutButton } from '@/components/auth/LogoutButton'

type Order = { id: string; customer: string; items: string; status: string; time: string; color: string }
const initialOrders: Order[] = [
  { id: '#LD-2849', customer: 'Amina Wanjiku', items: '3 items', status: 'Ready', time: 'Today, 4:30 PM', color: 'bg-emerald-100 text-emerald-700' },
  { id: '#LD-2848', customer: 'David Kamau', items: '7 items', status: 'Washing', time: 'Today, 6:00 PM', color: 'bg-blue-100 text-blue-700' },
  { id: '#LD-2847', customer: 'Maya Chen', items: '2 items', status: 'Quality check', time: 'Tomorrow, 10:00 AM', color: 'bg-purple-100 text-purple-700' },
]

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('Overview')
  
  const menu = [
    { name: 'Overview', icon: LayoutDashboard },
    { name: 'Orders', icon: Package },
    { name: 'Customers', icon: Users },
    { name: 'Analytics', icon: BarChart3 },
    { name: 'Settings', icon: Settings }
  ]

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xl">L</div>
            <span className="font-bold text-xl tracking-tight">Laundry<span className="text-blue-600">OS</span></span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-2 text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <nav className="px-4 space-y-1">
          <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-4">Menu</p>
          {menu.map(item => {
            const Icon = item.icon
            return (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${
                  activeTab === item.name 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <Icon size={18} />
                {item.name}
              </button>
            )
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-4 sm:px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 -ml-2 text-gray-500 hover:text-gray-700">
              <Menu size={24} />
            </button>
            <h1 className="font-semibold text-lg">{activeTab}</h1>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search orders..." 
                className="pl-9 pr-4 py-2 bg-gray-100 border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg text-sm w-64 transition-all"
              />
            </div>
            <button className="p-2 text-gray-500 hover:text-gray-700 relative">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors shadow-sm">
              <Plus size={16} />
              New Order
            </button>
            <LogoutButton />
          </div>
        </header>

        <div className="p-4 sm:p-8 overflow-auto flex-1">
          {activeTab === 'Overview' && (
            <div className="max-w-6xl mx-auto space-y-6">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-6 sm:p-8 text-white">
                <div className="absolute -right-10 -top-16 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl" />
                <div className="relative flex flex-col sm:flex-row justify-between gap-5">
                  <div><p className="text-xs tracking-[.2em] font-bold text-blue-300 flex items-center gap-2"><Sparkles size={14}/> BUSINESS PULSE</p><h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">A strong week is taking shape.</h2><p className="mt-2 text-slate-300 max-w-xl">Revenue is trending above plan and your delivery promise is holding at 96%. The next opportunity is increasing express-service capacity.</p></div>
                  <div className="shrink-0 rounded-2xl bg-white/10 border border-white/10 p-4"><p className="text-xs text-slate-300">Weekly target</p><p className="text-2xl font-bold mt-1">84% <span className="text-xs text-emerald-300">+9 pts</span></p><div className="w-40 h-2 mt-3 bg-white/15 rounded-full"><div className="h-full w-[84%] rounded-full bg-gradient-to-r from-blue-400 to-emerald-400"/></div></div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-2">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">Good morning, Amina!</h2>
                  <p className="text-gray-500 mt-1">Here's a simplified overview of your laundry business.</p>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Today's Revenue", value: 'KSh 48,250', trend: '+12.5%', color: 'text-emerald-600', bg: 'bg-emerald-100', icon: ArrowUpRight },
                  { label: 'Active Orders', value: '32', trend: '8 more', color: 'text-blue-600', bg: 'bg-blue-100', icon: CircleDot },
                  { label: 'Pending Pickups', value: '8', trend: '3 today', color: 'text-amber-600', bg: 'bg-amber-100', icon: Truck },
                  { label: 'Customers', value: '1,204', trend: '+24 new', color: 'text-purple-600', bg: 'bg-purple-100', icon: Users },
                ].map((metric, i) => (
                  <div key={i} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between h-32">
                    <div className="flex justify-between items-start">
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{metric.label}</p>
                      <div className={`p-2 rounded-lg ${metric.bg} ${metric.color}`}>
                        <metric.icon size={16} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{metric.value}</h3>
                      <p className={`text-xs font-medium mt-1 ${metric.color}`}>{metric.trend}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid lg:grid-cols-[1.55fr_1fr] gap-6">
                <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
                  <div className="flex items-start justify-between"><div><p className="text-xs font-bold tracking-[.16em] text-blue-600">REVENUE MOMENTUM</p><h3 className="text-xl font-bold mt-1">KSh 384,920 <span className="text-sm text-emerald-600">+18.2%</span></h3><p className="text-sm text-gray-500 mt-1">This month, compared with KSh 325,790 last month</p></div><button className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700">This month <ChevronDown size={13} className="inline"/></button></div>
                  <div className="mt-8 h-40 flex items-end gap-3 border-b border-gray-100">{[48,61,54,75,68,88,82].map((height, index) => <div key={index} className="flex-1 h-full flex flex-col justify-end gap-2"><div style={{ height: `${height}%` }} className={`rounded-t-lg ${index === 5 ? 'bg-gradient-to-t from-indigo-600 to-blue-400 shadow-lg shadow-blue-100' : 'bg-blue-100 hover:bg-blue-300'} transition-colors`}/><span className="text-[10px] text-center text-gray-400">{['M','T','W','T','F','S','S'][index]}</span></div>)}</div>
                  <div className="grid grid-cols-3 mt-5 gap-3 text-sm"><div><p className="text-gray-400 text-xs">Avg. order</p><p className="font-bold mt-1">KSh 2,068</p></div><div><p className="text-gray-400 text-xs">Repeat rate</p><p className="font-bold mt-1">64%</p></div><div><p className="text-gray-400 text-xs">Peak hour</p><p className="font-bold mt-1">12–2 PM</p></div></div>
                </section>
                <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6"><div className="flex justify-between"><div><p className="text-xs font-bold tracking-[.16em] text-blue-600">OPERATIONS HEALTH</p><h3 className="font-bold text-xl mt-1">Today&apos;s flow</h3></div><TrendingUp className="text-blue-600"/></div><div className="mt-6 space-y-4">{[[Clock3,'Pickup SLA','92%','bg-blue-500'],[CheckCircle2,'Quality pass rate','98.4%','bg-emerald-500'],[Truck,'On-time delivery','96%','bg-violet-500']].map(([Icon,label,value,tone]) => { const RowIcon = Icon as typeof Clock3; return <div key={label as string}><div className="flex justify-between text-sm"><span className="flex items-center gap-2 font-medium"><RowIcon size={15} className="text-gray-400"/>{label as string}</span><b>{value as string}</b></div><div className="h-1.5 bg-gray-100 rounded-full mt-2"><div className={`h-full rounded-full ${tone as string}`} style={{ width: value as string }}/></div></div>})}</div><div className="mt-6 p-3 rounded-xl bg-amber-50 text-amber-800 text-xs leading-5"><b>Watch:</b> Drying capacity is forecast to reach 83% after 3 PM.</div></section>
              </div>

              {/* Recent Orders List */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="flex justify-between items-center p-5 border-b border-gray-200">
                  <h3 className="font-bold text-lg">Recent Orders</h3>
                  <button className="text-sm font-medium text-blue-600 hover:text-blue-800">View all</button>
                </div>
                <div className="divide-y divide-gray-100">
                  {initialOrders.map(order => (
                    <div key={order.id} className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                          {order.customer.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-gray-900">{order.customer}</p>
                          <p className="text-xs text-gray-500">{order.id} &bull; {order.items}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 sm:gap-8">
                        <span className={`hidden sm:inline-flex px-2.5 py-1 rounded-md text-xs font-semibold ${order.color}`}>
                          {order.status}
                        </span>
                        <span className="hidden md:block text-xs text-gray-500 w-32 text-right">{order.time}</span>
                        <button className="text-gray-400 hover:text-gray-600 p-1"><MoreHorizontal size={18} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {activeTab !== 'Overview' && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Package size={32} />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{activeTab}</h2>
                <p className="text-gray-500 max-w-sm">This module has been simplified for the new dashboard experience.</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

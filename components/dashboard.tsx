'use client'

import { useMemo, useState } from 'react'
import { Bell, Bot, ChevronDown, ChevronRight, Clock3, CreditCard, Ellipsis, LayoutDashboard, Menu, MoreHorizontal, Package, Plus, Search, Settings, Sparkles, TrendingUp, Users, X, type LucideIcon } from 'lucide-react'

const menu: [string, LucideIcon][] = [
  ['Overview', LayoutDashboard], ['Orders', Package], ['Customers', Users], ['Pickups & delivery', Clock3], ['Payments', CreditCard],
]
const secondary: [string, LucideIcon][] = [['Analytics', TrendingUp], ['AI assistant', Bot], ['Settings', Settings]]
const orders = [
  ['#LD-2849', 'Amina Wanjiku', '3 items', 'Ready', 'Today, 4:30 PM', 'emerald'],
  ['#LD-2848', 'David Kamau', '7 items', 'Washing', 'Today, 6:00 PM', 'blue'],
  ['#LD-2847', 'Maya Chen', '2 items', 'Quality check', 'Tomorrow, 10:00 AM', 'violet'],
  ['#LD-2846', 'Joel Otieno', '5 items', 'Ironing', 'Tomorrow, 12:30 PM', 'amber'],
]

function IconButton({ children, label }: { children: React.ReactNode, label: string }) { return <button className="icon-button" aria-label={label}>{children}</button> }

export default function Dashboard() {
  const [sidebar, setSidebar] = useState(false)
  const [active, setActive] = useState('Overview')
  const [searchOpen, setSearchOpen] = useState(false)
  const [toast, setToast] = useState('')
  const today = useMemo(() => new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric' }).format(new Date()), [])
  const notify = (message: string) => { setToast(message); window.setTimeout(() => setToast(''), 2700) }
  return <main className="app-shell">
    <aside className={`sidebar ${sidebar ? 'mobile-open' : ''}`}>
      <div className="brand"><div className="brand-mark"><span>◌</span><i>✦</i></div><span>Laundry<span>OS</span></span><button className="close-mobile" onClick={() => setSidebar(false)}><X size={19}/></button></div>
      <div className="workspace"><div className="workspace-icon">L</div><div><strong>Lavender Laundry</strong><small>Nairobi, Kenya</small></div><ChevronDown size={15}/></div>
      <nav>{menu.map(([name, Icon]) => <button onClick={() => { setActive(name as string); setSidebar(false) }} className={active === name ? 'nav-item active' : 'nav-item'} key={name as string}><Icon size={18}/><span>{name as string}</span>{name === 'Orders' && <b>12</b>}</button>)}<div className="nav-label">WORKSPACE</div>{secondary.map(([name, Icon]) => <button onClick={() => setActive(name as string)} className={active === name ? 'nav-item active' : 'nav-item'} key={name as string}><Icon size={18}/><span>{name as string}</span>{name === 'AI assistant' && <em>new</em>}</button>)}</nav>
      <div className="sidebar-bottom"><div className="upgrade"><div className="upgrade-icon">✦</div><div><strong>Unlock more with AI</strong><small>7 days left on your trial</small></div><ChevronRight size={16}/></div><div className="user"><div className="avatar">AK</div><div><strong>Amina K.</strong><small>Owner</small></div><MoreHorizontal size={18}/></div></div>
    </aside>
    <section className="content">
      <header className="topbar"><button className="hamburger" onClick={() => setSidebar(true)}><Menu size={21}/></button><div className="crumb"><span>Workspace</span><ChevronRight size={14}/><strong>{active}</strong></div><div className="top-actions"><button className="search" onClick={() => setSearchOpen(true)}><Search size={17}/><span>Search anything...</span><kbd>⌘ K</kbd></button><IconButton label="Notifications"><Bell size={19}/><i className="notification-dot"/></IconButton><button className="add-button" onClick={() => notify('New order flow opened')}><Plus size={17}/> New order</button></div></header>
      <div className="dashboard">
        <section className="welcome"><div><p className="eyebrow">{today}</p><h1>Good morning, Amina <span>✦</span></h1><p className="muted">Here&apos;s what&apos;s happening with your business today.</p></div><button className="ai-pulse" onClick={() => notify('LaundryOS AI is preparing your briefing')}><span><Sparkles size={17}/></span><div><strong>Ask LaundryOS AI</strong><small>Get your daily business briefing</small></div><ChevronRight size={17}/></button></section>
        <section className="metrics"><Metric label="TODAY'S REVENUE" value="KSh 48,250" trend="12.5%" icon="↗" tone="blue"/><Metric label="ORDERS IN PROGRESS" value="32" trend="8 more than yesterday" icon="◌" tone="purple"/><Metric label="PENDING PICKUPS" value="8" trend="3 scheduled this afternoon" icon="⌂" tone="amber"/><Metric label="BUSINESS HEALTH" value="92" trend="Excellent performance" icon="✦" tone="emerald" health/></section>
        <section className="grid-top"><div className="panel revenue"><div className="panel-head"><div><p className="section-label">REVENUE OVERVIEW</p><h2>KSh 384,920 <span className="positive">↗ 18.2%</span></h2><p className="muted">vs. KSh 325,790 last month</p></div><button className="period">This month <ChevronDown size={14}/></button></div><div className="chart"><div className="y-axis"><span>50k</span><span>35k</span><span>20k</span><span>0</span></div><svg viewBox="0 0 720 210" preserveAspectRatio="none" aria-label="Revenue chart"><defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#4f7cff" stopOpacity=".3"/><stop offset="1" stopColor="#4f7cff" stopOpacity="0"/></linearGradient></defs><path className="grid-lines" d="M0 20H720M0 78H720M0 136H720M0 194H720"/><path d="M0 168 C35 151 45 160 72 140 S110 120 133 132 S170 146 196 109 S230 84 253 104 S290 140 318 124 S350 82 380 96 S414 116 441 78 S480 40 510 68 S544 94 570 72 S602 38 628 56 S671 83 720 22 V210 H0Z" fill="url(#area)"/><path className="chart-line" d="M0 168 C35 151 45 160 72 140 S110 120 133 132 S170 146 196 109 S230 84 253 104 S290 140 318 124 S350 82 380 96 S414 116 441 78 S480 40 510 68 S544 94 570 72 S602 38 628 56 S671 83 720 22"/></svg><div className="months"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span></div></div></div>
          <div className="panel ai-insight"><div className="panel-head"><div><p className="section-label">AI INSIGHT</p><h2>Keep your momentum</h2></div><button className="dots"><Ellipsis size={18}/></button></div><div className="insight-orb"><span>✦</span></div><p>Your weekday revenue is <strong>23% higher</strong> than last month. Tuesday and Thursday are your strongest days.</p><button className="link-button" onClick={() => notify('Opening detailed AI analysis')}>View full analysis <ChevronRight size={15}/></button></div></section>
        <section className="grid-bottom"><div className="panel orders-panel"><div className="panel-head"><div><p className="section-label">OPERATIONS</p><h2>Recent orders</h2></div><button className="text-button" onClick={() => setActive('Orders')}>View all <ChevronRight size={15}/></button></div><div className="order-list">{orders.map((o) => <div className="order-row" key={o[0]}><div className="order-avatar">{o[1].split(' ').map(s => s[0]).join('')}</div><div className="order-name"><strong>{o[1]}</strong><small>{o[0]} · {o[2]}</small></div><span className={`status ${o[5]}`}><i/> {o[3]}</span><div className="order-time">{o[4]}</div><button className="row-more"><MoreHorizontal size={18}/></button></div>)}</div></div>
          <div className="panel service"><div className="panel-head"><div><p className="section-label">SERVICE PERFORMANCE</p><h2>Top services</h2></div><button className="dots"><Ellipsis size={18}/></button></div>{[['Wash & Fold', '42%', 72, '#4f7cff'], ['Dry Cleaning', '31%', 54, '#8b5cf6'], ['Express Service', '18%', 32, '#f59e0b']].map(s => <div className="service-row" key={s[0]}><div className="service-title"><span style={{background: s[3] as string}}/><strong>{s[0]}</strong><b>{s[1]}</b></div><div className="progress"><i style={{width: `${s[2]}%`, background: s[3] as string}}/></div></div>)}<button className="report" onClick={() => notify('Generating service report')}>View service report <ChevronRight size={15}/></button></div></section>
      </div>
    </section>
    {searchOpen && <div className="modal-backdrop" onClick={() => setSearchOpen(false)}><div className="command-modal" onClick={e => e.stopPropagation()}><div><Search size={19}/><input autoFocus placeholder="Search orders, customers, or actions..."/><kbd>ESC</kbd></div><p>QUICK ACTIONS</p>{['Create a new order', 'Open AI assistant', 'View today’s pickups'].map((x,i) => <button onClick={() => { setSearchOpen(false); notify(x) }} key={x}><span>{i === 1 ? '✦' : i === 0 ? '+' : '◌'}</span>{x}<ChevronRight size={16}/></button>)}</div></div>}
    {toast && <div className="toast"><Sparkles size={16}/>{toast}</div>}
  </main>
}

function Metric({ label, value, trend, icon, tone, health }: { label:string, value:string, trend:string, icon:string, tone:string, health?:boolean }) { return <div className="metric-card"><div className={`metric-icon ${tone}`}>{icon}</div><p>{label}</p><div className="metric-value">{value}{health && <span className="health-ring">%</span>}</div><small className={tone === 'amber' ? '' : 'up'}>{tone === 'amber' ? '◷ ' : '↗ '}{trend}</small></div> }

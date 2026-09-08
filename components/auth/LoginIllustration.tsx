import { CheckCircle2, Sparkles, TrendingUp } from 'lucide-react'
import Image from 'next/image'

export function LoginIllustration() {
  const features = [
    'Order Tracking',
    'Customer Management',
    'M-Pesa Payments',
    'Analytics & Reports',
    'Pickup & Delivery'
  ]

  return (
    <div className="relative hidden lg:flex flex-col justify-between w-[45%] min-h-screen bg-slate-950 text-white overflow-hidden p-12 xl:p-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/laundry.jpg"
          alt="Professional Laundry Operation"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/80 to-indigo-950/60" />
        <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-blue-500/25 blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-20">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-blue-950">L</div>
          <span className="font-extrabold text-2xl tracking-tight text-white">Laundry<span className="text-blue-400">OS</span></span>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1.5 text-xs font-bold tracking-wide text-blue-200 mb-6"><Sparkles size={13}/> THE MODERN LAUNDRY WORKSPACE</div>
        <h1 className="text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.08] mb-6">
          Every clean order, beautifully in sync.
        </h1>
        <p className="text-lg text-slate-300 mb-12 max-w-md leading-relaxed">
          A calm command centre for the entire operation—from the first pickup to the final delivery.
        </p>

        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-slate-200">
              <CheckCircle2 className="text-emerald-300" size={20} />
              <span className="font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 mt-auto pt-12 flex items-end justify-between">
        <div><p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} LaundryOS</p><p className="text-xs text-slate-500 mt-1">Made for modern laundry teams.</p></div>
        <div className="rounded-2xl bg-white/10 border border-white/10 p-3 text-right"><TrendingUp size={16} className="ml-auto text-emerald-300"/><p className="mt-1 text-lg font-extrabold">96%</p><p className="text-[10px] text-slate-300">on-time delivery</p></div>
      </div>
    </div>
  )
}

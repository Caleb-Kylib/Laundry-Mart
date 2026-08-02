import { CheckCircle2 } from 'lucide-react'
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
    <div className="relative hidden lg:flex flex-col justify-between w-2/5 h-full bg-slate-900 text-white overflow-hidden p-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=2000"
          alt="Professional Laundry Operation"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-blue-900/60 to-slate-900/40 mix-blend-multiply" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-16">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">L</div>
          <span className="font-extrabold text-2xl tracking-tight text-white">Laundry<span className="text-blue-400">OS</span></span>
        </div>

        <h1 className="text-4xl font-bold leading-tight mb-6">
          Manage Your Laundry Business with Confidence
        </h1>
        <p className="text-lg text-slate-300 mb-12 max-w-md leading-relaxed">
          Track orders, manage customers, monitor staff, and grow your laundry business from one powerful dashboard.
        </p>

        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-slate-200">
              <CheckCircle2 className="text-blue-400" size={20} />
              <span className="font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 mt-auto pt-12">
        <p className="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} LaundryOS
        </p>
      </div>
    </div>
  )
}

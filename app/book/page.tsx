'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Loader2,
  AlertCircle,
  CheckCircle2,
  ArrowLeft,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Sparkles,
  ShoppingBag,
  Clock,
  Shield,
} from 'lucide-react'

const bookingSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Enter a valid phone number'),
  address: z.string().min(10, 'Provide a complete pickup address'),
  date: z.string().min(1, 'Please select a pickup date'),
  serviceType: z.string().min(1, 'Please select a service'),
  notes: z.string().optional(),
})

type BookingFormValues = z.infer<typeof bookingSchema>

const inputBase =
  'w-full h-12 pl-11 pr-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 outline-none transition-all duration-200 focus:bg-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 backdrop-blur-sm'
const inputError =
  'w-full h-12 pl-11 pr-4 bg-red-500/10 border border-red-400/40 rounded-xl text-white placeholder-white/40 outline-none transition-all duration-200 focus:ring-2 focus:ring-red-400/30 backdrop-blur-sm'

const services = [
  { id: 'wash-fold', label: 'Wash & Fold', price: 'from KSh 1,200', icon: ShoppingBag },
  { id: 'dry-cleaning', label: 'Dry Cleaning', price: 'from KSh 800', icon: Shield },
  { id: 'express', label: 'Express (12 hrs)', price: '+ KSh 500', icon: Clock },
]

export default function BookPickupPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BookingFormValues>({ resolver: zodResolver(bookingSchema) })

  const onSubmit = async (_data: BookingFormValues) => {
    setIsSubmitting(true)
    await new Promise(r => setTimeout(r, 2000))
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  /* ---------- SUCCESS STATE ---------- */
  if (isSuccess) {
    return (
      <div
        className="min-h-screen flex items-center justify-center p-4"
        style={{
          background:
            'linear-gradient(135deg, #0f172a 0%, #1e3a5f 40%, #0f172a 100%)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', damping: 18 }}
          className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-12 rounded-3xl shadow-2xl max-w-md w-full text-center"
        >
          {/* Glow ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur opacity-20 pointer-events-none" />
          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-24 h-24 bg-emerald-400/20 border-2 border-emerald-400/50 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle2 size={44} />
            </motion.div>
            <h2 className="text-3xl font-extrabold text-white mb-3">You're all set!</h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Your pickup has been scheduled. Our team will reach out within 30 minutes to confirm the details.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 w-full bg-white text-slate-900 hover:bg-blue-50 font-bold py-3.5 rounded-xl transition-all"
            >
              <ArrowLeft size={18} /> Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    )
  }

  /* ---------- MAIN PAGE ---------- */
  return (
    <div
      className="min-h-screen font-sans relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #0f172a 0%, #1e3a5f 40%, #0f172a 100%)',
      }}
    >
      {/* Background image layer (via CSS – no <Image> timeout risk) */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=60&w=1400')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-indigo-900/80" />

      {/* Floating decorative orbs */}
      <div className="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] bg-blue-500 rounded-full blur-[140px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-80px] w-[300px] h-[300px] bg-indigo-600 rounded-full blur-[120px] opacity-20 pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">

        {/* ===== LEFT PANEL: BRANDING ===== */}
        <div className="hidden lg:flex lg:w-2/5 flex-col justify-between p-16 text-white">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-2xl shadow-lg">L</div>
            <span className="font-extrabold text-2xl tracking-tight">
              Laundry<span className="text-blue-400">OS</span>
            </span>
          </Link>

          {/* Hero text */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6">
                <Sparkles size={14} /> Free door-to-door delivery
              </div>
              <h1 className="text-5xl font-extrabold leading-tight mb-5">
                Premium care,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  delivered to you.
                </span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed">
                Schedule a pickup in under 2 minutes. We clean, press, and deliver your garments within 24 hours.
              </p>
            </div>

            {/* Trust badges */}
            <div className="space-y-4">
              {[
                { icon: CheckCircle2, text: 'Professional-grade cleaning equipment' },
                { icon: Clock, text: 'Turnaround in as little as 12 hours' },
                { icon: Shield, text: 'Your garments are fully insured' },
                { icon: MapPin, text: 'Free pickup & delivery anywhere in the city' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/70">
                  <item.icon size={18} className="text-blue-400 flex-shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <p className="text-white/30 text-sm">&copy; {new Date().getFullYear()} LaundryOS. All rights reserved.</p>
        </div>

        {/* ===== RIGHT PANEL: FORM ===== */}
        <div className="w-full lg:w-3/5 flex items-center justify-center p-4 sm:p-8 lg:p-16 py-12">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full max-w-xl"
          >
            {/* Mobile-only back link + logo */}
            <div className="flex items-center justify-between mb-8 lg:hidden">
              <Link href="/" className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors font-medium">
                <ArrowLeft size={18} /> Home
              </Link>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-lg">L</div>
                <span className="font-bold text-white tracking-tight">LaundryOS</span>
              </div>
            </div>

            {/* Form card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
              <div className="px-8 pt-8 pb-6 border-b border-white/10">
                <h2 className="text-2xl font-extrabold text-white mb-1">Book a Pickup</h2>
                <p className="text-white/50">We'll handle everything from here.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="px-8 pt-7 pb-8 space-y-5">
                {/* Service type — visual card selection */}
                <div>
                  <label className="block text-sm font-semibold text-white/70 mb-3">Select Service</label>
                  <div className="grid grid-cols-3 gap-3">
                    {services.map(s => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => { setSelectedService(s.id); setValue('serviceType', s.id) }}
                        className={`p-4 rounded-2xl border text-left transition-all duration-200 ${
                          selectedService === s.id
                            ? 'bg-blue-600/40 border-blue-400 shadow-lg shadow-blue-500/20'
                            : 'bg-white/5 border-white/15 hover:bg-white/10'
                        }`}
                      >
                        <s.icon size={20} className={selectedService === s.id ? 'text-blue-300' : 'text-white/40'} />
                        <div className="mt-2">
                          <p className="text-xs font-bold text-white leading-tight">{s.label}</p>
                          <p className="text-[10px] text-white/40 mt-0.5">{s.price}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                  <input type="hidden" {...register('serviceType')} />
                  {errors.serviceType && (
                    <p className="text-red-400 text-xs font-medium flex items-center gap-1 mt-2">
                      <AlertCircle size={12} /> {errors.serviceType.message}
                    </p>
                  )}
                </div>

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider">Full Name</label>
                    <div className="relative">
                      <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
                      <input {...register('fullName')} type="text" placeholder="Jane Doe" className={errors.fullName ? inputError : inputBase} />
                    </div>
                    {errors.fullName && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={11} />{errors.fullName.message}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider">Email</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
                      <input {...register('email')} type="email" placeholder="jane@email.com" className={errors.email ? inputError : inputBase} />
                    </div>
                    {errors.email && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={11} />{errors.email.message}</p>}
                  </div>
                </div>

                {/* Phone + Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider">Phone</label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
                      <input {...register('phone')} type="tel" placeholder="+254 700 000 000" className={errors.phone ? inputError : inputBase} />
                    </div>
                    {errors.phone && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={11} />{errors.phone.message}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider">Pickup Date</label>
                    <div className="relative">
                      <Calendar size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
                      <input
                        {...register('date')}
                        type="date"
                        className={`${errors.date ? inputError : inputBase} [color-scheme:dark]`}
                      />
                    </div>
                    {errors.date && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={11} />{errors.date.message}</p>}
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider">Pickup Address</label>
                  <div className="relative">
                    <MapPin size={16} className="absolute left-3.5 top-4 text-white/30 pointer-events-none" />
                    <textarea
                      {...register('address')}
                      placeholder="Enter your apartment, street, area..."
                      rows={2}
                      className={`w-full pl-11 pr-4 pt-3 pb-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 outline-none transition-all duration-200 focus:bg-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 backdrop-blur-sm resize-none ${errors.address ? 'border-red-400/40 bg-red-500/10' : ''}`}
                    />
                  </div>
                  {errors.address && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={11} />{errors.address.message}</p>}
                </div>

                {/* Notes */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider">
                    Special Instructions <span className="text-white/30 font-normal normal-case">(optional)</span>
                  </label>
                  <textarea
                    {...register('notes')}
                    placeholder="Delicate fabrics, stain spots, or anything else we should know..."
                    rows={2}
                    className="w-full px-4 pt-3 pb-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 outline-none transition-all duration-200 focus:bg-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 backdrop-blur-sm resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-lg rounded-xl transition-all shadow-xl shadow-blue-900/40 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <><Loader2 size={22} className="animate-spin" /> Scheduling Pickup…</>
                    ) : (
                      <><Sparkles size={18} /> Confirm My Pickup</>
                    )}
                  </motion.button>
                  <p className="text-center text-white/30 text-xs mt-4">
                    By confirming, you agree to our pickup & delivery terms.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

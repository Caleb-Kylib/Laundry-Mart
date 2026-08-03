'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, AlertCircle, CheckCircle2, ChevronLeft } from 'lucide-react'

const bookingSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  address: z.string().min(10, 'Please provide a complete address for pickup'),
  date: z.string().min(1, 'Please select a preferred pickup date'),
  serviceType: z.string().min(1, 'Please select a service type'),
  notes: z.string().optional(),
})

type BookingFormValues = z.infer<typeof bookingSchema>

export default function BookPickupPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  })

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true)
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-10 rounded-3xl shadow-xl max-w-md w-full text-center border border-slate-100"
        >
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Pickup Scheduled!</h2>
          <p className="text-slate-500 mb-8">
            Thank you for booking with LaundryOS. Our team will contact you shortly to confirm your pickup time.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center justify-center w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition-colors"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-slate-500 hover:text-blue-600 font-medium mb-8 transition-colors">
          <ChevronLeft size={20} className="mr-1" /> Back to Home
        </Link>
        
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-10 text-white text-center">
            <h1 className="text-3xl font-bold mb-2">Book a Pickup</h1>
            <p className="text-blue-100">Fill out the form below and we'll handle the rest.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-slate-700">Full Name</label>
                <input
                  {...register('fullName')}
                  type="text"
                  placeholder="John Doe"
                  className={`w-full h-12 px-4 rounded-xl border outline-none transition-all ${
                    errors.fullName ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' : 'border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'
                  }`}
                />
                {errors.fullName && <p className="text-red-500 text-xs font-medium flex items-center gap-1 mt-1"><AlertCircle size={12} /> {errors.fullName.message}</p>}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-slate-700">Email Address</label>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="john@example.com"
                  className={`w-full h-12 px-4 rounded-xl border outline-none transition-all ${
                    errors.email ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' : 'border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs font-medium flex items-center gap-1 mt-1"><AlertCircle size={12} /> {errors.email.message}</p>}
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-slate-700">Phone Number</label>
                <input
                  {...register('phone')}
                  type="tel"
                  placeholder="+254 700 000 000"
                  className={`w-full h-12 px-4 rounded-xl border outline-none transition-all ${
                    errors.phone ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' : 'border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-xs font-medium flex items-center gap-1 mt-1"><AlertCircle size={12} /> {errors.phone.message}</p>}
              </div>

              {/* Date */}
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-slate-700">Preferred Pickup Date</label>
                <input
                  {...register('date')}
                  type="date"
                  className={`w-full h-12 px-4 rounded-xl border outline-none transition-all ${
                    errors.date ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' : 'border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'
                  }`}
                />
                {errors.date && <p className="text-red-500 text-xs font-medium flex items-center gap-1 mt-1"><AlertCircle size={12} /> {errors.date.message}</p>}
              </div>
            </div>

            {/* Address */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700">Pickup Address</label>
              <textarea
                {...register('address')}
                placeholder="Enter your full apartment, street, and area..."
                rows={3}
                className={`w-full p-4 rounded-xl border outline-none transition-all resize-none ${
                  errors.address ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' : 'border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'
                }`}
              />
              {errors.address && <p className="text-red-500 text-xs font-medium flex items-center gap-1 mt-1"><AlertCircle size={12} /> {errors.address.message}</p>}
            </div>

            {/* Service Type */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700">Service Type</label>
              <select
                {...register('serviceType')}
                className={`w-full h-12 px-4 rounded-xl border outline-none transition-all appearance-none bg-no-repeat bg-[position:right_1rem_center] bg-[length:1em] ${
                  errors.serviceType ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' : 'border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'
                }`}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748B'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")` }}
              >
                <option value="">Select a service...</option>
                <option value="wash-fold">Wash & Fold</option>
                <option value="dry-cleaning">Dry Cleaning</option>
                <option value="express">Express Service (12 Hours)</option>
              </select>
              {errors.serviceType && <p className="text-red-500 text-xs font-medium flex items-center gap-1 mt-1"><AlertCircle size={12} /> {errors.serviceType.message}</p>}
            </div>

            {/* Notes */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700">Additional Notes (Optional)</label>
              <textarea
                {...register('notes')}
                placeholder="Any special instructions for your garments?"
                rows={2}
                className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={24} className="animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Confirm Booking'
                )}
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, AlertCircle, CheckCircle2 } from 'lucide-react'
import { PasswordInput } from './PasswordInput'
import { RememberMe } from './RememberMe'

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
  rememberMe: z.boolean().optional(),
})

type LoginFormValues = z.infer<typeof loginSchema>

export function LoginForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    }
  })

  const onSubmit = async (data: LoginFormValues) => {
    setIsSubmitting(true)
    setToast(null)
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // In a real app, this is where you'd call your auth endpoint
    
    setToast({ message: 'Welcome back!', type: 'success' })
    
    // Redirect after short delay
    setTimeout(() => {
      router.push('/admin')
    }, 1000)
  }

  return (
    <div className="w-full">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className={`fixed top-6 left-1/2 z-50 flex items-center gap-2 px-4 py-3 rounded-xl shadow-xl border ${
              toast.type === 'success' 
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
                : 'bg-red-50 border-red-200 text-red-800'
            }`}
          >
            {toast.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
            <span className="font-semibold text-sm">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Email Field */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@laundrybusiness.com"
            className={`w-full h-11 px-4 rounded-lg border transition-all duration-200 outline-none
              ${errors.email 
                ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' 
                : 'border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'
              }
            `}
            {...register('email')}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-500 text-xs font-medium pt-1 flex items-center gap-1"
              >
                <AlertCircle size={12} /> {errors.email.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Password Field */}
        <div className="space-y-1.5">
          <label htmlFor="password" className="block text-sm font-semibold text-slate-700">
            Password
          </label>
          <PasswordInput
            id="password"
            placeholder="••••••••"
            error={errors.password?.message}
            {...register('password')}
          />
          <AnimatePresence>
            {errors.password && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-500 text-xs font-medium pt-1 flex items-center gap-1"
              >
                <AlertCircle size={12} /> {errors.password.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Options Row */}
        <div className="flex items-center justify-between pt-1 pb-2">
          <RememberMe {...register('rememberMe')} />
          <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
            Forgot Password?
          </a>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting || toast?.type === 'success'}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Signing In...
            </>
          ) : (
            'Login'
          )}
        </motion.button>
      </form>
    </div>
  )
}

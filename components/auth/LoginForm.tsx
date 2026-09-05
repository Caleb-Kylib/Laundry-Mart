'use client'

import { useActionState, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, AlertCircle, CheckCircle2 } from 'lucide-react'
import { PasswordInput } from './PasswordInput'
import { RememberMe } from './RememberMe'
import { login, type LoginState } from '@/app/actions/auth'

export function LoginForm() {
  const router = useRouter()
  const [state, formAction, isSubmitting] = useActionState<LoginState, FormData>(login, {})
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  // React to the server action result: show a toast then navigate on success.
  useEffect(() => {
    if (state.error) {
      setToast({ message: state.error, type: 'error' })
    } else if (state.redirectTo) {
      setToast({ message: 'Welcome back!', type: 'success' })
      const t = setTimeout(() => router.push(state.redirectTo!), 800)
      return () => clearTimeout(t)
    }
  }, [state, router])

  const succeeded = Boolean(state.redirectTo)

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

      <form action={formAction} className="space-y-5">
        {/* Email Field */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@laundrybusiness.com"
            className="w-full h-11 px-4 rounded-lg border transition-all duration-200 outline-none border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
          />
        </div>

        {/* Password Field */}
        <div className="space-y-1.5">
          <label htmlFor="password" className="block text-sm font-semibold text-slate-700">
            Password
          </label>
          <PasswordInput
            id="password"
            name="password"
            required
            placeholder="••••••••"
          />
        </div>

        {/* Options Row */}
        <div className="flex items-center justify-between pt-1 pb-2">
          <RememberMe name="rememberMe" />
          <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
            Forgot Password?
          </a>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting || succeeded}
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

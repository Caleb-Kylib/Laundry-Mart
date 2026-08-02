'use client'

import { motion } from 'framer-motion'
import { LoginForm } from './LoginForm'

export function AuthCard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-md p-8 sm:p-10 bg-white/80 backdrop-blur-xl border border-slate-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
    >
      <div className="text-center mb-8">
        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xl mx-auto mb-5">
          L
        </div>
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-bold text-slate-900 mb-2 tracking-tight"
        >
          Welcome Back
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-slate-500 font-medium"
        >
          Sign in to access your dashboard.
        </motion.p>
      </div>

      <LoginForm />

      <div className="mt-8 relative flex items-center justify-center">
        <div className="absolute inset-x-0 h-px bg-slate-200"></div>
        <span className="relative bg-white px-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">
          OR
        </span>
      </div>

      <div className="mt-8">
        <button 
          disabled
          className="w-full h-11 bg-white border border-slate-200 text-slate-600 font-semibold rounded-lg flex items-center justify-center gap-3 opacity-70 cursor-not-allowed hover:bg-slate-50 transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with Google
          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-500">
            Coming Soon
          </span>
        </button>
      </div>

      <p className="mt-8 text-center text-sm font-medium text-slate-500">
        Don't have an account?{' '}
        <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
          Contact Administrator
        </a>
      </p>
    </motion.div>
  )
}

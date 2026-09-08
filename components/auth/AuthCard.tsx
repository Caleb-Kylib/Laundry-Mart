'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react'
import { LoginForm } from './LoginForm'

export function AuthCard() {
  return <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45, ease: 'easeOut' }} className="w-full max-w-[460px]">
    <div className="lg:hidden flex items-center gap-2 mb-8"><div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 grid place-items-center text-white font-extrabold shadow-lg shadow-blue-200">L</div><span className="font-extrabold text-xl tracking-tight">Laundry<span className="text-blue-600">OS</span></span></div>
    <div className="rounded-[2rem] bg-white/90 backdrop-blur-xl border border-white p-7 sm:p-9 shadow-[0_24px_70px_rgba(30,64,175,.12)]">
      <div className="flex justify-between items-start gap-4 mb-8"><div><div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[.13em] text-blue-600"><Sparkles size={13}/> WELCOME BACK</div><h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">Sign in to your workspace.</h1><p className="mt-2 text-sm leading-6 text-slate-500">Your orders, team, and performance insights are waiting.</p></div><div className="hidden sm:grid w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 place-items-center"><ShieldCheck size={21}/></div></div>
      <LoginForm />
      <div className="my-7 flex items-center gap-3"><span className="h-px flex-1 bg-slate-100"/><span className="text-[10px] font-bold tracking-[.16em] text-slate-400">SECURE ACCESS</span><span className="h-px flex-1 bg-slate-100"/></div>
      <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-4"><p className="text-sm font-bold text-slate-800">New to LaundryOS?</p><p className="mt-1 text-xs leading-5 text-slate-500">Create a workspace request and we&apos;ll help get your laundry operation online.</p><Link href="/signup" className="mt-3 text-sm font-bold text-blue-700 inline-flex items-center gap-1 hover:gap-2 transition-all">Set up your workspace <ArrowUpRight size={15}/></Link></div>
      <details className="mt-5 group"><summary className="cursor-pointer text-xs font-semibold text-slate-400 hover:text-slate-600">Using a demo? View credentials</summary><div className="mt-3 rounded-xl bg-slate-50 p-3 text-[11px] leading-5 text-slate-500"><p><b className="text-slate-700">Admin:</b> admin@laundryos.co.ke / SuperAdmin@123</p><p><b className="text-slate-700">Manager:</b> manager@laundryos.co.ke / Manager@123</p><p><b className="text-slate-700">Employee:</b> employee@laundryos.co.ke / Employee@123</p></div></details>
    </div>
    <p className="mt-5 text-center text-xs text-slate-400">Protected by encrypted session security · Need help? Contact your workspace admin.</p>
  </motion.div>
}

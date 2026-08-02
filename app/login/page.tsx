import { LoginIllustration } from '@/components/auth/LoginIllustration'
import { AuthCard } from '@/components/auth/AuthCard'

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Decorative blurred shapes for the background on the right side */}
      <div className="fixed top-0 right-0 w-full h-full overflow-hidden pointer-events-none lg:w-3/5 z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
        <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
      </div>

      {/* Left Side: Branding / Features */}
      <LoginIllustration />

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-3/5 flex items-center justify-center p-4 sm:p-8 relative z-10">
        <AuthCard />
      </div>
    </div>
  )
}

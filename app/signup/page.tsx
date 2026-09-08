import { LoginIllustration } from '@/components/auth/LoginIllustration'
import { SignupCard } from '@/components/auth/SignupCard'

export default function SignupPage() {
  return <div className="flex min-h-screen bg-[#f6f8fc]"><LoginIllustration/><div className="w-full lg:w-[55%] flex items-center justify-center p-5 sm:p-10 relative overflow-hidden"><div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl"/><div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl"/><div className="relative w-full flex justify-center"><SignupCard/></div></div></div>
}

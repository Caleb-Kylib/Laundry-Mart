'use client'

import { forwardRef } from 'react'
import { Check } from 'lucide-react'

interface RememberMeProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const RememberMe = forwardRef<HTMLInputElement, RememberMeProps>(
  ({ className, ...props }, ref) => {
    return (
      <label className="flex items-center gap-2 cursor-pointer group">
        <div className="relative flex items-center justify-center">
          <input
            type="checkbox"
            className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 transition-colors cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500/20"
            ref={ref}
            {...props}
          />
          <Check 
            size={14} 
            className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" 
            strokeWidth={3}
          />
        </div>
        <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
          Remember me
        </span>
      </label>
    )
  }
)

RememberMe.displayName = 'RememberMe'

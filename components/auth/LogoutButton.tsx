'use client'

import { LogOut } from 'lucide-react'
import { logout } from '@/app/actions/auth'

export function LogoutButton({ className }: { className?: string }) {
  return (
    <form action={logout}>
      <button
        type="submit"
        className={
          className ??
          'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors'
        }
      >
        <LogOut size={16} />
        Sign out
      </button>
    </form>
  )
}

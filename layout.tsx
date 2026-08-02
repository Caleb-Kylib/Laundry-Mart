import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LaundryOS — AI Operating System',
  description: 'Modern operations for laundry businesses.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}

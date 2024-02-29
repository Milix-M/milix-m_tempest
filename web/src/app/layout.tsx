import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_REALNAME}`,
  description: `${process.env.NEXT_PUBLIC_DESCRIPTION}`
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

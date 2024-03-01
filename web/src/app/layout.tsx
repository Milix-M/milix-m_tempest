import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-providers'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Index from '@/components/Home/Index'

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
        <ThemeProvider>
          <div>
            <Header />
            <main className='flex min-h-screen flex-col items-center justify-between p-40'>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

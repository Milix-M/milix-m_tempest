'use client'

import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Index from '@/components/Home/Index'

export default function Home () {
  return (
    <div>
      <Header />
      <main className='flex min-h-screen flex-col items-center justify-between p-40'>
        <Index />
      </main>
      <Footer />
    </div>
  )
}

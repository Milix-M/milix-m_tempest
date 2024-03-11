export default function ProfilesLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className='md:min-h-[calc(100vh-124px)] min-h-[calc(100vh-180px)] mt-[68px] mx-auto max-w-4xl px-5 py-7 justify-center flex'>
      <div className='w-full'>{children}</div>
    </main>
  )
}

export default function TopPageLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className='mx-auto max-w-4xl justify-center flex'>
      <div className='w-full'>{children}</div>
    </main>
  )
}

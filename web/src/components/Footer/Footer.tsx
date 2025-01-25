import { FaXTwitter } from 'react-icons/fa6'
import { SiZenn } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className='footer items-center p-4 bg-base-300'>
      <aside className='items-center grid-flow-col'>
        <p>© 2025 {process.env.NEXT_PUBLIC_REALNAME}. All rights reserved.</p>
      </aside>
      <nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
        {process.env.NEXT_PUBLIC_ZENN && (
          <a href={process.env.NEXT_PUBLIC_ZENN as string}>
            <SiZenn className='w-6 h-6' />
          </a>
        )}

        {process.env.NEXT_PUBLIC_TWITTER && (
          <a href={process.env.NEXT_PUBLIC_TWITTER as string}>
            <FaXTwitter className='w-6 h-6' />
          </a>
        )}
      </nav>
    </footer>
  )
}

export default Footer

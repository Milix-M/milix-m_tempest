'use client'

import useSwitchTheme from '@/utils/theme'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaRegMoon, FaRegSun } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SiZenn } from 'react-icons/si'

const Header = () => {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  const themeSwitcher = useSwitchTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className='relative'>
      <div className='fixed top-0 left-0 right-0 z-[9999999999]'>
        <div className='navbar bg-base-300'>
          <div className='navbar-start'>
            <div className='dropdown'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost lg:hidden'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className='menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box'
              >
                <li>
                  <Link href={'/'}>Home</Link>
                </li>
                <li>
                  <Link href={'/profile'}>Profile</Link>
                </li>
                <li>
                  <Link href={'/works'}>Works</Link>
                </li>
                <li>
                  <Link href={'/contact'}>Contact</Link>
                </li>
                {mounted && (
                  <>
                    {process.env.NEXT_PUBLIC_ZENN && (
                      <a href={process.env.NEXT_PUBLIC_ZENN as string}>
                        <li>
                          <div className='flex flex-row'>
                            <SiZenn className='w-4 h-4' />
                            Zenn
                          </div>
                        </li>
                      </a>
                    )}
                    {process.env.NEXT_PUBLIC_TWITTER && (
                      <a href={process.env.NEXT_PUBLIC_TWITTER as string}>
                        <li>
                          <div className='flex flex-row'>
                            <FaXTwitter className='w-4 h-4' />
                            X(Twitter)
                          </div>
                        </li>
                      </a>
                    )}
                  </>
                )}
              </ul>
            </div>
            <Link className='btn btn-ghost text-xl' href={'/'}>
              {process.env.NEXT_PUBLIC_REALNAME}
            </Link>
          </div>
          <div className='navbar-center hidden lg:flex'>
            <ul className='menu menu-horizontal space-x-1.5'>
              <li>
                <Link href={'/'} className='font-bold'>
                  Home
                </Link>
              </li>
              <li>
                <Link href={'/profile'} className='font-bold'>
                  Profile
                </Link>
              </li>
              <li>
                <Link href={'/works'} className='font-bold'>
                  Works
                </Link>
              </li>
              <li>
                <Link href={'/contact'} className='font-bold'>
                  Contact
                </Link>
              </li>
              <ul className='lg:menu-horizontal'>
                <li>
                  <details>
                    <summary className='font-bold'>Blog</summary>
                    {/* マウントされてから表示しないとhydration errorが発生する */}
                    {mounted && (
                      <ul className='top-8'>
                        {process.env.NEXT_PUBLIC_ZENN && (
                          <a href={process.env.NEXT_PUBLIC_ZENN as string}>
                            <li>
                              <div className='flex flex-row'>
                                <SiZenn className='w-4 h-4' />
                                Zenn
                              </div>
                            </li>
                          </a>
                        )}
                        {process.env.NEXT_PUBLIC_TWITTER && (
                          <a href={process.env.NEXT_PUBLIC_TWITTER as string}>
                            <li>
                              <div className='flex flex-row'>
                                <FaXTwitter className='w-4 h-4' />
                                X(Twitter)
                              </div>
                            </li>
                          </a>
                        )}
                      </ul>
                    )}
                  </details>
                </li>
              </ul>
            </ul>
          </div>
          <div className='navbar-end'>
            {/* マウントされてから表示しないとhydration errorが発生する */}
            {mounted && (
              <div>
                {theme === 'dim' && (
                  <button className='btn btn-circle' onClick={themeSwitcher}>
                    <FaRegSun className='swap-on w-5 h-5' />
                  </button>
                )}
                {theme === 'light' && (
                  <button className='btn btn-circle' onClick={themeSwitcher}>
                    <FaRegMoon className='swap-off w-5 h-5' />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

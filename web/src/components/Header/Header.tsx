'use client'

import useSwitchTheme from '@/utils/theme'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FaRegMoon, FaRegSun } from 'react-icons/fa'

const Header = () => {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  const themeSwitcher = useSwitchTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
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
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box'
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Works</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Zenn</a>
            </li>
          </ul>
        </div>
        <a className='btn btn-ghost text-xl'>
          {process.env.NEXT_PUBLIC_REALNAME}
        </a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a className='font-bold'>Home</a>
          </li>
          <li>
            <a className='font-bold'>Profile</a>
          </li>
          <li>
            <a className='font-bold'>Works</a>
          </li>
          <li>
            <a className='font-bold'>Contact</a>
          </li>
          <li>
            <a className='font-bold'>Zenn</a>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        {/* sun icon */}
        {theme === 'dark' && (
          <button className='btn btn-circle'>
            <FaRegSun className='swap-on w-5 h-5' onClick={themeSwitcher} />
          </button>
        )}

        {/* moon icon */}
        {theme === 'light' && (
          <button className='btn btn-circle'>
            <FaRegMoon className='swap-off w-5 h-5' onClick={themeSwitcher} />
          </button>
        )}
      </div>
    </div>
  )
}

export default Header
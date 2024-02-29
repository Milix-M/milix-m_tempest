'use client'

import Image from 'next/image'
import { BiSolidIdCard } from 'react-icons/bi'
import { IoIosPin } from 'react-icons/io'

const Index = () => {
  return (
    <div>
      <div className='flex justify-center'>
          <div
            className='tooltip'
            data-tip={process.env.NEXT_PUBLIC_REALNAME as string}
          >
            <div className='avatar'>
              <div className='w-44 rounded'>
                <Image
                  width={2000}
                  height={2000}
                  src='/profile_img.jpg'
                  alt={process.env.NEXT_PUBLIC_REALNAME as string}
                  priority
                />
              </div>
            </div>
          </div>
      </div>
      <h1 className='text-center text-4xl font-bold pt-1'>
        {process.env.NEXT_PUBLIC_REALNAME}
      </h1>
      <div className='pt-1'>
          <div className='flex justify-center'>
            <IoIosPin className='w-8 mt-1' />
            <p>{process.env.NEXT_PUBLIC_LOCATION}</p>
          </div>
          <div className='flex justify-center'>
            <BiSolidIdCard className='w-8 mt-1' />
            <p>{process.env.NEXT_PUBLIC_PROFESSION}</p>
          </div>
      </div>
      <div className='pt-8 max-w-sm w-full'>
        <p className='work-break text-center'>{process.env.NEXT_PUBLIC_BIO}</p>
      </div>
    </div>
  )
}

export default Index

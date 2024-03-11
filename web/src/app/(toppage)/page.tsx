'use client'

import Profile from '@/components/Home/Profile'

export default function Home () {
  return (
    <div
      className='mt-[68px] md:min-h-[calc(100dvh-124px)] min-h-[calc(100dvh-180px)] flex items-center justify-center w-full p-2'
      // style={{
      //   backgroundImage: `url("/bg_img.jpg")`,
      //   backgroundSize: 'cover',
      //   borderImageRepeat: 'stretch'
      // }}
    >
      <Profile />
    </div>
  )
}

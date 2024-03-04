import { SiTypescript } from 'react-icons/si'
import Skills from '@/components/Skills/Skills'
import Image from 'next/image'
import { BiSolidIdCard } from 'react-icons/bi'
import { FaPython } from 'react-icons/fa'
import { IoIosPin } from 'react-icons/io'

export default function Profile () {
  return (
    <div className='flex justify-center mt-3'>
      <div className='mt-[68px] mx-auto p-2'>
        <h1 className='font-bold text-3xl pl-4 mb-5'>Profile</h1>
        <div className='sm:flex'>
          <div className='avatar p-10 flex justify-center'>
            <div className='w-44 rounded-full'>
              <Image
                width={2000}
                height={2000}
                src='/profile_img.jpg'
                alt={process.env.NEXT_PUBLIC_REALNAME as string}
                priority
              />
            </div>
          </div>
          <div>
            <h1 className='text-center text-4xl font-bold pt-1'>
              {process.env.NEXT_PUBLIC_REALNAME}
            </h1>
            <div className='pt-1 flex justify-center'>
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
              <p className='work-break text-center'>
                {process.env.NEXT_PUBLIC_BIO}
              </p>
            </div>
          </div>
        </div>
        <h1 className='font-bold text-2xl mt-3 mb-9'>Skills</h1>
        <div className='grid sm:grid-cols-2 gap-7 grid-cols-1'>
          <Skills
            title='Python'
            description='Pythonは、Guido van Rossumによって設計された高水準のプログラミング言語で、1991年に最初にリリースされました。Pythonは、読みやすく、効率的なコードを書くことを重視しており、多くのプログラマーにとって最初の選択肢となっています。'
            icon={<FaPython className='w-10 h-10' />}
          />
          <Skills
            title='TypeScript'
            description='TypeScriptは、Microsoftによって開発されたオープンソースのプログラミング言語で、JavaScriptのスーパーセットです。TypeScriptは、静的型付けをサポートし、コードの品質を向上させます。'
            icon={<SiTypescript className='w-9 h-9' />}
          />
          <Skills
            title='TypeScript'
            description='TypeScriptは、Microsoftによって開発されたオープンソースのプログラミング言語で、JavaScriptのスーパーセットです。TypeScriptは、静的型付けをサポートし、コードの品質を向上させます。'
            icon={<SiTypescript className='w-9 h-9' />}
          />
          <Skills
            title='TypeScript'
            description='TypeScriptは、Microsoftによって開発されたオープンソースのプログラミング言語で、JavaScriptのスーパーセットです。TypeScriptは、静的型付けをサポートし、コードの品質を向上させます。'
            icon={<SiTypescript className='w-9 h-9' />}
          />
        </div>
      </div>
    </div>
  )
}

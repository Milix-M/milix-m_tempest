import { FaDocker } from "react-icons/fa"; 
import { FaJava } from "react-icons/fa"; 
import { SiNextdotjs } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import Skills from '@/components/Skills/Skills'
import { FaPython } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'

export default function SkillsSet () {
  return (
    <>
      <Skills
        title='Python'
        description='僕が使用しているメインの言語です。FastAPIを使用したAPI開発やFlaskを使用したWebアプリの開発まで幅広く使えます。'
        icon={<FaPython className='w-9 h-9' />}
      />
      <Skills
        title='TypeScript'
        description='フロントエンドの開発でこの言語を使用しています。型がかけて便利なので使用しています。'
        icon={<SiTypescript className='w-9 h-9' />}
      />
      <Skills
        title='React'
        description='TypeScriptと合わせて使用しています。最近はこれがないとフロントエンドの開発はできないかも。'
        icon={<FaReact className='w-9 h-9' />}
      />
      <Skills
        title='Next.js'
        description='このポートフォリオの開発、SNSアプリの開発で使用しました。Next.jsは最強です。'
        icon={<SiNextdotjs className='w-9 h-9' />}
      />
      <Skills
        title='Java'
        description='仕事で使っている言語です。'
        icon={<FaJava className='w-9 h-9' />}
      />
      <Skills
        title='Docker'
        description='Docker最強!Docker最強!'
        icon={<FaDocker className='w-9 h-9' />}
      />
    </>
  )
}

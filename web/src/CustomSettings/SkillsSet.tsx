import { FaDocker, FaLinux } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiKubernetes, SiNextdotjs } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import Skills from '@/components/Skills/Skills'
import { FaPython } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'

export default function SkillsSet() {
  return (
    <>
      <Skills
        title='Python'
        description='僕が使用しているメインの言語です。FastAPIを使用したAPI開発やFlaskを使用したWebアプリの開発まで幅広く使えます。'
        icon={<FaPython className='w-9 h-9' />}
      />
      <Skills
        title='TypeScript'
        description='フロントエンドの開発でこの言語を使用しています。JSと比べ型がかけて便利です。'
        icon={<SiTypescript className='w-9 h-9' />}
      />
      <Skills
        title='React'
        description='TypeScriptと合わせて使用しています。'
        icon={<FaReact className='w-9 h-9' />}
      />
      <Skills
        title='Next.js'
        description='このポートフォリオの開発、SNSアプリの開発で使用しました。'
        icon={<SiNextdotjs className='w-9 h-9' />}
      />
      <Skills
        title='Java'
        description='仕事で使っている言語です。Springフレームワークをメインで使用しています。'
        icon={<FaJava className='w-9 h-9' />}
      />
      <Skills
        title='Docker'
        description='個人開発から仕事まで幅広く使用しています。'
        icon={<FaDocker className='w-9 h-9' />}
      />
      <Skills
        title='Kubernetes'
        description='仕事で使用しています。'
        icon={<SiKubernetes className='w-9 h-9' />}
      />
      <Skills
        title='Linux'
        description='仕事、趣味で使用しています。'
        icon={<FaLinux className='w-9 h-9' />}
      />
    </>
  )
}

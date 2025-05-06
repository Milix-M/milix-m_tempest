import { FaAws, FaCloud, FaDocker, FaLinux } from "react-icons/fa";
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
      description='FastAPIを用いた高性能なAPI開発や、Flaskを活用したスケーラブルなWebアプリケーションの構築を行っています。'
      icon={<FaPython className='w-9 h-9' />}
      />
      <Skills
      title='TypeScript'
      description='フロントエンド開発において欠かせない言語で、型安全性を活かした堅牢なコードベースを構築しています。'
      icon={<SiTypescript className='w-9 h-9' />}
      />
      <Skills
      title='React'
      description='TypeScriptと組み合わせて、モダンでインタラクティブなユーザーインターフェースを効率的に開発しています。'
      icon={<FaReact className='w-9 h-9' />}
      />
      <Skills
      title='Next.js'
      description='このポートフォリオやSNSアプリの開発に使用し、サーバーサイドレンダリングや静的サイト生成を活用した高性能なWebアプリケーションを構築しています。'
      icon={<SiNextdotjs className='w-9 h-9' />}
      />
      <Skills
      title='Java'
      description='業務で使用している言語で、Springフレームワークを活用したエンタープライズレベルのアプリケーション開発を行っています。'
      icon={<FaJava className='w-9 h-9' />}
      />
      <Skills
      title='Docker'
      description='コンテナ技術を駆使し、開発環境の効率化や本番環境でのスケーラブルなデプロイを実現しています。'
      icon={<FaDocker className='w-9 h-9' />}
      />
      <Skills
      title='Kubernetes'
      description='業務で使用し、大規模なコンテナオーケストレーションを通じて信頼性の高いシステム運用を行っています。'
      icon={<SiKubernetes className='w-9 h-9' />}
      />
      <Skills
      title='Linux(Ubuntu)'
      description='業務や趣味で活用し、カーネルのビルドやシステムチューニングなど、深いレベルでの操作経験があります。'
      icon={<FaLinux className='w-9 h-9' />}
      />
      <Skills
      title='OpenStack'
      description='プライベートクラウドの構築に携わり、インフラストラクチャの自動化と最適化を実現しています。'
      icon={<FaCloud className='w-9 h-9' />}
      />
      <Skills
      title='AWS'
      description='クラウドインフラの設計と運用を担当し、スケーラブルで高可用性のシステムを構築しています。'
      icon={<FaAws className='w-9 h-9' />}
      />
    </>
  )
}

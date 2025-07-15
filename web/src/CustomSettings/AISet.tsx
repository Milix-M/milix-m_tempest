import Skills from '@/components/Skills/Skills'
import { GoCopilot } from "react-icons/go";
import { RiGeminiFill, RiRobot2Line } from "react-icons/ri";


export default function AIset() {
  return (
    <>
      <Skills
        title='GitHub Copilot (Bussiness)'
        description='実務・個人開発で使用。コーディングの効率化と品質向上に貢献。'
        icon={<GoCopilot className='w-9 h-9' />}
      />
      <Skills
        title='Cline'
        description='Gemini CLI登場以前に使用しており、AIアシスタントとして個人開発を支援。(MCPを活用)'
        icon={<RiRobot2Line className='w-9 h-9' />}
      />
      <Skills
        title='Gemini Pro'
        description='業務・個人開発・生活の一部で活用。'
        icon={<RiGeminiFill className='w-9 h-9' />}
      />
      <Skills
        title='Gemini CLI'
        description='個人開発で使用。コマンドラインでのAIアシスタントとして、MCPを活用し、開発だけでなくドキュメント作成やデータ分析にも利用。'
        icon={<RiGeminiFill className='w-9 h-9' />}
      />
    </>
  )
}

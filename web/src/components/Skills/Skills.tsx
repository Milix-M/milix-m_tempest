type SkillsProps = {
  title: string
  description: string
  icon: React.ReactNode
}

const Skills: React.FC<SkillsProps> = ({ title, description, icon }) => {
  return (
    <div className='max-w-md bg-neutral p-3 rounded'>
      <div className='flex'>
        <div className='mr-3 rounded-md aspect-square w-full max-h-14 flex justify-center items-center'>
          {icon}
        </div>
        <div>
          <h2 className='text-xl font-bold'>{title}</h2>
          <p className='break-words'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Skills

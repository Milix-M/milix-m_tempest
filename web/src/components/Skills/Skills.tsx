type SkillsProps = {
  title: string
  description: string
  icon: React.ReactNode
}

const Skills: React.FC<SkillsProps> = ({ title, description, icon }) => {
  return (
    <div className='max-w-md bg-neutral p-3 rounded'>
      <div className='flex h-full w-full'>
        <div className='rounded-md mr-4 items-center'>
          <div className='justify-center items-center flex p-3 rounded'>{icon}</div>
        </div>
        <div>
          <h2 className='text-xl font-bold my-1'>{title}</h2>
          <p className='break-words text-slate-400'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Skills

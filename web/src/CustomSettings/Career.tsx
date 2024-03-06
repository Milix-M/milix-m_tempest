const Career = () => {
  return (
    <div>
      <div className='join join-vertical w-full'>
        <div className='collapse collapse-arrow join-item border border-base-300'>
          <input type='radio' name='my-accordion-4' defaultChecked />
          <div className='collapse-title text-xl font-medium'>
            XXX High School <span className='ml-1 text-sm'>2021/04 ~ 2024/03</span>
          </div>
          <div className='collapse-content'>
            <p>普通科</p>
          </div>
        </div>
        <div className='collapse collapse-arrow join-item border border-base-300'>
          <input type='radio' name='my-accordion-4' defaultChecked />
          <div className='collapse-title text-xl font-medium'>
            名古屋市 IT系中小企業
            <span className='ml-1 text-sm'>2024/03 ~</span>
          </div>
          <div className='collapse-content'>
            <p>Java</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Career

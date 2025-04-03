const CareerTimeline = () => {
  return (
    <div>
      <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical'>
        <li>
          <div className='timeline-middle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-start md:text-end mb-10'>
            <time className='font-mono italic'>2021/04</time>
            <div className='text-lg font-black'>S高等学校 普通科 入学</div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className='timeline-middle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-end mb-10'>
            <time className='font-mono italic'>2024/03</time>
            <div className='text-lg font-black'>S高等学校 卒業</div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className='timeline-middle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-end mb-10'>
            <time className='font-mono italic'>Now</time>
            <div className='text-lg font-black'>IT系中小企業(受託・SES)</div>
            Java+Springのマイクロサービス開発・Kubernetes,OpenStack,Linuxを使用したクラウドの検討、構築業務・Pythonを使用したAI学習基盤システムの開発に従事。
          </div>
          {/* <hr /> */}
        </li>
      </ul>
    </div>
  )
}

export default CareerTimeline

'use client'

// todo React hook form 導入

export default function Home () {
  return (
    <div>
      <h1 className='font-bold text-3xl sm:mb-10'>Contact</h1>
      <div>
        <div className='grid sm:grid-cols-2 gap-5 grid-cols-1'>
          <div className=''>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text'>名前</span>
                <span className='label-text-alt'>必須</span>
              </div>
              <input
                type='text'
                placeholder='Your Name'
                className='input input-bordered w-full'
              />
            </label>
          </div>
          <div className=''>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text'>メールアドレス</span>
                <span className='label-text-alt'>必須</span>
              </div>
              <input
                type='email'
                placeholder='Your Email Address'
                className='input input-bordered w-full'
              />
            </label>
          </div>
        </div>
        <label className='form-control w-full mt-4'>
          <div className='label'>
            <span className='label-text'>お問い合わせ内容</span>
            <span className='label-text-alt'>必須</span>
          </div>
          <textarea className='textarea textarea-bordered h-32'></textarea>
        </label>
        <div className='flex justify-center mt-4'>
          <button className='btn'>お問い合わせ送信</button>
        </div>
      </div>
    </div>
  )
}

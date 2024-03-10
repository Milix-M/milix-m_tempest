'use client'

// todo 送信ボタン押したあと、送信しました！メッセージを表示し、入力内容をクリアする

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import FetchForm from '@/utils/FetchForm'

const schema = yup
  .object({
    name: yup.string().required('名前を入力してください'),
    email: yup
      .string()
      .email('有効な形式ではありません')
      .required('メールアドレスを入力してください'),
    message: yup.string().required('お問い合わせ内容を入力してください')
  })
  .required()

export default function Contact () {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema)
  })

  const onSubmit = handleSubmit(data => {
    FetchForm(data)
  })

  return (
    <div>
      <h1 className='font-bold text-3xl mb-7'>Contact</h1>
      <form onSubmit={onSubmit}>
        <input type='text' name='wana' className='hidden' />
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
                  {...register('name')}
                />
              </label>
              {errors.name?.message && (
                <span className='text-sm'>{errors.name?.message}</span>
              )}
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
                  {...register('email')}
                />
              </label>
              {errors.email?.message && (
                <span className='text-sm'>{errors.email?.message}</span>
              )}
            </div>
          </div>
          <label className='form-control w-full mt-4'>
            <div className='label'>
              <span className='label-text'>お問い合わせ内容</span>
              <span className='label-text-alt'>必須</span>
            </div>
            <textarea
              className='textarea textarea-bordered h-32'
              {...register('message')}
            ></textarea>
          </label>
          {errors.message?.message && (
            <span className='text-sm'>{errors.message?.message}</span>
          )}
          <div className='flex justify-center mt-4'>
            <button className='btn'>お問い合わせ送信</button>
          </div>
        </div>
      </form>
    </div>
  )
}

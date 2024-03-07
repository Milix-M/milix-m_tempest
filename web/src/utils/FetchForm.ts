import 'server-only'

const FetchForm = async (formProps: FormProps) => {
  try {
    const responce = await fetch(process.env.CONTACT_FORM_URL as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formProps)
    })
  } catch (error) {
    console.log('error!')
    throw error
  }
}

export default FetchForm

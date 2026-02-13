"use client"

const Error = ({error, reset}: {error:Error, reset: () => void}) => {
  return (
    <div className='h-screen flex justify-center items-center flex-col gap-5 '>

    <div className='text-2xl'>Ooops nimadir xato ketdi</div>
    <div className='text-3xl'>500</div>
    <div className='text-2xl'> Rerrorning xabar: {error.message} </div>
    </div>
  )
}

export default Error
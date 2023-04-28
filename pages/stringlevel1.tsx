import React from 'react'
import { useRouter } from 'next/router'



const String: React.FC = () => {

  const router = useRouter()

  const backHome = () => {
    router.push('/')
  }

  const handleString = () => {
    router.push('/arraylevel1')
  }

  return (
    <>
       <h1 className='text-center text-2xl my-10 pt-10 text-neutral-500'>
         Arrays | Strings
       </h1>

       <div className='btns ps-2' >
        <button className='bg-violet-300 mx-5 ms-10 px-3 py-2 mt-10 rounded-md'
              onClick={backHome}> 
         Back
      </button>

        <button className="bg-sky-300 ms-10 px-3 py-2 rounded-md" 
                onClick={handleString} >
           Number Challanges
        </button>
      </div>

      <style>{`
       
        .btns {
          position: relative;
          width: 350px;
          margin: 0 auto;
        }

        .select-box {
          position: relative;
          width: 350px;
          margin: 0 auto;
        }

        #selectMethod{
          width: 87%;

        }
      
      `}</style>
    </>
  )
}

export default String
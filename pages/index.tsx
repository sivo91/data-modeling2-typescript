import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
      <h1 className="text-2xl text-center text-neutral-500 mt-10 pt-10  font-bold underline ">
        Data Modeling
      </h1>

     <div className='container py-10 px-10 mx-0 min-w-full flex flex-col items-center'>
       <Link href={'https://github.com/sivo91/data-modeling2-typescript'}>
         <button className='bg-slate-950 text-gray-50 px-3 py-2 rounded-lg
              '>
        GitHub Source
      </button>
       </Link>
     </div>

      <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
         
         <Link href={'/arraylevel1'}>
          <button className='bg-blue-500 text-gray-50 px-3 py-2'>
            Array | Numbers
          </button>
         </Link>

         <Link href={'/stringlevel1'}>
          <button className='bg-blue-500 text-gray-50 my-3 px-3 py-2'>
            Array | Strings
          </button>
         </Link>
         
      </div>

      <style>{`
       
       .customBorder:nth-child(1),
       .customBorder:nth-child(2),
       .customBorder:nth-child(3) {
         border-top: 1px solid black;
       }

       .customBorder:nth-child(1),
       .customBorder:nth-child(4),
       .customBorder:nth-child(6) {
        border-left: 1px solid black;
       }

       .customBorder:nth-child(3),
       .customBorder:nth-child(5),
       .customBorder:nth-child(7) {
        border-right: 1px solid black;
       }

       .customBorder:nth-child(6),
       .customBorder:nth-child(7) {
        border-bottom: 1px solid black;
       }
      
      `}</style>
   </>
  )
}

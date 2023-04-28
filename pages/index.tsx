import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
      <h1 className="text-2xl text-center text-neutral-500 mt-10 pt-10  font-bold underline">
        Data Modeling
      </h1>

      <div className="grid grid-cols-3 gap-4 mt-10 mx-4">

        <div className="bg-stone-100 py-10 rounded-tl-lg customBorder text-center">
          <Link href={'/arraylevel1'}>
           Array | Numbers
          </Link>
        </div>

        <div className="bg-stone-100 py-10 customBorder">02</div>
        <div className="bg-stone-100 py-10 rounded-tr-lg customBorder">03</div>
        <div className="col-span-2 bg-stone-100 py-10 customBorder">04</div>
        <div className="bg-stone-100 py-10 customBorder">05</div>
        <div className="bg-stone-100 py-10 rounded-bl-lg customBorder">06</div>
        <div className="col-span-2 bg-stone-100 py-10 rounded-br-lg customBorder">07</div>
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

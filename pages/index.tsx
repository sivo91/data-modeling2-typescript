import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
      <h1 className="text-2xl text-center text-neutral-200 mt-10 pt-10  font-bold underline">
        Welcome to 
      </h1>
   </>
  )
}

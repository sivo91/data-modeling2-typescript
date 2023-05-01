import React, { useState, useRef, useEffect, FormEvent } from 'react'
import { useRouter } from 'next/router'



const sentences = [
  `The lake is a long way from here.`,
  `Purple is the best city in the forest.`,
  `He colored deep space a soft yellow.`,
  `She looked into the mirror and saw another person.`,
  `He colored deep space a soft yellow.`,
  `Edith could decide if she should paint her teeth or brush her nails.`,
  `The doll spun around in circles in hopes of coming alive.`,
  `They were excited to see their first sloth.`,
  `He waited for the stop sign to turn to a go sign.`,
  `Abstraction is often one floor above you.`,
  `Možná je to tím, že to pak na nás vymysleli `,
  `V nasledujúcej sezóne ho nahradilo družstvo HC Slovan Bratislava`,
  `Rock music approaches at high velocity`,
  `Greetings from the real universe`,
  `Be careful with that butter knife`,
  `How to Iterate Through Strings in JavaScript`,
  `The String Array can be iterated using the for loop`

]


const obj = [
        {select: 'select'},
        {even: 'even | odd length'},
        {shortest: 'shortest | longest string'},
        {shortesLength: 'shortes.length | longest.length'}
        
       ]


const String: React.FC = () => {


  let arr: string[] = []

  const [strings, setStrings] = useState<string>('')
  const ref = useRef<HTMLSelectElement>(null)
  const [output, setOutput] = useState<number | string>()
  const [outputArr, setOutputArr] = useState<string[]>([])
  const router = useRouter()



  const genrateSentence = (): void => {
     setOutput('')
     let arr: string = ''

       for(let i = 0; i < sentences.length; i++) {

          let randomVeta = Math.floor(Math.random() * sentences.length)
          //console.log(sentences[randomVeta])
           arr = sentences[randomVeta]
          setStrings(arr)
       } 

     } 

  const handleClear = ():void => {
      setOutput('')
  }

  const handleChange = (): void => {
    //console.log(ref.current!.value)
    let option = ref.current!.value
    console.log(option)

    if(strings === '') {
      alert('get your sentence')
    }

    if(option === 'shortest') {
      shortest(strings)
    } else if(option === 'even') {
      evenOddLength(strings)
    }
  }

  

  const evenOddLength = (t: string) => {
     let text = strings.split(' ')
      const even: string [] = []
     const odd: string [] = []

     for(let i = 0; i < text.length; i++) {
      if(text[i].length % 2 === 0) {
         even.push(text[i])
      } else {
        odd.push(text[i])
      }
     }

    setOutput(`Even string: [ ${even} ],  Odd string: [ ${odd} ]`); 
  }

  const shortest = (t:string) => {
    let text = t.split(' ') //  !   '' !== ' '
    let shortest: string = text[1]
    let longest: string = text[0]
   
    // SHORTEST
    for(let i = 0; i < text.length; i++) {
       if( text[i].length < shortest.length) {
        shortest = text[i]
       }
    }

    // LONGEST
    for(let i = 0; i < text.length; i++) {
      if(text[i].length > longest.length) {
        longest = text[i]
      }
    }


    setOutput(`Your shortest string is: [ ${shortest} ], \n\n 
               Your longest string is: [ ${longest} ] `)
  }



    const backHome = () => {
    router.push('/')
  }

  return (
    <>
       <h1 className='text-center text-2xl my-10 pt-10 text-neutral-500'>
         Arrays | Strings
       </h1>

       
      <div className='btns ps-2' >
        <button className="bg-blue-300 ms-10 px-3 py-2 rounded-md "
                onClick={() => genrateSentence()} >
           Generate Numbers
        </button>

        <button className="bg-orange-300 ms-10 px-3 py-2 rounded-md" 
                onClick={() => handleClear()} >
           Clear
        </button>
      </div>



      <h1 className="text-center text-light my-7" id='list'>{strings}</h1>




       {/* SELECT OPTION */}
      <div className='select-box '>
         <select name="selectMethod" id="selectMethod" className='mx-5 py-2'
          ref={ref} onChange={handleChange} >

          {obj.map((x, i) => (
            <option key={i} value={Object.keys(x)}  >
              {Object.values(x)}
            </option>
          ))}
        
        </select>
      </div>


        {/* OUTPUT */}
      <p className='text-center my-5'>{output}</p>

     


       <div className='btns ps-2' >
        <button className='bg-violet-300 mx-5 ms-10 px-3 py-2 mt-10 rounded-md'
              onClick={backHome}> 
         Back
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
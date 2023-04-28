import React, { useState, useRef, useEffect, FormEvent } from 'react'
import { useRouter } from 'next/router'




const Data:React.FC = () => {

 let arr: number[] = []
  const obj = [
        {select: 'select'},
        {even: 'even/odd nums'},
        {small: 'smallest/highest'},
        {pop:'remove last number'},
        {removeFirst: 'remove first number'},
        {sum: 'sum of numbers'},
        {avg: 'average of nums'},
        {over50: 'remove num bigger than 50'},
        {pair: 'find 2 numbers to sum 15'}
       ]


  const [numbers, setNumbers] = useState<number[]>([])
  const ref = useRef<HTMLSelectElement>(null)
  const [output, setOutput] = useState<number | string>()
  const router = useRouter()

  
    
   
   const genrateNums = (): void => {

    setOutput('')
    let arr: number[] = []

    for(let i = 0; i < 8; i++) {

      let n = Math.floor(Math.random() * 90 )
      if(arr[i] === n) {
        n += 2
      } else {
        arr.push(n)
      }     
    }
    setNumbers(arr)
  }

  const clearNumbers = (): void => {
     setNumbers([])
     setOutput([])
  }

 

   


  const handleChange = ( /* React.ChangeEventHandler<HTMLSelectElement> */ ): void => {
    //console.log(ref.current!.value)
    let option = ref.current!.value
  

     if(option === 'even') { 
      evenOdd(numbers)
    } else if(option === 'small') {
      findSmall(numbers)
    } else if ( option === 'pop') {
      removeLastNum(numbers)
    } else if ( option === 'removeFirst') {
      removeFirst(numbers)
    } else if ( option === 'sum'){
      sum(numbers)
    } else if (option === 'avg') {
      average(numbers)
    } else if ( option === 'over50') {
      over50(numbers)
    } else if (option === 'pair') {
      findPair(numbers)
    } else if (option === 'findNumber7') {
      findNumber7(numbers)
    } else if (option === 'findNumber7') {
      findNumber7(numbers)
    } 
  }
  

/*****  FUNCTIONS TO GET SOLUTION *******/

  // EVEN/ODD
const evenOdd = (x:number[]) => {
    let even = []
    let odd = []

  for(let i = 0; i < x.length - 1; i++) {
    let num = Number(x[i])
    if(num % 2 === 0) {
      even.push(num)
    } else {
      odd.push(num)
    }
  }

   setOutput(`Your even numbers are: ${even}, and odd numbers are: ${odd} `)
}

function findSmall(arr: number[]) {
 
   let small = arr[0]
   let highest = arr[0]

   for(let i = 0; i < arr.length; i++) {
    let array = Number(arr[i])

   if(array < small ) {
    small = array
   } 
    if (array > highest) {
     highest = array
    } 
   }

  setOutput(`Your smallest num is: ${small} and highest num is: ${highest}.`)

}

function removeLastNum(x:number[]) {

  let array = []
  for(let i = 0; i < x.length; i++) {

    array.push(Number(x[i]))
  }
  let a = array.pop()
  
  setOutput(`Your numbers are: ${array} removed num is ${a}`)
}

function removeFirst(x: number[]) {
  let array = []
  for(let i = 0; i < x.length; i++) {
    array.push(Number(x[i]))
  }

  let f = array.shift()

  setOutput(`Your numbers are: ${array}, removed num is: ${f}`)
}

 function  sum(x: number[]) {
  let array = []
  //let singles = 0
  let result = 0

  // convert string to num
  for(let i = 0; i < x.length; i++ ) {
    array.push(Number(x[i]))
  }

  // make copy
 /*  singles = array.slice()
  for(let i = 0; i < singles.length; i++) {
    result += singles[i]
  } */

  for(let i = 0; i < array.length; i++) {
    result += array[i]
  }

  setOutput(`Sum is: ${result}`)
}

function average(x: number[]) {
  let array = []
  let counter = 0
  let result = 0

  for(let i = 0; i < x.length; i++) {
    array.push(Number(x[i]))
  }
   
  let copy = array.slice()
  
  for(let i = 0; i < copy.length; i++ ) {
    counter += copy[i]
  }

  result = counter / 2
  //console.log(counter, result)

  setOutput(`Sum is: ${counter} and average is: ${result.toFixed(2)}`)
}

function over50 (x: number[]) {
  let array = []

  for(let i = 0; i < x.length; i++) {   
    if(Number(x[i] <= 50)) {
      array.push(Number(x[i]))
    }
  }
 
  //console.log(array)
  setOutput(`Your numbers are: ${array}` ) 

}

function findPair(x: number[]) {
 let arr = []
 let pair = []
  let n = 15

  for(let i = 0; i < x.length; i++) {
     arr.push(x[i])
  }

  let last = arr.length - 1
  let ar = arr.slice(0, last)

     for(let i = 0; i < ar.length; i++) {
 
       for(let j = i + 1; j < ar.length; j++) {
           let a = Number(ar[i])
           let b = Number(ar[j])
        if( a + b === n) {
          pair.push(a, b)
        } 
       }
    }
    console.log(pair)

    if(pair[0] === undefined && pair[1] === undefined) {
      setOutput(`pair of numbers were not found, please try it again`)
    } else {
      setOutput(`first num is ${pair[0]}  + second num is ${pair[1]} = ${n}`)
    }

}

function findNumber7(x: number[]) {
  console.log(x)
  const singleNumbers = x.toString().split('')
  console.log(singleNumbers)
  const arr = []
  const number7 = []
  let count7 = 0

  for(let i = 0; i < singleNumbers.length; i++) {
    if(singleNumbers[i] === ','){
      continue
    }
    arr.push(Number(singleNumbers[i]))
  }
  console.log(arr)

  for(let i = 0; i < arr.length; i++) {
       if(arr[i] === 7) {
        number7.push(arr[i])
        count7++
       }
  }

   number7.length < 1 ? 
      setOutput('Your numbers dont contains number 7') :
      setOutput(`We find ${count7} x number 7 | [ ${number7} ]`)
}
  
  


  const backHome = () => {
    router.push('/')
  }
    
  return (
    
    <>
       <h1 className='text-center text-2xl my-10 pt-10 text-neutral-500'>
         Arrays | level I
       </h1>


      <div className='mt-5 py-5'>
        <button className="bg-blue-300 mx-5 px-3 py-2 rounded-md"
                onClick={() => genrateNums()} >
           Generate Numbers
        </button>

        <button className="bg-blue-300 mx-5 px-3 py-2 rounded-md" 
                onClick={() => clearNumbers()} >
           Clear
        </button>
      </div>


      <div className="text-center text-light" id='list'>{numbers.join(' , ')}</div>


       <select name="selectMethod" id="selectMethod" className='mx-5'
        ref={ref} onChange={handleChange} >

        {obj.map((x, i) => (
          <option key={i} value={Object.keys(x)}  >
            {Object.values(x)}
          </option>
        ))}
        
      </select>
    

      <div className="my-3 text-center">{output}</div>

      <button className='bg-indigo-300 mx-5 px-3 py-2 mt-10 rounded-md'
              onClick={backHome}> 
         Back
      </button>
    </>
  )
}

export default Data
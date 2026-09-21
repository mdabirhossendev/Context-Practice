import React from 'react'
import { useCounter } from '../../context/CountContext'

const CounterBtn = () => {
   const {increment, decrement, reset} = useCounter()
  
  return (
    <>
      <div className='flex gap-2.5'>
        <button onClick={increment} className='text-lg px-8 py-2.5 text-white bg-green-700 font-500 border-none rounded-sm active:text-black active:bg-transparent'>IncrementBtn</button>
        <button onClick={reset} className='text-lg px-8 py-2.5 text-white bg-red-700 font-500 border-none rounded-sm active:text-black active:bg-transparent'>Reset</button>
        <button onClick={decrement} className='text-lg px-8 py-2.5 text-white bg-green-700 font-500 border-none rounded-sm active:text-black active:bg-transparent'>DecrementBtn</button>
      </div>
    </>
  )
}

export default CounterBtn

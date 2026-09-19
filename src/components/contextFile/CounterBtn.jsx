import React from 'react'

const CounterBtn = () => {
  return (
    <>
      <div className='flex gap-2.5'>
        <button className='text-lg px-8 py-2.5 text-white bg-green-700 font-500 border-none rounded-sm active:text-black active:bg-transparent'>IncrementBtn</button>
        <button className='text-lg px-8 py-2.5 text-white bg-green-700 font-500 border-none rounded-sm active:text-black active:bg-transparent'>DecrementBtn</button>
      </div>
    </>
  )
}

export default CounterBtn

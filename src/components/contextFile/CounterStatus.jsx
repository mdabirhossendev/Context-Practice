import React from 'react'
import { useCounter } from '../../context/CountContext'

const CounterStatus = () => {
  const {count} = useCounter()

  let massage = "newtrol"
  let color = "bg-blue-700"

  if (count > 0 ){
    massage = "positive"
    color = "bg-green-700"
  }else if(count < 0){
    massage = "nagetive"
    color = "bg-red-700"
  }
  return (
    <>
      <h1 className={`text-lg px-8 py-2 rounded-lg text-white ${color}`}>Status:{massage}</h1>
    </>
  )
}

export default CounterStatus

import React from 'react'

const CounterStatus = ({count}) => {

  let massage = "newtrol"
  let color = "text-blue-700"

  if (count > 0 ){
    massage = "positive"
    color = "text-green-700"
  }else if(count < 0){
    massage = "nagetive"
    color = "text-red-700"
  }
  return (
    <>
      <h1 className={`text-lg ${color}`}>Status:{massage}</h1>
    </>
  )
}

export default CounterStatus

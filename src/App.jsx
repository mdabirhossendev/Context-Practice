import { useState } from "react"
import CounterBtn from "./components/contextFile/CounterBtn"
import CounterDisplay from "./components/contextFile/CounterDisplay"
import CounterStatus from "./components/contextFile/CounterStatus"
import { CountProvider } from "./context/CountContext"


function App() {

  return (
    <>

    <CountProvider>
      <div className="w-330 m-auto">

        <div className="flex justify-center items-center h-screen">
          <div className="text-center rounded-sm shadow-2xl h-150 w-125 flex flex-col gap-10 justify-center items-center ">
            <div></div>
            <CounterDisplay/>
            <CounterBtn />
            <CounterStatus />
          </div>

        </div>
      </div>

    </CountProvider>
    </>
  )
}

export default App

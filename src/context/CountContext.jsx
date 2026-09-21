import { Children, createContext, useContext, useState } from "react";

 const CountContext = createContext()


export function CountProvider({ children }) {
    const [count, setCount] = useState(0)


    const increment = () => setCount((prev) => prev + 1);
    const reset = () => setCount(0)
    const decrement = () => setCount((prev) => prev - 1)

    let valueData = { increment, decrement, reset, count }

    return (
        <CountContext.Provider value={valueData} >
            {children}
        </CountContext.Provider >
    )

}

export function useCounter() {
    const context = useContext(CountContext)
    return context
}

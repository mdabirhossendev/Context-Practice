import { useCounter } from '../../context/CountContext'

const CounterDisplay = () => {
  const {count} = useCounter()
  return (
    <>
      <p className='text-2xl'>Count: {count}</p>
    </>
  )
}

export default CounterDisplay

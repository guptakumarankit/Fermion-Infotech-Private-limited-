import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/counter/CounterSlice'

const App = () => {
  const count = useSelector((state) => state.counter.value)
  // console.log("count" , count)
  const dispatch = useDispatch()
  console.log(dispatch)

  return (
   <>
    <div>{count}</div>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
   </>
  )
}

export default App
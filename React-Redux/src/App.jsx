import React from 'react'
import { useDispatch } from 'react-redux'
import Counter from './components/counter';

const App = () => {
  const dispatch = useDispatch();
  return (
    <div className='flex flex-col'>
      <Counter/>
      <div className='flex gap-3'>
        <button onClick={() => dispatch({type : "INCREMENT"})} className='bg-blue-300 border p-2'>Increment</button>
        <button onClick={() => dispatch({type : "DECREMENT"})} className='bg-blue-300 border p-2'>Decrement</button>
      </div> 
    </div>
  )
}

export default App
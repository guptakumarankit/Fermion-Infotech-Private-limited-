import React, { useEffect, useState } from 'react'
import Child from '../components/Child'

const App = () => {
  const [count , setCount] = useState(0);
  const [count2 , setCount2]  = useState(0);

  useEffect(() => {
    console.log("Parent is render");
  })

  return (
    <div className='flex justify-center items-center'>
      <div className='p-2 bg-red-200 h-100 border w-[50%]'>
      <h1 className='text-center'>Parent</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>{`count: ${count}`}</button>
      <br />
      <button onClick={() => setCount2(count2 + 1)} >{`count2: ${count2}`}</button>
      <Child count2={count2} setCount2={setCount2}/>
      {/* <Child/> // use when memo    */}
    </div>
    </div>
  )
}

export default App
import React, { useCallback, useState } from 'react'
import Child from './Child';

const Parent = () => {
  console.log('parent component render')
  
  const [countone , setCountOne] = useState(0);
  const [counttwo , setCountTwo] = useState(0);

    const fun = useCallback(() => {
        console.log("using useCallback function memorization ")
    } , [counttwo])


  return (
   <>
    <div>Parent</div>
    <button className='border' onClick={() => setCountOne(countone + 1)}>{`Countone : ${countone}`}</button>
    <Child counttwo={counttwo} setCountTwo={setCountTwo} fun={fun}/>
   </>
  )
}

export default Parent
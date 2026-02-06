import React, { useCallback } from 'react'

const Child = ({counttwo , setCountTwo , fun}) => {
  console.log('child component render')

  return (
    <>
      <p>Child</p>
      <div className='flex gap-3'>
         <button className='border' onClick={fun}>CallBack</button>
      <button className='border' onClick={() => setCountTwo(counttwo + 1)}>{`countTwo: ${counttwo}`}</button>
      </div>
    </>
  )
}

export default Child
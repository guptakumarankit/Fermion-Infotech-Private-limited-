import React, { useCallback } from 'react'

const Child = ({counttwo , setCountTwo , fun}) => {
  console.log('child component render')

  return (
    <>
      <p>Child</p>
      <button className='border' onClick={() => {setCountTwo(counttwo + 1) , fun()}}>{`countTwo: ${counttwo}`}</button>
    </>
  )
}

export default Child
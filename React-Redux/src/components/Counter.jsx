import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
  const count = useSelector(state => state);
  console.log("Count is:" , count);

  return (
    <div>{`count is : ${count}`}</div>
  )
}

export default Counter
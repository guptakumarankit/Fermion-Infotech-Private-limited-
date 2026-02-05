import React, { memo, useEffect, useMemo } from 'react'

const Child = ({count2 , setCount2}) => {

  useEffect(() => {
      console.log("Child is render")
    })

    const result = useMemo(function cal(){
        console.log("Havey Calculations.......")
        return count2 * 2;
    } , [count2])

  return (
    <div className='border mt-20 h-[50%]'>
      <h1 className='text-center'>Child</h1>
      <p>{result}</p>
    </div>
  )
}

export default Child;
// export default memo(Child);  // when use memo 
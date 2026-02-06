import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {id} = useParams();

  return (
    <div className='h-full w-full flex justify-center items-center bg-red-900'>
       {`user ${id}`}
    </div>
  )
}

export default User
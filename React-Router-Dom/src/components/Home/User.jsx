import React from 'react'
import { useParams } from 'react-router-dom'


const User = () => {
  const {id} = useParams();

  return (
    <div>
      <div> {`user ${id}`}</div>
    </div>
  )
}

export default User
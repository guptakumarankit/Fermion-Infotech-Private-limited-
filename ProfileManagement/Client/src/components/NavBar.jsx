import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='flex justify-between bg-gray-300 p-4'>
        <Link to="/">Home</Link>
        <Link to="addProfile">AddProfile</Link>
    </nav>
  )
}

export default NavBar
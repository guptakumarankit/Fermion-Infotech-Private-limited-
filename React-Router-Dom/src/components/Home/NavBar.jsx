import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav className="flex justify-evenly bg-red-200 p-3 text-red-800">
          <h1>NavBar</h1>
          <div className="flex gap-5">
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>
            <Link to="user/:id">Dynamic user</Link>
            <Link to="dashboard">Dash Board</Link>
          </div>
        </nav>
    </div>
  )
}

export default NavBar
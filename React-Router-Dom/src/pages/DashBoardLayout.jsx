import React from 'react' 
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'


const DashBoardLayout = () => {
  return (
    <div className='flex h-[100vh] w-[100vw]'>
      <SideBar/>
      <Outlet />
    </div>
  )
}

export default DashBoardLayout
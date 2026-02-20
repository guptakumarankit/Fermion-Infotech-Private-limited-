import { Outlet } from 'react-router-dom'
import NavBar from '../Layout/NavBar'
import toast, { Toaster } from "react-hot-toast";

const MainRoute = () => {
  return (
    <div>
        <Toaster position='top-center'/>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default MainRoute
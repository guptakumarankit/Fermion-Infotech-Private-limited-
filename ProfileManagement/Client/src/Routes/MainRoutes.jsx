import { Route, Routes } from 'react-router-dom'
import AddProfile from '../pages/AddProfile'
import Home from '../pages/Home'
import NavBar from '../components/NavBar'


const MainRoutes = () => {
  return (
   <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='addProfile' element={<AddProfile/>} />
    </Routes>
   </>
  )
}

export default MainRoutes
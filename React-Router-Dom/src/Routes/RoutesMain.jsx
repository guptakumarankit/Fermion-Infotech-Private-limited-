import { Routes , Route } from 'react-router-dom'
import HomeLayout from '../pages/HomeLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import User from '../pages/User'
import DashBoardLayout from '../pages/DashBoardLayout'
import DashBoard from '../pages/DashBoard'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings'

const RoutesMain = () => {
  return (
        <Routes className="bg-red-400">
          <Route path="/" element={<HomeLayout/>}>
              <Route index element={<Home/>} />
              <Route path="about" element={<About/>} />
              <Route path="contact" element={<Contact />} />
              <Route path="user/:id" element={<User />} />
          </Route>

          <Route path="/dashboard" element={<DashBoardLayout/>}>
            {/* index is used to show default page here default page is DashBoardHomePage */}
            <Route index element={<DashBoard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
  )
}

export default RoutesMain
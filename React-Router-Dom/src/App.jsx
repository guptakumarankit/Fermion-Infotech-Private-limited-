import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/Home/About";
import Contact from "./components/Home/Contact";
import User from "./components/Home/User";
import DashBoard from "./components/DashBoard/DashBoard";
import Profile from "./components/DashBoard/Profile";
import Settings from "./components/DashBoard/Settings";
import HomeLayout from "./components/Layouts/HomeLayout";
import DashBoardLayout from "./components/Layouts/DashBoardLayout";


const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;

// why tailwind not work in Route and BrowserRoute.
// Route not wrap in any html tag.
// Nested Route Doesn't work.

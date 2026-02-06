import React from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contant from "./components/pages/Contant";
import About from "./components/pages/About";
import User from "./components/pages/User";
import DashBoard from "./components/DashBoard/DashBoard";
import Profile from "./components/DashBoard/Profile";
import Settings from "./components/DashBoard/Settings";
import DashBoardHomePage from "./components/DashBoard/DashBoardHomePage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen w-scrren text-white bg-black">
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

        <Routes className="bg-red-400">
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="contact" element={<Contant />} />
          <Route path="user/:id" element={<User />} />

          <Route path="/dashboard" element={<DashBoard />}>
            <Route index element={<DashBoardHomePage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

// why tailwind not work in Route and BrowserRoute.
// Route not wrap in any html tag.
// Nested Route Doesn't work.

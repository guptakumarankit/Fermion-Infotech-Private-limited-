import React from "react";
import { Link, Outlet } from "react-router-dom";
import Profile from "./Profile";
import Settings from "./Settings";
import DashBoardHomePage from "./DashBoardHomePage";

const DashBoard = () => {
  return (
    <div className="flex h-full">
      <nav className="w-[30%] flex flex-col bg-yellow-500">
        <Link to="" element={<DashBoardHomePage />}></Link>
        <Link className=" p-2" to="profile" element={<Profile />}>
          Profile
        </Link>
        <Link className=" p-2" to="settings" element={<Settings />}>
          Settings
        </Link>
      </nav>

      {/* show children here  */}
      <Outlet />
    </div>
  );
};

export default DashBoard;

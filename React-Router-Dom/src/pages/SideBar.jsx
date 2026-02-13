import React from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import Settings from "./Settings";
import HomeLayout from "./HomeLayout";

const SideBar = () => {
  return (
    <div className="w-[20%] h-[100vh] bg-gray-200">
      <nav className="flex flex-col p-2 gap-3">
        <Link className="border p-2 rounded" to="profile" element={<Profile />}>
          Profile
        </Link>
        <Link
          className="border p-2 rounded"
          to="settings"
          element={<Settings />}
        >
          Settings
        </Link>
        <Link className="border p-2 rounded" to="/" element={<HomeLayout />}>
          Home
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;

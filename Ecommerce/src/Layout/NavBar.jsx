import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../ContextApi/AppContext";

const NavBar = () => {
  const { userLogin } = useContext(AppContext);

  return (
    <div className="flex justify-between pl-6 pr-6 pt-4 pb-4 bg-red-400">
      <Link to="/">Home</Link>
      <div className="flex gap-4">
        {!userLogin ? 
        (<Link to="/login">Login</Link>): (
        <Link to="/logout">Logout</Link>)
        }
        <Link to="/signIn">SignIn</Link>
      </div>
    </div>
  );
};

export default NavBar;

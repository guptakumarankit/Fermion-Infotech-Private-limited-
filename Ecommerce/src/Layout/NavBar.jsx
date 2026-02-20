import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../ContextApi/AppContext";

const NavBar = () => {
  const navigate = useNavigate();
  const { userLogin , setUserLogin } = useContext(AppContext);
  console.log(userLogin)

  const handleLogin = () => {
    setUserLogin(true);
    navigate("/login");
  }

  const handleLogout = () => {
    setUserLogin(false);
    navigate("/");
  }

  return (
    <div className="flex justify-between pl-6 pr-6 pt-4 pb-4 bg-red-400">
      <Link to="/">Home</Link>
      <div className="flex gap-4">
        {!userLogin ? 
        (<button onClick={handleLogin}>Login</button>): (
        <button onClick={handleLogout} >Logout</button>)
        }
        <Link to="/signIn">SignIn</Link>
      </div>
    </div>
  );
};

export default NavBar;

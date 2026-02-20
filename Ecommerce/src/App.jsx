import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainRoute from "./Routes/MainRoute";
import Login from "./Pages/Login";
import SignIn from "./Pages/SignIn";
import Logout from "./Pages/Logout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainRoute/>} >
          <Route index element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signIn" element={<SignIn/>} />
          {/* <Route path="/logout" element={<Logout/>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

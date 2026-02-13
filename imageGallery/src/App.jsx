import NavBar from "./components/NavBar";
import MainRoute from "./Routes/MainRoute";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col  items-center gap-3 bg-blue-100">
      <BrowserRouter>
        <NavBar />
        <MainRoute />
      </BrowserRouter>
    </div>
  );
};

export default App;

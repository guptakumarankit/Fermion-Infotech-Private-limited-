import NavBar from "./components/NavBar";
import Model from "./components/Model";
import ShowPictures from "./components/ShowPictures";
import MainRoute from "./Routes/MainRoute";
import { BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col  items-center gap-3 bg-blue-100">
      <BrowserRouter>
      <NavBar/>
      <MainRoute/>
      </BrowserRouter>
    </div>
  );
};

export default App;

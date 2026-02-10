import { BrowserRouter } from "react-router-dom"
import RoutesMain from './RoutesMain'

const App = () => {
  return (
    <BrowserRouter>
        <RoutesMain/>
    </BrowserRouter>
  );
};

export default App;

// why tailwind not work in Route and BrowserRoute.
// Route not wrap in any html tag.
// Nested Route Doesn't work.

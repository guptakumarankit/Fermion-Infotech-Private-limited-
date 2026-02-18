import PaginationButton from "../components/PaginationButton";
import PaginationData from "../components/PaginationData";

const App = () => {
  return (
    <div className="flex flex-col p-7 gap-8 justify-center items-center">
        <PaginationData/>
       <PaginationButton/>
    </div>
  );
};

export default App;

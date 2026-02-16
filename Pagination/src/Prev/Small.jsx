import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";

import { useState } from "react";

const App = () => {
  const arr = new Array(10).fill(0);
  const [currPage, setCurrentPage] = useState(0);
  console.log("currPage" , currPage)
  
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex bg-gray-300 p-2 rounded">
        <IoMdArrowRoundBack className="h-10 w-8 flex justify-center items-center mr-2"
          onClick={() => setCurrentPage(currPage == 0 ? 0 : currPage - 1)}/>
        <div className="flex gap-1 ">
          {arr.slice(0, 2).map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`h-10 w-8 flex justify-center items-center ${currPage == idx ? "bg-red-300 rounded-lg" : ""}`}
            >
              {idx}
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center">
          {arr.slice(2, arr.length - 2).map((_, idx) => (
            <div
              key={idx + 2}
              className={`h-10 w-8 flex justify-center items-center ${currPage == idx + 2 ? "bg-red-300  rounded-lg" : ""}`}
              onClick={() => setCurrentPage(idx + 2)}
            >
              {/* Prev Page */}
              {currPage == idx + 3 ? `${currPage - 1}` : ''}
              {/* Curr Page */}
              {
                currPage == idx + 2 ? `${currPage}` : (currPage == idx + 3 || currPage == idx + 1) ? '' : '.'              
              }
              {/* Next Page */}
              {currPage == idx + 1 ? `${currPage + 1}` : ''} 
            </div>
          ))}
        </div>
        
        <div className="flex gap-1">
          {arr.slice(arr.length - 2).map((_, idx) => (
            <div
              key={idx + arr.length - 2}
              onClick={() => setCurrentPage(idx + arr.length - 2)}
              className={`h-10 w-8 flex justify-center items-center ${currPage == idx + arr.length - 2 ? "bg-red-300  rounded-lg" : ""}`}
            >
              {idx + arr.length - 2}
            </div>
          ))}
        </div>
        <IoMdArrowRoundForward onClick={() =>
            setCurrentPage(
              currPage == arr.length - 1 ? arr.length - 1 : currPage + 1,
            )
          }
         className="h-10 w-8 flex justify-center items-center ml-2 "/>
      </div>
    </div>
  );
};

export default App;

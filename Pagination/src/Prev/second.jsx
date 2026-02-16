import { useEffect, useState } from "react";

const App = () => {
  const totalPages = 40;
  const [arr , setArr] = useState([]);
  const [currPage, setCurrentPage] = useState(1);

  const modifiedArr = () => {
    const newArray = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i == 1 ||
        i == totalPages ||
        i == currPage - 1 ||
        i == currPage ||
        i == currPage + 1
      ) {
        newArray.push(i);
      } else if (
        i == currPage - 2 ||
        i == currPage - 3 ||
        i == currPage - 4 ||
        i == currPage + 2 ||
        i == currPage + 3 ||
        i == currPage + 4
      ) {
        newArray.push(".");
      } else {
        newArray.push("");
      }
    }
    return newArray;
  };

  // console.log(newArray);

  useEffect(() => {
    setArr(modifiedArr())
  }, [currPage]);

  return (
    <div className="flex gap-1 bg-gray-300 p-2">
      {
        arr.filter((item) => item != "").map((item, idx) => {
        console.log("item" , item);
        return (
          <div key={idx} 
          onClick={() => setCurrentPage(idx)}
          className={`${item != "." ? "border p-1 rounded" : "" } ${currPage == idx + 1 ? "bg-red-400" : ""}` }>
            {item}
          </div>
        )})
      }
    </div>
  );
};

export default App;


import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const PaginationData = () => {
  const [currPageItem, setCurrentPageItem] = useState([]);
    const {currPage , totalPages , skip , limit} = useContext(AppContext);
    
    useEffect(() => {
    const fetchData = async () => {
      try {
        // const currSkip = currPage * skip - skip;
        // const offSet = (currPage * limit - limit + skip);
        const offSet = (currPage - 1) * limit;

        const res = await fetch(
          `https://dummyjson.com/posts?limit=${limit}&skip=${offSet}`,
        );
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setCurrentPageItem(data.posts);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

     if(totalPages && skip && limit){
       fetchData();
     }
  }, [currPage , limit]);

  return (
    <div>
      {currPageItem &&
        currPageItem.map((item) => (
          <div key={item.id} className="flex gap-4">
            <h1>{item.id}</h1>
            <p>{item.title}</p>
          </div>
        ))}
    </div>
  );
};

export default PaginationData;

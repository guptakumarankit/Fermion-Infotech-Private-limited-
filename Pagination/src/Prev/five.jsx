import { useEffect, useState } from "react";

const App = () => {
  const [page, setPage] = useState([]);
  const [currPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [limit , setLimit] = useState()
  const [skip , setSkip] = useState()
  const [currPageItem , setCurrentPageItem] = useState();
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/posts?limit=5&skip=3");
      const data = await res.json()

      const fetchLimit = Math.ceil(Number(data.limit));
      const fetchSkip  = Math.ceil(Number(data.skip));
      const fetchTotalPage = Math.ceil(Number(data.total))
      setLimit(fetchLimit);
      setSkip(fetchSkip);
      setTotalPages(Math.ceil(fetchTotalPage / fetchLimit));
    };
    
    fetchData();
    console.log("set totalPages Print first");
  }, []);
  
  // console.log(skip , totalPages , limit)
  const modifiedArr = () => {
    const newPages = [];
    
    const leftPage = Math.max(2, currPage - 1);
    const rightPage = Math.min(totalPages - 1, currPage + 1);
    
    // first Page button always show
    newPages.push(1);
    
    // current left side ....
    if (leftPage > 2) {
      newPages.push("...");
    }

    // here currentLeftpage , currentPage , currentRightPage
    for (let i = leftPage; i <= rightPage; i++) {
      newPages.push(i);
    }
    
    // current right side ....
    if (rightPage < totalPages - 1) {
      newPages.push("...");
    }
    
    // last pages button always show
    if (totalPages > 1) {
      newPages.push(totalPages);
    }
    
    console.log("Modified arr Print Second")
    return newPages;
  };

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

  useEffect(() => {
    if(totalPages){
      setPage(modifiedArr());
    }
  }, [totalPages , currPage]);

  // console.log("texts", texts);
  // console.log(currPageItem);
  // console.log("currPage" , currPage)

  return (
    <div className="flex flex-col p-7 gap-8 justify-center items-center">
      <div>
        {currPageItem &&
          currPageItem.map((item) => (
            <div key={item.id} className="flex gap-4">
              <h1>{item.id}</h1>
              <p>{item.title}</p>
            </div>
          ))}
      </div>

      <div className="flex gap-3 bg-gray-300 p-2 justify-center items-center">
        <button
          className="p-2 border rounded disabled:opacity-50"
          disabled={currPage === 1}
          onClick={() => setCurrentPage(currPage - 1)}
        >
          Prev
        </button>
        <div>
          {page &&
            page.map((page, idx) => {
              // console.log("page", page);
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(page)}
                  disabled={page === "..."}
                  className={`${page == "..." ? "" : "border p-2"} ${currPage == page ? "bg-red-300" : ""}`}
                >
                  {page}
                </button>
              );
            })}
        </div>
        <button
          onClick={() => setCurrentPage(currPage + 1)}
          className="border p-2 disabled:opacity-50"
          disabled={currPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;

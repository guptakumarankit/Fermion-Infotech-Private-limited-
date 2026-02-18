import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const PaginationButton = () => {
    
  const [page, setPage] = useState([]);
  const { totalPages , currPage , setCurrentPage} = useContext(AppContext)

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

    // console.log("Modified arr Print Second");
    return newPages;
  };

  
  useEffect(() => {
    if(totalPages){
      setPage(modifiedArr());
    }
  }, [totalPages , currPage]);

  return (
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
  );
};

export default PaginationButton;

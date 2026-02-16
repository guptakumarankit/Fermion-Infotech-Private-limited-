import { useEffect, useState } from "react";

const App = () => {
  const texts = [
"sunrise over mountains",
"waterfall in a forest",
"desert dunes at sunset",
"tropical beach with palm trees",
"autumn forest with falling leaves",
"glacier and icy landscape",
"mountain lake reflection",
"meadow with wildflowers",
"rainforest canopy",
"volcano erupting",
"northern lights over snowy hills",
"river flowing through canyon",
"foggy forest path",
"coral reef underwater",
"majestic waterfall cliff",
"prairie with grazing bison",
"ocean waves crashing on rocks",
"tundra with snow patches",
"sunset over savanna",
"mangrove forest by the sea",
"iceberg floating in ocean",
"cave with stalactites and stalagmites",
"sunlight through forest trees",
"desert with cacti",
"rainy forest trail",
"mountain peak above clouds",
"field of lavender flowers",
"cliffside ocean view",
"tropical waterfall pool",
"volcanic lava flow",
"wild river rapids",
"jungle waterfall hidden",
"sunset over rice terraces",
"pine forest in winter",
"ocean sunset horizon",
"meadow with butterflies",
"rocky desert canyon",
"crystal clear mountain stream",
"misty valley landscape",
"tropical island aerial view"
  ]

  const totalPages = 40;
  const [arr, setArr] = useState([]);
  const [currPage, setCurrentPage] = useState(1);

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

    return newPages;
  };

  useEffect(() => {
    setArr(modifiedArr());
  }, [currPage]);

  console.log("currPage" , currPage)
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <div>
        <h1 className="text-4xl">{texts[currPage - 1]}</h1>
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
        {arr &&
          arr.map((page, idx) => {
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

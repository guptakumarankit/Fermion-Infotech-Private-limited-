import React, { useEffect, useState } from "react";
import pictures from "./assets/assets";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const App = () => {
  const [currIdx , setCurrIdx] = useState(0);
  const [showPicture , setShowPicture] = useState(pictures[currIdx].img)
  // console.log(showPicture)
  // console.log(currIdx);

  const box = new Array(pictures.length).fill(0);

  const handlePictures = (currId) => {
    const idx = pictures.findIndex(item => item.id === currId);
    // console.log("idx" , idx);
    setCurrIdx(idx)
  }

  const previousImage = () => {
     setCurrIdx(currIdx == 0 ? 9 : currIdx - 1);
  }

  const nextImage = () => {
    setCurrIdx(currIdx == pictures.length - 1 ? 0 : currIdx + 1);
  }

  useEffect(() => {
    setShowPicture(pictures[currIdx].img);
    console.log("currImg" , pictures[currIdx].img)
  } , [currIdx])

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-3 bg-blue-100">
      <div>
        <h1 className="text-2xl">Image Gallery</h1>
      </div>
      <div className="inline-flex">
        {pictures.map((item ,idx) => (
          <div key={item.id}>
            <img onClick={() => handlePictures(item.id)}
              className={`w-20 h-20 ${currIdx === idx ? "border border-2 border-white scale-110" : ""}`}
              src={item.img}
              alt="Picture"
            />
          </div>
        ))}
      </div>
      <div className="relative">
        <img src={showPicture} alt="show-picture" className="h-120 w-200"/>
        <FaChevronLeft onClick={previousImage} className="absolute left-[0%] top-[50%] text-white text-6xl hover:text-blue-900" />
        <FaChevronRight onClick={nextImage} className="absolute right-[0%] top-[50%] text-white text-6xl hover:text-blue-900" />
        <div className="flex gap-1 absolute bottom-1 left-[40%]">
          {
              box.map((_ , idx) => (
                 <div onClick={() => setCurrIdx(idx)} key={idx} className={`h-4 w-4 rounded-full hover:bg-red-700 border border-white cursor-pointer ${currIdx === idx ? "bg-green-400" : ""}`}></div>
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default App;

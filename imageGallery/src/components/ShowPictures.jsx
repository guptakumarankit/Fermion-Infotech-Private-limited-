import React, { useContext, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AppContext } from "../contextAPi/AppContext";

const ShowPictures = () => {
  const {
    currIdx,
    pictures,
    setCurrIdx,
    showPicture,
    setShowPicture,
    hoverChangeIdx,
    setHoverChangesIdx,
    modelOpen,
  } = useContext(AppContext);

  const handlePictures = (idx) => {
    setCurrIdx(idx);
  };

  const previousImage = () => {
    setCurrIdx(currIdx === 0 ? pictures.length - 1 : currIdx - 1);
  };

  const nextImage = () => {
    setCurrIdx(currIdx === pictures.length - 1 ? 0 : currIdx + 1);
  };

  const handleHoverChange = (idx) => {
    setHoverChangesIdx(idx);
  };

  const handleHoverOut = () => {
    setHoverChangesIdx(null);
  };

  useEffect(() => {
    setShowPicture(
      hoverChangeIdx === null ? pictures[currIdx] : pictures[hoverChangeIdx],
    );
  }, [currIdx, hoverChangeIdx, pictures]);

  return (
    <>
      {pictures.length === 0 ? (
        <div>Image is Not Found</div>
      ) : (
        <>
          <div className={`flex ${modelOpen ? "-z-1" : ""}`}>
            {pictures.map((item, idx) => (
              <div key={idx}>
                <img
                  onClick={() => handlePictures(idx)}
                  onMouseLeave={() => handleHoverOut(null)}
                  onMouseEnter={() => handleHoverChange(idx)}
                  className={`w-20 h-20 hover:scale-110 hover:border-2  hover:border-red-700 ${currIdx === idx ? "border border-2 border-white scale-110" : ""}`}
                  src={item}
                  alt="Picture"
                />
              </div>
            ))}
          </div>

          <div className={`relative ${modelOpen ? "-z-1" : ""}`}>
            <img src={showPicture} alt="show-picture" className="h-120 w-200" />
            <FaChevronLeft
              onClick={previousImage}
              className="absolute left-[0%] top-[50%] text-white text-6xl hover:text-blue-900"
            />
            <FaChevronRight
              onClick={nextImage}
              className="absolute right-[0%] top-[50%] text-white text-6xl hover:text-blue-900"
            />
            <div className="flex gap-1 absolute bottom-1 left-[40%]">
              {pictures.map((_, idx) => (
                <div
                  onClick={() => setCurrIdx(idx)}
                  key={idx}
                  className={`h-4 w-4 rounded-full hover:bg-red-700 border border-white cursor-pointer ${currIdx === idx ? "bg-green-400" : ""}`}
                ></div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ShowPictures;

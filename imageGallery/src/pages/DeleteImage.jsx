import { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../contextAPi/AppContext';
// import ShowPictures from '../components/ShowPictures'

const DeleteImage = () => {
  const {pictures , setPictures , currIdx , setCurrIdx} = useContext(AppContext);
  
  const [checkedBox , setCheckedBox] = useState({});
  // console.log(checkedBox);

  const toggleCheckBox = (idx) => {
     setCheckedBox((prev) => ({
        ...prev ,
        [idx] : !prev[idx]
     }))
  }

  const handleDelete = () => {
    // console.log("Delete images")
    const newPictures = pictures.filter((_,idx) => checkedBox[idx] !== true);
    setPictures(newPictures);
    setCurrIdx(0);
    setCheckedBox({})
    localStorage.setItem("pic" , JSON.stringify(newPictures));
  }

  return (
     <div className='flex flex-col gap-7 w-[60%] overflow-hidden'>
      <div className="flex transition-transform duration-200"
      style={{transform: `translateX(-${currIdx * 60}px)`}}>
      {
        pictures.map((item , idx) => {
            return (
              <div key={idx} className="flex-shrink-0 relative">
                <img
                  className={`w-20 h-20`}
                  src={item}
                  alt="Picture"
                  onClick={() => {
                    toggleCheckBox(idx);
                  }}
                />
                <input
                  type="checkbox"
                  readOnly
                  checked={checkedBox[idx]}
                  className={`absolute top-[40%] left-[35%] h-[20px] w-[20px] border-none blur-2xl ${
                checkedBox[idx] ? "z-50 blur-none" : ""
              }`}
                />
              </div>
            );
        })
      }      
      </div>
      <div className='flex justify-center align-center'>
         <button onClick={handleDelete} className='bg-red-500 p-2 rounded rounded-lg '>DeleteSelectedImage</button>
      </div>
     </div>
  )
}

export default DeleteImage
import { useContext } from "react"
import { AppContext } from "../contextAPi/AppContext"

const NavBar = () => {
  const {modelOpen , setModelOpen , currIdx , pictures , setPictures , setCurrIdx , setEditing} = useContext(AppContext);

  const deleteImage = () => {
    const newPictures = pictures.filter((_,idx) => idx != currIdx);
    setPictures(newPictures);
    localStorage.setItem("pic" , JSON.stringify(newPictures));
    // Hard code 
    setCurrIdx(newPictures.length === 0 ?  0 : newPictures.length - 1);
  }

  const handleEdit = () => {
    setModelOpen(true)
    setEditing(true);
  } 

  return (
    <div className='flex justify-between w-full h-[10%] bg-red-300 items-center pl-4 pr-4'>
        <h1 className='text-xl'>NavBar</h1>
         <div className='flex gap-3'>
          <button onClick={() => setModelOpen(true)} className='hover:border hover:border-blue hover:border-white p-1 rounded text-xl'>Add Image</button>
          <button onClick={deleteImage} className='hover:border hover:border-blue hover:border-white p-1 rounded text-xl'>Delete Image</button>
           <button onClick={handleEdit} className='hover:border hover:border-blue hover:border-white p-1 rounded text-xl'>Edit ImageUrl</button>
         </div>
    </div>
  )
}

export default NavBar
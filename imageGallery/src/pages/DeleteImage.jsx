import { useContext, useEffect, useRef } from 'react';
import { AppContext } from '../contextAPi/AppContext';
// import ShowPictures from '../components/ShowPictures'

const DeleteImage = () => {
  const {pictures , setPictures , setCurrIdx} = useContext(AppContext);
  const deletePicIdx = new Map();

  const handleDelete = () => {
    let newPictures = []; 

    for(const [key , item] of deletePicIdx){
        newPictures.push(item)
        console.log(item);
        deletePicIdx.delete(key)
    }
    
    setCurrIdx(0);
    console.log("newPictures" , newPictures)
    setPictures(newPictures);
    localStorage.setItem("pic", JSON.stringify(newPictures));
  }

  return (
     <div>
       <div className="flex">
      {
        pictures.map((item , idx) => {
            const checkedBoxRef = useRef(null);
            return (
              <div key={idx} className='relative'>
                <img
                  className={`w-20 h-20`}
                  src={item}
                  alt="Picture"
                  onClick={() =>{
                    if(checkedBoxRef.current){
                        checkedBoxRef.current.checked = !checkedBoxRef.current.checked 
                        console.log(checkedBoxRef.current.checked)
                        if(deletePicIdx.has(idx)){
                          deletePicIdx.delete(idx);
                        }
                        else{
                          deletePicIdx.set(idx , item);
                        }

                        // console.log("deletePicIdx" , deletePicIdx)
                    }
                    else{
                      console.log("not in")
                    }
                  }
                  }
                />
                <input
                ref={checkedBoxRef}
                type="checkbox" className='absolute top-[40%] left-[35%] h-[20px] w-[20px] border-none'/>
              </div>
            )
        })
      }      
      </div>
      <button onClick={handleDelete}>DeleteSelectedImage</button>
     </div>
  )
}

export default DeleteImage
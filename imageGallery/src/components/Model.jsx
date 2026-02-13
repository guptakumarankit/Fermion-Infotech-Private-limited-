import React, { useContext, useState } from "react";
import { AppContext } from "../contextAPi/AppContext";
import { useNavigate } from "react-router-dom";

const Model = () => {
  const navigate = useNavigate();
  const [pictureUrl, setPictureUrl] = useState("");
  const {
    currIdx,
    pictures,
    setPictures,
    editing,
    setEditing,
  } = useContext(AppContext);

  const handleSubmit = () => {
    if (editing) {
      const newPictures = pictures.map((img, idx) =>
        idx === currIdx ? (img = pictureUrl) : img,
      );
      setPictures(newPictures);
      localStorage.setItem("pic", JSON.stringify(newPictures));
      setPictureUrl("");
      setEditing(false);
    } else {
      const newPictures = [...pictures, pictureUrl];
      // console.log("newPic" , newPictures)
      setPictures(newPictures);
      localStorage.setItem("pic", JSON.stringify(newPictures));
      setPictureUrl("");
      // console.log(pictures)
    }
    navigate("/")
  };

  return (
    <div
      className={`absolute top-[25%] w-[50%] h-[50%] border bg-gray-200 p-3 border rounded}`}
    >
      <h1 className="text-center text-xl mt-4">Add New Image</h1>
      <form action={handleSubmit} className="p-10 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <label className="text-xl" htmlFor="">
            Enter the new ImageUrl Here..
          </label>
          <input
            className="h-10 border border-white border-3 p-2"
            type="text"
            value={pictureUrl}
            onChange={(e) => setPictureUrl(e.target.value)}
            placeholder="Enter the url"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-300 rounded p-2 text-xl"
        >{`${editing ? "Edit" : "Submit"}`}</button>
      </form>
    </div>
  );
};

export default Model;

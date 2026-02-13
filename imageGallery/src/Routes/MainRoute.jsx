import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddImage from "../pages/AddImage";
import DeleteImage from "../pages/DeleteImage";
import EditImage from "../pages/EditImage";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="addImage" element={<AddImage />} />
      <Route path="deleteImage" element={<DeleteImage />} />
      <Route path="editImage" element={<EditImage />} />
    </Routes>
  );
};

export default MainRoute;

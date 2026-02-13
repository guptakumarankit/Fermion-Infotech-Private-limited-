import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex justify-between w-full h-[10%] bg-red-300 items-center pl-4 pr-4">
      <Link to="/">Home</Link>
      <div className="flex gap-4">
        <Link to="addImage">Add Image</Link>
        <Link to="deleteImage">DeleteImage</Link>
        <Link to="editImage">EditImage</Link>
      </div>
    </nav>
  );
};

export default NavBar;

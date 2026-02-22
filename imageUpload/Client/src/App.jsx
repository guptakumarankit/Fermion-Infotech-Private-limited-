import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [users, setUsers] = useState([]);

  const fetchImages = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/image/fetchImage",
      );
      console.log(data.data);
      setUsers(data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:5000/image/addImage",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } },
      );

      if (!response.data.success) {
        console.log("Something went wrong");
      }

      alert("Upload successful!");
      setName("");
      setImage(null);
      fetchImages();
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }
  };

  return (
 
<>
<div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-lg border border-gray-100 mb-8">
  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
    <label className="font-semibold text-gray-700">Enter Name:</label>
    <input
      type="text"
      placeholder="Enter your name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
    />

    <label className="font-semibold text-gray-700">Upload File:</label>
    <input
      type="file"
      onChange={(e) => setImage(e.target.files[0])}
      required
      className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
    />

    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg mt-2 transition-all shadow-md hover:shadow-lg">
      Submit
    </button>
  </form>
</div>

<div className="px-8">
  {users.length === 0 ? (
    <div className="text-center text-gray-400 italic">
      Images not found
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <div
          key={user._id}
          className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition flex flex-col items-center"
        >
          <h2 className="font-medium text-gray-800 mb-2">{user.name}</h2>
          <img
            src={user.image}
            alt={user.name}
            className="w-32 h-32 object-cover rounded-full border border-gray-300"
          />
        </div>
      ))}
    </div>
  )}
</div>
</>
  );
};

export default App;

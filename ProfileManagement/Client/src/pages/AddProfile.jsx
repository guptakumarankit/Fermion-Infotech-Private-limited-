import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const AddProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    task: "",
    isWorking: false,
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log("Form Data:", formData);
    try {
        const response = await fetch("http://localhost:6000/profile/addProfile" , {
          method: 'POST',
          headers: {"Context-Type" : "application/json"},
          body: JSON.stringify(formData)
        })

        if(response){
          toast.success("Add NewProfile Successfully");
          setTimeout(() => {
          navigate("/");
        }, 500);
        }
        else{
          toast.success("Something Went Wrong!")
        }
    } catch (error) {
       toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-full w-full bg-gray-100">
      <Toaster position="top-center" reverseOrder={false} />
      <form
        onSubmit={handleSubmit}
        className="mt-2 bg-white p-4 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-2 text-center">User Form</h2>

        {/* Image Upload */}
        <div className="mb-2">
          <label className="block text-gray-700 mb-1">Upload Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full text-gray-700 border rounded p-1"
          />
        </div>

        {/* Name */}
        <div className="mb-2">
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border rounded p-1"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-2">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border rounded p-1"
            required
          />
        </div>

        {/* Location */}
        <div className="mb-2">
          <label className="block text-gray-700 mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter your location"
            className="w-full border rounded p-1"
            required
          />
        </div>

        {/* Current Working */}
        <div className="mb-2 flex items-center">
          <input
            type="checkbox"
            name="isWorking"
            checked={formData.isWorking}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-gray-700">Currently Working</label>
        </div>

        {/* Task */}
        <div className="mb-2">
          <label className="block text-gray-700 mb-1">Task</label>
          <textarea
            name="task"
            value={formData.task}
            onChange={handleChange}
            placeholder="Describe your task"
            className="w-full border rounded p-1"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProfile;

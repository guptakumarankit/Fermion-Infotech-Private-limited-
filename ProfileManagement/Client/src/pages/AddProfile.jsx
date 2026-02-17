import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer , toast } from "react-toastify"

const AddProfile = () => { 
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form Data:", formData);
    toast.success("Add NewProfile Successfully")
    setTimeout(() => {
      navigate("/");
    } , 1000)
  };

  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-full w-full bg-gray-100">
      <ToastContainer className="relative top-0 right-[40%]" autoClose={20}/>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">User Form</h2>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Upload Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full text-gray-700 border rounded p-2"
          />
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border rounded p-2"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border rounded p-2"
            required
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter your location"
            className="w-full border rounded p-2"
            required
          />
        </div>

        {/* Current Working */}
        <div className="mb-4 flex items-center">
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
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Task</label>
          <textarea
            name="task"
            value={formData.task}
            onChange={handleChange}
            placeholder="Describe your task"
            className="w-full border rounded p-2"
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
}

export default AddProfile;

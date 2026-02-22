import React, { useContext } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { AppContext } from "../context/AppContext";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { profileBaseUrl } from "../../instanceAxios";

const Home = () => {
  const navigate = useNavigate();
  const { profiles,formData, setFormData, setEditingId, fetchProfile } =
    useContext(AppContext);

  const handleDelete = async (id ) => {
    try {
      const response = await profileBaseUrl.delete(`/deleteProfile/${id}`)

      if(!response){
        toast.error("Something Went Wrong");
      }
      toast.success("Delete Data SuccessFully");
    } catch (error) {
      toast.error(error.message);
    }
    fetchProfile();
  };

  const handleEdit = async ( id ) => {
    const { data } = await profileBaseUrl.get(`fetchProfile/${id}`)

    if (!data) {
      toast.error(error.message);
    }

    const currentData = data.currentProfile;

    setEditingId(id);
    setFormData(
      currentData
    );

    // console.log("formData" , formData);
    if (data) {
      navigate("/addProfile");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 rounded">
      <Toaster position="top-center" />
      <h1 className="text-3xl font-bold mb-6 text-center">User Profiles</h1>

      <div className="grid gap-6">
        {profiles.length === 0 && (
          <p className="text-center text-gray-500">No profiles found</p>
        )}

        {profiles.map((profile) => (
          <div
            key={profile._id}
            className="bg-white flex shadow-md rounded-lg overflow-hidden relative"
          >
            {/* Left Side: Image */}
            <div className="w-[20%] p-3  bg-gray-200 flex items-center justify-center ">
              {/* {profile.image ? (
                // <img
                //   src={URL.createObjectURL(profile.image)}
                //   alt={profile.name}
                //   className="object-cover w-full h-full rounded-full"
                // />
                <div>{profile.image.slice(0,4)}</div>
              ) : (
                <img
                  alt="Profile"
                  className="object-cover w-full h-full rounded-full"
                  src="data:image/jpeg;base64,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"
                />
              )} */}
              <div>{profile.image.slice(0,4)}</div>
            </div>

            {/* Right Side: Details */}
            <div className="w-[80%] p-4 relative flex flex-col gap-9">
              <div className="absolute top-2 right-4 flex gap-4">
                <FaEdit
                  className="text-blue-500 cursor-pointer hover:text-blue-700 text-2xl"
                  onClick={() => handleEdit(profile._id)}
                />
                <FaTrash
                  className="text-red-500 cursor-pointer hover:text-red-700 text-2xl"
                  onClick={() => handleDelete(profile._id)}
                />
              </div>

              <div className="">
                <h2 className="text-xl font-bold mb-1">{profile.name}</h2>
                <p className="text-gray-700 mb-1">Email: {profile.email}</p>
                <p className="text-gray-700 mb-1">
                  Location: {profile.location}
                </p>
                <p className="text-gray-700 mb-1">Task: {profile.task}</p>
                <p className="text-gray-700">
                  Currently Working: {profile.isWorking ? "Yes ✅" : "No ❌"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

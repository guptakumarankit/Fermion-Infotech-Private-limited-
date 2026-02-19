import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([
    {
        _id: 1,
        name: "John Doe",
        email: "john@example.com",
        location: "New York",
        task: "Design UI for project",
        isWorking: true,
        image: null,
    },
    {
        _id: 2,
        name: "John Doe",
        email: "john@example.com",
        location: "New York",
        task: "Design UI for project",
        isWorking: true,
        image: null,
    },
  ]);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    location: "",
    task: "",
    isWorking: false,
    image: null,
  });

  const [editingId, setEditingId] = useState(null);

  const fetchProfile = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/profile/fetchProfile",
        {
          method : 'GET'
        }
      );
      const data = await res.json();
      setProfiles(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const value = {
    profiles,
    setProfiles,
    formData,
    setFormData,
    editingId,
    setEditingId,
    fetchProfile,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

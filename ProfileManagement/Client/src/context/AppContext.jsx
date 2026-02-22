import { createContext, useEffect, useState } from "react";
import { profileBaseUrl } from "../../instanceAxios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([
  ]);

  const [formData, setFormData] = useState({
      name: "",
      email: "",
      location: "",
      task: "",
      isWorking: false,
      image: "",
  });

  const [editingId, setEditingId] = useState(null);

  const fetchProfile = async () => {
    try {
      const { data } = await profileBaseUrl('/fetchProfile')
      setProfiles(data.profiles);
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

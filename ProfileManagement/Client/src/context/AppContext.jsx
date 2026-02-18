import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([
    {
    //   id: 1,
    //   name: "John Doe",
    //   email: "john@example.com",
    //   location: "New York",
    //   task: "Design UI for project",
    //   isWorking: true,
    //   image: null,
    },]);

  const fetchProfile = async() => {
    try {
        const response = await fetch("http://localhost:6000/profile/fetchProfile");
        const data = await res.json();
        setProfiles(data);
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    fetchProfile();
  } , [])

  const value = {
    profiles,
    setProfiles,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

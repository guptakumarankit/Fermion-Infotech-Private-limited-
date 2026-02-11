import { createContext, useState } from "react"
export const AppContext = createContext()

export const ContextProvider = ({children}) => {
    const [currIdx, setCurrIdx] = useState(0);
    const [pictures , setPictures] = useState(() => {
        return JSON.parse(localStorage.getItem("pic")) || [];
    });
    
    const [showPicture, setShowPicture] = useState(pictures[currIdx]);
    const [hoverChangeIdx , setHoverChangesIdx] = useState(null);
    const [modelOpen , setModelOpen] = useState(false);
    const [editing , setEditing] = useState(false);

    const value = {
        pictures,
        setPictures,
        currIdx ,
        setCurrIdx,
        showPicture,
        setShowPicture,
        hoverChangeIdx,
        setHoverChangesIdx,
        modelOpen,
        setModelOpen,
        editing,
        setEditing,
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
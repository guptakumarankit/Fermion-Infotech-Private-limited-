import { createContext, useState } from "react";

export const AppContext = createContext();
export const ContextProvider = (({children}) => {
    const [userLogin , setUserLogin] = useState(false)
    const value = {

    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
})
import { createContext, useEffect, useState  } from "react";

export const AppContext = createContext();

export const ContextProvider = ({children}) => {
    const [currPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [limit , setLimit] = useState(null)
    const [skip , setSkip] = useState(null)
   
    useEffect(() => {
    const fetchData = async () => {
        const res = await fetch("https://dummyjson.com/posts?limit=2&skip=5");
        const data = await res.json()

        const fetchLimit = Math.ceil(Number(data.limit));
        const fetchSkip  = Math.ceil(Number(data.skip));
        const fetchTotalPage = Math.ceil(Number(data.total))
        setLimit(fetchLimit);
        setSkip(fetchSkip);
        setTotalPages(Math.ceil(fetchTotalPage / fetchLimit));
    };
    
    fetchData();
    // console.log("set totalPages Print first");
    }, []);
    
    const value = {
        currPage , setCurrentPage , totalPages , setTotalPages , limit  , skip 
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
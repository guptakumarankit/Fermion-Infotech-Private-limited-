import { createContext, useState } from "react";

// Create a store here.
export const AppContext = createContext();

// create how many thing provide from store.
export const ContextProvider = ({ children }) => {
  console.log(children);

  // items store in store
  const [name, setName] = useState("Ankit");
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };

  return (
    <AppContext.Provider value={{ name, setName, increase, count }}>
      {children} {/*pass the components inside the contextProvider in main.jsx file*/}
    </AppContext.Provider>
  );
};

// what is childeren here.
// children is a by default props in react.
// {children} will render all components that are wrapped inside ContextProvider.
// This is how the components inside ContextProvider get access to the context.

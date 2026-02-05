import React, { useContext } from "react";
import { AppContext } from "./ContextApi/AppContext";
import Counter from "./components/Counter";

const App = () => {
  const { name, setName, increase, count } = useContext(AppContext);

  return (
    <>
      <div className="flex flex-col text-center gap-5">
        <div>ContextAPi</div>
        <Counter />
        <div>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id=""
            className="border p-2"
            placeholder="Enter the name"
          />
        </div>
        <div>{name}</div>
      </div>
    </>
  );
};

export default App;

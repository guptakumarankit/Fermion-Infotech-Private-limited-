import React, { useContext } from "react";
import { AppContext } from "../ContextApi/AppContext";

const Counter = () => {
  const { count, increase } = useContext(AppContext);

  return (
    <div className="flex gap-5 justify-center">
      <button className="border p-2" onClick={increase}>
        +
      </button>
      <div>{count}</div>
    </div>
  );
};

export default Counter;

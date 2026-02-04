import React, { useState } from "react";
import Message from "./components/Message";
import Child from "./components/Child";
import Parent from "./components/Parent";

const App = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="bg-red-300 p-3">Props</div>

      {/* Pass the state or function as a props */}
      <div className="flex justify-center flex-col">
        <Message increase={increase} count={count} />
      </div>

      {/* Pass the Components As a props */}
      <div className="flex justify-center flex-col">
        <Parent content={<Child count={count} increase={increase} />} />
      </div>
    </>
  );
};

export default App;

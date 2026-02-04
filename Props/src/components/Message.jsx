import React, { useState } from "react";

const Message = ({ increase, count }) => {
  const handleClick = () => {
    console.log("count is updated by Message components :", count);
    increase();
  };

  return (
    <>
      <button onClick={handleClick} className="border p-3">
        Message
      </button>
      <div>{count}</div>
    </>
  );
};

export default Message;

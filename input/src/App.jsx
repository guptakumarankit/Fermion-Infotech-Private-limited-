import React, { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const savedData = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setData([...data, inputValue.trim()]);
      
      toast.success("Saved Data SuccessFully")
      setInputValue('');
    }
  };

  const handleDelete = (currIdx) => {
    const newData = data.filter((_, idx) => idx !== currIdx);
    toast.success("Delete Data SuccessFully");
    setData(newData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-10">
      <div className="w-full max-w-md px-4">
        <input
          type="text"
          placeholder="Enter the input here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={savedData}
          className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
        />

        <div className="bg-white rounded-lg shadow-md p-4">
          {data.length <= 0 ? (
            <div className="text-center text-gray-400 py-10">No data found</div>
          ) : (
            data.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center p-2 mb-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
              >
                <span className="text-gray-700">{item}</span>
                <button
                  onClick={() => handleDelete(idx)}
                  className="text-red-500 hover:text-red-700 font-bold text-xl"
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <Toaster position="top-center" reverseOrder={false}/>
    </div>
  );
};

export default App;

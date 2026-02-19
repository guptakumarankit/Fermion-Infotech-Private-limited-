import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const COUNT_NUMBER_OF_OTP = 5;
  const [otpArr, setOtpArr] = useState(new Array(COUNT_NUMBER_OF_OTP).fill(""));

  const [allFilled , setAllFilled] = useState(false);
  const inputRefArr = useRef([]);

  const handleOnChange = (value, idx) => {
    if (isNaN(value)) {
      toast.error("Data is only in form of Number");
      return;
    }

    const newValue = value.trim();
    const newArr = [...otpArr];
    newArr[idx] = newValue.slice(-1);
    setOtpArr(newArr);

    if (idx < COUNT_NUMBER_OF_OTP - 1) {
      value && inputRefArr.current[idx + 1].focus();
    }
  };

  const handleMoves = (e, idx) => {
    // console.log(e.key)
    // console.log(idx)

    if (!e.target.value && e.key == "Backspace") {
      inputRefArr.current[idx - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    // console.log(e.clipboardData.getData("text"));
    const dataPaste = e.clipboardData
      .getData("text")
      .trim()
      .slice(0, COUNT_NUMBER_OF_OTP)
      .split("");

    const newArr = [...otpArr];

    let inValid = false;
    dataPaste.forEach((item, idx) =>
      isNaN(item) ? (inValid = true) : (newArr[idx] = item),
    );

    if (!inValid) {
      setOtpArr(newArr);
      inputRefArr.current[COUNT_NUMBER_OF_OTP - 1]?.focus();
    } else {
      toast.error("Data is only in form of Number");
    }
    // console.log(dataPaste);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArray = new Array(COUNT_NUMBER_OF_OTP).fill("");
    setOtpArr(newArray);
    inputRefArr.current[0]?.focus();
    toast.success("OTP Submit SuccessFully!");
  };

  useEffect(() => {
    const newForm = otpArr.every((item) => item.trim() != "");
    setAllFilled(newForm);
    // console.log(allFilled);
  } , [otpArr])

  useEffect(() => {
    inputRefArr.current[0]?.focus();
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-10 bg-gray-50">
      <Toaster position="top-center" />
      <h1 className="text-3xl font-semibold text-gray-800">Validate OTP</h1>
      
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
        <div className="flex gap-4">
          {otpArr.map((_, idx) => (
            <input
              key={idx}
              type="text"
              value={otpArr[idx]}
              onPaste={handlePaste}
              ref={(input) => (inputRefArr.current[idx] = input)}
              onChange={(e) => handleOnChange(e.target.value, idx)}
              onKeyDown={(e) => handleMoves(e, idx)}
              className="w-14 h-14 text-2xl text-center rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 outline-none transition"
              required
            />
          ))}
        </div>

        {allFilled && (
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold text-lg rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default App;

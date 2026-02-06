// import React, { useRef, useState } from 'react'
// import { useEffect } from 'react';

// const App = () => {
//   const timerRef = useRef(0);
//   const displayTimerRef = useRef(null);
//   const intervalRef = useRef(null);


//   console.log('Components render....')

  
//   const startTimer = () => {
//     console.log("Start timer")
//     // console.log(timerRef.current)
//     // timerRef.current = timerRef.current + 1;
//     // // console.log(timerRef.current)
//     // displayTimerRef.current.textContent = timerRef.current;   

//     console.log("intervalRef Before" , intervalRef.current)

//     intervalRef.current = setInterval(() => {
//         timerRef.current += 1;
//         if(displayTimerRef.current){
//           displayTimerRef.current.textContent = timerRef.current;
//         }
//     } , 1000)

//     console.log("intervalRef after" , intervalRef.current)   // problem here 
//   }

//   const stopTimer = () => {
//     console.log("Stop timer")

//     clearInterval(intervalRef.current);
//     intervalRef.current = null
//     console.log("After the stop: " , intervalRef.current)
//   }

//   const resetTimer = () => {
//     console.log("Reset the timer")
//     timerRef.current = 0;
//     displayTimerRef.current.textContent = timerRef.current;
//     console.log("After reset: " , intervalRef.current)
//   }

//   return (
//     <>
//       <div className='flex flex-col justify-center items-center gap-4'>
//        <ul>
//         <li className='text-center'>useRef is a React Hook that lets you reference a value that’s not needed for rendering.</li>
//         <li className='text-center'>it changes instantly without triggering a re-render.</li>
//        </ul>
//        <div className='flex flex-col gap-3 border rounded bg-gray-200 p-4'>
//          <h2 ref={displayTimerRef}>0</h2>
//         <div className='flex gap-4'>
//           <button onClick={startTimer} className='border p-2'>Start</button>
//           <button onClick={stopTimer} className='border p-2'>Stop</button>
//           <button onClick={resetTimer} className='border p-2'>Reset</button>
//         </div>
//        </div>
//       </div>
//     </>
//   )
// }

// export default App


import React, { useRef } from 'react'

const App = () => {
  const timerRef = useRef(0);
  // const displayRef = useRef(1);

  console.log(timerRef)  
  const increseTimer = () => {
      // console.log("Increase");
      timerRef.current.value = timerRef.current.value ? timerRef.current.value + 1 : 1;
      timerRef.current.style.color = 'green';
      // displayRef.current.textContent = timerRef.current;
      console.log(timerRef.current)
      // console.log(displayRef.current)
  }

  return (
    <div>
      <input ref={timerRef} type="number" style={{color:"red"}} value={1} readOnly />
      <button onClick={increseTimer} className='border p-2' >add</button>
    </div>
  )
}

export default App
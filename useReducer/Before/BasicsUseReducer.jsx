import React, { useReducer, useState } from 'react'


function reducer(state , action){
    console.log('state' , state);
    console.log('action' , action);

    switch (action.type){
      case 'INCREMENT':
        return state + 1
      default:
        return state
    }
}

const BasicsUseReducer = () => {
 const [state , dispatch] = useReducer(reducer , 0);
   return (
     <div className='h-screen w-screen flex justify-center items-center'>
        {/* <button className='border p-3' onClick={() => setCount(count + 1)}>{`count is : ${count}`}</button> */}
        <button className='border p-3 text-xl' onClick={() => dispatch({type : 'INCREMENT'})}>{`count is : ${state}`}</button>
     </div>
   )
}

export default BasicsUseReducer;



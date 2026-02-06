import React, { useReducer, useState } from 'react'

function reducer(state , action) {
    console.log(store);
    console.log(action);

    switch (action.type){
        case 'ADD_ITEM':{
            const newItem = `Item ${card.length + 1}`;
            return [...card , newItem];
        }

        case 'REMOVE_ITEM':{
            const newCard = card.filter((_,idx) => (
                idx !== action.index
            ))
          return newCard;
        }

        case 'CLEAR_ITEM':{
            return [];
        }
    }
}

const CardUsingUseState = () => {
  const [state , dispatch] = useReducer(reducer , 0);

  return (
    <div className='flex flex-col gap-8 p-4'>
      <h1 className='text-center'>Add Card using useState</h1>
      { 
        card && card.map((item , idx) => (
          <li key={idx} className='flex gap-3 items-center'>
              <p>{item}</p>
              <button onClick={() => dispatch({type : 'REMOVE_ITEM' , index : idx})} className='p-2 border rounded bg-red-300'>Remove</button>
          </li>
        ))
      }

      <div className='flex gap-2'>
        <button onClick={() => dispatch({type : 'ADD_ITEM'})} className='p-2 bg-yellow-300 border rounded'>Add Item</button>
        <button onClick={() => dispatch({type : 'CLEAR_ITEM'})} className='p-2 bg-yellow-300 border rounded'>Clear Card</button>
      </div>
    </div>
  )
}

export default CardUsingUseState;
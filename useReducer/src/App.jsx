import React, { useState } from 'react'

const App = () => {
  const [card , setCard] = useState([]);
  
  const addItem = () => {
    console.log(card.length)
     const newItem = `Item ${card.length + 1}`;
     console.log(newItem)
     setCard((card) => [...card , newItem]);
  }

  const removeCard = (index) => {
     const newCard = card.filter((_,idx) => (
        idx !== index
     ))
     setCard(newCard);
  }

  const clearCard = () => {
    setCard([]);
  }

  return (
    <div className='flex flex-col gap-8 p-4'>
      <h1 className='text-center'>Add Card using UseReducer</h1>
      { 
        card && card.map((item , idx) => (
          <li key={idx} className='flex gap-3 items-center'>
              <p>{item}</p>
              <button onClick={() => removeCard(idx)} className='p-2 border rounded bg-red-300'>Remove</button>
          </li>
        ))
      }

      <div className='flex gap-2'>
        <button onClick={addItem} className='p-2 bg-yellow-300 border rounded'>Add Item</button>
        <button onClick={clearCard} className='p-2 bg-yellow-300 border rounded'>Clear Card</button>
      </div>

      <div>
        <h1 className='border inline-block p-2 text-2xl'>{`Total Item is : ${card.length}`}</h1>
      </div>
    </div>
  )
}

export default App
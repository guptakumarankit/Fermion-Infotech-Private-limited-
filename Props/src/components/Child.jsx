// import React from 'react'

// const News = ({count , increase}) => {
    
//   const handleClick = () => {
//     console.log("count is Update by News componenets :" , count);
//     increase();
//   }
    
//   return (
//     <>
//       <button className='border' onClick={handleClick}>News</button>
//       <div>{count}</div>
//     </>
//   )
// }

// export default News


import React from 'react'
const News = (props) => {
    
  const handleClick = () => {
    console.log("count is Update by News componenets :" , props.count);
    props.increase();
  }
    
  return (
    <>
      <button className='border' onClick={handleClick}>News</button>
      <div>{props.count}</div>
    </>
  )
}

export default News
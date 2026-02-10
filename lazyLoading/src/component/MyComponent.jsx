import React from 'react'

const myComponent = () => {
  return (
    <div>
      <p>fallback :- This is what you want to show while the component is loading.</p>
      <p>Suspense :- It tells React this component is loading, show something else until it’s ready</p>
    </div>
  )
}

export default myComponent

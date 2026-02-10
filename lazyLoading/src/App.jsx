import React from 'react'
import { lazy } from 'react'
import { Suspense } from 'react'

const MyComponent = lazy(() => import("./component/MyComponent"))

const App = () => {
  return (
    <div>
      <h1>This is my Components</h1>
      <Suspense fallback={<div>Component is Loading</div>}>
         <MyComponent/>
      </Suspense>
    </div>
  )
}

export default App


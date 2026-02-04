import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextProvider } from './ContextApi/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Get access only limited componenets that access the store value */}
    <ContextProvider >
      <App/>
    </ContextProvider>
  </StrictMode>,
)

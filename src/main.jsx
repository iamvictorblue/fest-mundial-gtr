import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

try {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} catch (error) {
  console.error("Error rendering the app:", error)
  root.render(
    <div>
      <h1>An error occurred while rendering the app.</h1>
      <p>{error.message}</p>
    </div>
  )
}

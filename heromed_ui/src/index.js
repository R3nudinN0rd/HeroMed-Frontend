import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import {CookiesProvider} from "react-cookie";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>
)

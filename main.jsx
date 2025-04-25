import React from "react"
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Frontend/src/context/AuthContext.jsx";
import ReactDOM from "react-dom/client";
import './index.css'
import App from './Frontend/src/App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>

)

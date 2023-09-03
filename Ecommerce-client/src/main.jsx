import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
 import { AuthProvider } from './Context/Auth.jsx';
 import "antd/dist/reset.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
    <App />
    </AuthProvider>
  </BrowserRouter>
  
)


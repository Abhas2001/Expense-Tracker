import { StrictMode } from 'react'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import Budget from './Budget.jsx';
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  
     <App/>
       
    
    
  </StrictMode>,
)

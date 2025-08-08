import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import UserContext from './context/UserContext.jsx';
import {ServiceProvider}  from "./context/ServiceSearch.jsx"
import DemoContext from './context/demoContext.jsx';

createRoot(document.getElementById('root')).render(
 
    <ServiceProvider >
      
        <BrowserRouter>
          <App />
        </BrowserRouter>
   
    </ServiceProvider >
    
  
);

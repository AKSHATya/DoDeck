import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './App.css';
import Footer from './component/Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Footer/>
  </StrictMode>,
)

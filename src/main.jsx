
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  ProductContextProvider from './context/ProductContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/Elevate-E-commerce-task'>
    <ProductContextProvider>
      <Navbar/>
      <App />
    </ProductContextProvider>
    
    </BrowserRouter>
)

import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from 'react-router-dom';
import './App.css'
import ProductItem from './Pages/ProductItem';
import Home from './Pages/Home'
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/products" element={<ProductItem />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import "./App.css";
import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer saludo="Nuestros productos" />} />

        <Route path="/category/:idCategory" element={<ItemListContainer saludo="Nuestros productos" />} />

        <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />

      </Routes>    
    </BrowserRouter>
  )
}

export default App

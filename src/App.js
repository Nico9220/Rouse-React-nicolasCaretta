import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListadoContenedor from './Componentes/Item/ItemListadoContenedor'
import ItemDetailContenedor from './Componentes/Item/ItemDetailContenedor';
import Cart from './Componentes/Carro/Cart';
import CartProvider from './Componentes/CartContext';
import ContactForm from './Componentes/ContactForm';
import Home from './Componentes/Home';
import Nosotros from './Componentes/Nosotros';
import Contacto from './Componentes/Contacto';
import Footer from './Componentes/Footer/Footer';
import TemaContextProvider from './Componentes/TemaContext';

function App() {
  return (
    <>
      <TemaContextProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route exact path="/" element={<ItemListadoContenedor />} />
              <Route exact path="/Nosotros" element={<Nosotros />} />
              <Route exact path="/Contacto" element={<Contacto />} />
              <Route exact path="/:Home" element={<Home />} />
              <Route exact path="/categoria/:categoryId" element={<ItemListadoContenedor />} />
              <Route exact path="/detalle/:id" element={<ItemDetailContenedor />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path='/ContactForm' element={<ContactForm />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </TemaContextProvider>
    </>
  );
}

export default App;
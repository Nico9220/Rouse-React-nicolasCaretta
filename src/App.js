import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListadoContenedor from './Componentes/Item/ItemListadoContenedor'
import ItemDetailContenedor from './Componentes/Item/ItemDetailContenedor';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListadoContenedor />} />
          <Route exact path="/categoria/:id" element={<ItemListadoContenedor />} />
          <Route exact path="/item/:id" element={<ItemDetailContenedor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListadoContenedor from './Componentes/Item/ItemListadoContenedor'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListadoContenedor />} />
          <Route exact path="/categoria/:id" element={<ItemListadoContenedor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

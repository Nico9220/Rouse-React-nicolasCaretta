import React, { useEffect, useState, useContext } from "react";
import ItemListado from './Item/ItemListado'
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { TemaContext } from "./TemaContext";
import './Home.css';

function Home() {
  const { darkTheme } = useContext(TemaContext);
  const [oferta, setOferta] = useState([]);

  const { Home } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const getOferta = collection(db, "Productos");

    if (Home) {
      const getOf = query(getOferta, where('Oferta', '==', Home));
      getDocs(getOf).then((res) => {
        setOferta(res.docs.map((item) => ({ id: item.id, ...item.data() })))
      })
    }
  }, [Home]);
  console.log(oferta);
  return (
    <div>
      <h1 className={`${darkTheme ? 'rouseDarkThemeOfertas' : 'rouseLightThemeOfertas'}`}>Nuestras ofertas</h1>
      <ItemListado productos={oferta}></ItemListado>
    </div>
  )
}

export default Home
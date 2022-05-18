import React, { useState } from "react"
import Button from 'react-bootstrap/Button'
import './Item.css'

export default function ItemCount({ stock, add }) {
    const [count, setCount] = useState(1);

    function adding() {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    function subs() {
        if (count > 1) {
            setCount(count - 1);
        }
    }
    return (
        <>
            <div className="estilo-boton">
                <Button onClick={subs} variant="dark"> - </Button>
                <p className="numero">{count}</p>
                <Button onClick={adding} variant="dark"> + </Button>
            </div>
            <div className="agregaCarrito">
                <Button onClick={() => add(count)} variant="dark"> Agregar al carrito </Button>
            </div>
        </>
    )
} 
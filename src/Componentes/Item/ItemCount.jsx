import React, { useState } from "react"
import Button from 'react-bootstrap/Button'

export default function ItemCount({ stock, add }) {
    const [count, setCount] = useState(0);

    function adding() {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    function subs() {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    return (
        <>
            <Button onClick={subs} variant="primary"> - </Button>
            <p>{count}</p>
            <Button onClick={adding} variant="success"> + </Button>
            <Button onClick={() => add(count)} variant="dark"> Agregar al carrito </Button>
        </>
    )
}
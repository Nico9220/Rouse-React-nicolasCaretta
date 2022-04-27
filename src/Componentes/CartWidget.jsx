import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartIMG from "../Carrito/carrito-de-compras.png";
import { CartContext } from "./CartContext";



export default function CartWidget() {
    let { cart } = useContext(CartContext);
    if (cart.length !== 0) {
        return (
            <>
                <Link to={'/Cart'}><span style={{ color: "white" }}>{cart.length}<img width="50px" height="auto" src={CartIMG} alt="logo" /></span></Link>
            </>
        )
    }
}
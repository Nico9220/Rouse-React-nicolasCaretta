import React, {useContext} from "react";
import CartIMG from "../Carrito/carrito-de-compras.png";
import { CartContext } from "./CartContext";



export default function CartWidget() {
    let {cart} = useContext(CartContext);
    console.log(cart);
    return (
        <>
            <span style = {{color: "white"}}>{cart.length}<img width="50px" height="auto" src={CartIMG} alt="logo" /></span>
        </>
    )
}
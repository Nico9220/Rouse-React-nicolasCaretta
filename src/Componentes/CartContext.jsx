import React, { createContext, useContext } from "react";
import { useState } from "react";

export const CartContext = createContext({});
export const useCartContext = () => useContext(CartContext);

function CartProvider (props) {
    const [cart, setCart] = useState([]);

    const inCart = (id) => { cart.some(item => item.id === id) }

    const clearCart = () => {
        setCart([]);
        const removeItem = (id) => setCart(cart.filter(item => item.id !== id));
        const addToCart = (item, quantity) => {
            if (inCart(item.id)) {
                const newCart = cart.map(cartElement => {
                    if (cartElement.id === item.id) {
                        return { ...cartElement, quantity: cartElement.quantity + quantity }
                    } else return cartElement
                })
                setCart(newCart)
            } else {
                setCart(prev => [...prev, { ...item, quantity }])
            }
        }
        return (
            <>
                <CartContext.Provider value={{ cart, setCart, addToCart, clearCart, removeItem }}>
                    {props.children}
                </CartContext.Provider>
            </>
        );
    };

    export default CartProvider;
import React, { useContext, createContext } from "react";
import { useState } from "react";

export const CartContext = createContext({})
export const useCartContext = () => useContext(CartContext)

function CartProvider(props) {
    const [cart, setCart] = useState([])

    const isInCart = (id) => { cart.some(item => item.id === id) }

    const clearCart = () => { setCart([]) }

    const removeItem = (id) => { setCart(cart.filter(item => item.id !== id)) }

    const buyAll = () => setCart([]);

    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
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
            <CartContext.Provider value={{ cart, setCart, addToCart, clearCart, removeItem, buyAll, total }}>
                {props.children}
            </CartContext.Provider>
        </>
    )
}

export default CartProvider;
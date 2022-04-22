import React, { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => console.log(item);
    const removeFromCart = (item) => console.log(item);
    const buyAll = () => setCart([]);

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, buyAll}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider; 
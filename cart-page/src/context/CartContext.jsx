import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "WOLF SO GRIM AND MANGY",
            price: 249,
            quantity: 1,
            image: "path_to_image" // You can use an image URL or import it
        }
    ]);

    const updateItemQuantity = (id, newQuantity) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, updateItemQuantity, totalQuantity, totalAmount }}>
            {children}
        </CartContext.Provider>
    );
};

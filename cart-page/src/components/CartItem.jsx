/* eslint-disable react/prop-types */

import '../styles/CartItem.css'

import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
    const { updateItemQuantity, removeItem } = useContext(CartContext);

    const handleIncrease = () => {
        updateItemQuantity(item.id, item.quantity + 1);
    };

    const handleDecrease = () => {
        if (item.quantity > 0) {
            updateItemQuantity(item.id, item.quantity - 1);
        }
    };

    const handleRemove = () => {
        removeItem(item.id);
    };

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <div className="quantity-control">
                    <button onClick={handleDecrease}>-</button>
                    <span>{item.quantity}</span> {/* Render quantity */}
                    <button onClick={handleIncrease}>+</button>
                </div>
            </div>
            <div className="cart-item-price">
                <p>${item.price}</p> {/* Render price */}
                <p>Subtotal: ${item.price * item.quantity}</p> {/* Calculate subtotal */}
            </div>
            <button className="remove-button" onClick={handleRemove}>REMOVE</button>
        </div>
    );
    
    
};

export default CartItem;

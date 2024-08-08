// src/components/CartItem.js
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
    const { updateItemQuantity } = useContext(CartContext);

    const handleIncrease = () => {
        updateItemQuantity(item.id, item.quantity + 1);
    };

    const handleDecrease = () => {
        if (item.quantity > 1) {
            updateItemQuantity(item.id, item.quantity - 1);
        }
    };

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>Details & Core</p>
                <p>Sustainability</p>
                <div className="quantity-control">
                    <button onClick={handleDecrease}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={handleIncrease}>+</button>
                </div>
            </div>
            <div className="cart-item-price">
                <p>${item.price}</p>
                <p>Subtotal: ${item.price * item.quantity}</p>
            </div>
            <button className="remove-button">REMOVE</button>
        </div>
    );
};

export default CartItem;

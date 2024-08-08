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

    //roundingoff the subtotal value to two decimal to avoid error.
    const subtotal = item.price * item.quantity;
    const roundsubtotal = subtotal.toFixed(2);

    const totalQuantity = 0 + item.quantity;

    //total shipping fee logic:
    const totalShippingFee = Number(item.quantity) * Number(item.shippingFee);

    //Final total:
    const Total = Number(roundsubtotal) + Number(totalShippingFee);
    const finalTotal = Total.toFixed(2);

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
                <h3>Price: ${item.price}</h3> {/* Render price */}
                <p>Shipping Fee: ${item.shippingFee}/qty</p>
                
                <hr/>
                <p>Subtotal: $({roundsubtotal}) for {totalQuantity}.qty</p> {/* Calculate subtotal */}
                <p>Total Shipping Fee: ${totalShippingFee} for {totalQuantity}.qty</p>
                <hr/>
                <h4>Quantities added: {item.quantity}</h4>
                <h2>Product Total: ${finalTotal}</h2>
            </div>
            <button className="remove-button" onClick={handleRemove}>REMOVE</button>
        </div>
    );
    
    
};

export default CartItem;

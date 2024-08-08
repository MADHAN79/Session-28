import '../styles/CartSummary.css'

import { useContext } from 'react';
import CartItem from './CartItem';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cartItems, totalQuantity, roundedTotalAmount } = useContext(CartContext);

    return (
        <div className="cart">
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
            ))}
            <div className="cart-summary">
                <p>Shipping: FREE</p>
                <p>Total quantity: {totalQuantity}</p>
                <p>Total: ${roundedTotalAmount}</p>
            </div>
        </div>
    );
};

export default Cart;

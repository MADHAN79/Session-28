import '../styles/CartSummary.css'

import { useContext } from 'react';
import CartItem from './CartItem';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cartItems, totalQuantity, roundedTotalAmount, roundedTotalShippingFee, roundedTotalAmountWithShipping } = useContext(CartContext);

    return (
        <div className="cart">
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
            ))}
            <div className="cart-summary">
                <h1>Cart Details:</h1>
                <hr/>
                <h3>Total quantity: {totalQuantity}</h3>
                {/* <p>Total: ${roundedTotalAmount}</p> */}
                <h3>Total Shipping Fee: ${roundedTotalShippingFee}</h3>
                <h3>Total Amount (with Shipping): ${roundedTotalAmountWithShipping}</h3>
            </div>
        </div>
    );
};

export default Cart;

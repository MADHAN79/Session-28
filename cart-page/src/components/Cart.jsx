
import { useContext } from 'react';
import CartItem from './CartItem';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cartItems, totalQuantity, totalAmount } = useContext(CartContext);

    return (
        <div className="cart">
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
            ))}
            <div className="cart-summary">
                <p>Subtotal: ${totalAmount}</p>
                <p>Shipping: FREE</p>
                <p>Total: ${totalAmount}</p>
            </div>
        </div>
    );
};

export default Cart;

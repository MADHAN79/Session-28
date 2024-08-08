import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import './styles/cart.css';

function App() {
    return (
        <CartProvider>
            <div className="App">
                <Cart />
            </div>
        </CartProvider>
    );
}

export default App;

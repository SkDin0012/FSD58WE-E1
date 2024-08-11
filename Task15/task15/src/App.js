//import logo from './logo.svg';
import './App.css';
import { CartProvider } from './Components/CartContext';
import CartUser from './Components/CartUser';


function App() {
  return (
    <div className="App">
      <CartProvider>
        <CartUser/>
      </CartProvider>
   
    </div>
  );
}

export default App;

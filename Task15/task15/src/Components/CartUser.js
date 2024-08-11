import React ,{ useContext } from 'react';
import { CartContext } from './CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  
  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.quantity * item.price), 0).toFixed(2);
  };

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="row border-bottom pb-3">
              <div className="col-md-2">
                <img src={item.image} alt={item.title} className="img-fluid" />
              </div>
              <div className="col-md-6">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                <p>Category: {item.category}</p>
                <button className="btn btn-link text-danger" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
              <div className="col-md-4 d-flex justify-content-between align-items-center">
                <div>
                  <button className="btn btn-secondary me-2" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
                  <span>{item.quantity}</span>
                  <button className="btn btn-secondary ms-2" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <p>${(item.quantity * item.price).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div className="row mt-4">
            <div className="col-md-4 offset-md-8">
              <div className="cart-summary">
                <h4>Cart Summary</h4>
                <p>Total Quantity: {getTotalQuantity()}</p>
                <p>Subtotal: ${getSubtotal()}</p>
                <p>Shipping: FREE</p>
                <h4>Total: ${getSubtotal()}</h4>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;

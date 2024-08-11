import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../Redux/cart/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            <div className="cart-items">
                {items.map(item => (
                    <div key={item.id} className="cart-item">
                        <h3>{item.title}</h3>
                        <div className="quantity">
                            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                        </div>
                        <p>Price: ${item.price}</p>
                        <p>Total: ${item.totalPrice}</p>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <h3>Cart Summary</h3>
                <p>Total Quantity: {totalQuantity}</p>
                <p>Total Amount: ${totalAmount}</p>
            </div>
        </div>
    );
};

export default Cart;

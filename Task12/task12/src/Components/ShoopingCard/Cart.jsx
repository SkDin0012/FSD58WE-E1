import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Cart = ({ cart, products }) => {
  const cartItems = products.filter(product => cart.includes(product.id));

  return (
    <div className="mb-4">
      <h3>Shopping Cart ({cartItems.length})</h3>
      <ListGroup>
        {cartItems.map(item => (
          <ListGroupItem key={item.id}>
            {item.name}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default Cart;

import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Product = ({ product, addToCart, removeFromCart, isInCart }) => {
  return (
    <div className="col-md-4">
      <Card className="mb-4 shadow-sm">
        <Card.Img variant='top' src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          {isInCart ? (
            <Button variant="danger" onClick={() => removeFromCart(product.id)}>
              Remove from Cart
            </Button>
          ) : (
            <Button variant="primary" onClick={() => addToCart(product.id)}>
              Add to Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;

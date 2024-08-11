import React from 'react';
import Product from './Product';

const ProductList = ({ products, addToCart, removeFromCart, cart }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          isInCart={cart.includes(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;

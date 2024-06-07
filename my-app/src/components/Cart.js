import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Carrinho de Compras</h2>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.thumbnail} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-price">R${item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item)} className="remove-button">Remover</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;

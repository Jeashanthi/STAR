import React, { useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((product) => (
          <div key={product.id} className="cart-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => handleRemoveFromCart(product.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;

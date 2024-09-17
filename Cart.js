import React, { useState } from 'react';

const Cart = () => {
    const [cartItems, setCartItems] = useState(
        JSON.parse(localStorage.getItem('cartItems')) || []
    );

    const removeFromCart = (id) => {
        const updatedCart = cartItems.filter(item => item._id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    return (
        <div>
            <h1>Your Cart</h1>
            {cartItems.length > 0 ? (
                cartItems.map(item => (
                    <div key={item._id}>
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                        <button onClick={() => removeFromCart(item._id)}>Remove</button>
                    </div>
                ))
            ) : (
                <p>Your cart is empty</p>
            )}
        </div>
    );
};

export default Cart;

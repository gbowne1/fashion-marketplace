import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (product) => {
		setCartItems([...cartItems, product]);
	};

	const removeFromCart = (productId) => {
		setCartItems(cartItems.filter((item) => item._id !== productId));
	};

	return (
		<CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	);
};

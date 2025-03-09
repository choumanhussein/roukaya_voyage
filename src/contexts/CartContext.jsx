import React from "react";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCartItems(parsedCart);
      } catch (err) {
        console.error("Failed to parse cart data:", err);
      }
    }
  }, []);

  useEffect(() => {
    // Calculate total price whenever cart items change
    const newTotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(newTotal);

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItem = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);

      if (existingItemIndex >= 0) {
        // Item already exists, update quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return updatedItems;
      } else {
        // Add new item
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalPrice,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount: cartItems.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

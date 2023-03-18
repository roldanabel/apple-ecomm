import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const removeItem = (id) => {
    setCart (  cart.filter((item) => item.id !== id));
  }

  const clear = (id) => {
    setCart ([]);
  }

  const getTotal = () => {
    let total = 0
    cart.forEach((e) => total += (e.quantity*e.price))
    return total;
  }

  return (
    <CartContext.Provider value={[cart, setCart, removeItem, clear, getTotal]}>
      {children}
    </CartContext.Provider>
  );
};

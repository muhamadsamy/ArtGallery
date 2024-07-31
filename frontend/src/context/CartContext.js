import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
        let founded = false;
        const updatedCart = state.map(item => {
          if (item._id === action.product._id) {
            founded = true;
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
          if (!founded) {
          updatedCart.push({ ...action.product, quantity: 1 });
        }
  
        return updatedCart;
    case "REMOVE_FROM_CART":
      return state.filter((item) => item._id !== action._id);
    case "INCREASE_QUANTITY":
      return state.map((item) =>
        item._id === action._id ? { ...item, quantity: item.quantity + 1 } : item
      );
    case "DECREASE_QUANTITY":
      return state.map((item) =>
        item._id === action._id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    case 'EMPTY_CART':
      return [];

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

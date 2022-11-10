import React, { createContext, useEffect, useReducer } from "react";
import { AppReducer } from "./AppReducer";

//initial state
const initialState = {
  cart: localStorage.getItem("cart-of-techno")
    ? JSON.parse(localStorage.getItem("cart-of-techno"))
    : [],
};

// create Context
export const GlobalContext = createContext(initialState);

// provider components

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart-of-techno", JSON.stringify(state.cart));
  }, [state]);

  const addProductToCart = (product) => {
    dispatch({ type: "ADD_PRODUCT_TO_CART", payload: product });
  };
  const changeProductQty = (product,q) => {
    dispatch({ type: "CHANGE_PRODUCT_QTY", payload: {id:product.id,qty:q} });
  };

  const removeProductFromCart = (id) => {
    dispatch({ type: "REMOVE_PRODUCT_FROM_CART", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        // favourite: state.favourite,
        cart: state.cart,
        // addProductToFavourite ,
        changeProductQty,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

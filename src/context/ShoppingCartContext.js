import React, { createContext, useState, useContext } from "react";

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [shoppingCartInfo, setShoppingCartInfo] = useState([]);
  console.log("newShoppingCartInfo no ShoppingCartCONTEXT: ", shoppingCartInfo);

  const updateShoppingCartInfo = (newProduct) => {
    // Concatenando o novo produto ao array existente
    setShoppingCartInfo((prevShoppingCartInfo) =>
      prevShoppingCartInfo.concat(newProduct)
    );
  };

  return (
    <ShoppingCartContext.Provider
      value={{ shoppingCartInfo, updateShoppingCartInfo }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);

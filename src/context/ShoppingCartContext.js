import React, { createContext, useState, useContext } from "react";

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [shoppingCartInfo, setShoppingCartInfo] = useState([]);
  const updateShoppingCartInfo = (newProduct) => {
    // Adiciona um novo produto ao carrinho de compras
    setShoppingCartInfo((prevShoppingCartInfo) =>
      prevShoppingCartInfo.concat(newProduct)
    );
  };

  const replaceProduct = (newProduct) => {
    // Verifica se há um produto existente com o mesmo product_id
    const existingProductIndex = shoppingCartInfo.findIndex(
      (item) => item.id === newProduct.id
    );

    if (existingProductIndex !== -1) {
      // Se um produto com o mesmo product_id for encontrado,
      // substitui o item na lista pelo novo produto
      const updatedShoppingCartInfo = [...shoppingCartInfo];
      updatedShoppingCartInfo[existingProductIndex] = newProduct;
      setShoppingCartInfo(updatedShoppingCartInfo);
    } else {
      // Se não houver produto com o mesmo product_id,
      // simplesmente adiciona o novo produto ao carrinho de compras
      setShoppingCartInfo((prevShoppingCartInfo) =>
        prevShoppingCartInfo.concat(newProduct)
      );
    }
  };

  const removeProduct = (productIdToRemove) => {
    // Encontra o índice do produto a ser removido
    const productIndexToRemove = shoppingCartInfo.findIndex(
      (item) => item.id === productIdToRemove
    );

    if (productIndexToRemove !== -1) {
      // Se o produto existir na lista, remove-o
      const updatedShoppingCartInfo = [...shoppingCartInfo];
      updatedShoppingCartInfo.splice(productIndexToRemove, 1);
      setShoppingCartInfo(updatedShoppingCartInfo);
    }
  };

  const removeAllProducts = () => {
    setShoppingCartInfo([]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCartInfo,
        updateShoppingCartInfo,
        replaceProduct,
        removeProduct,
        removeAllProducts,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
export const useShoppingCart = () => useContext(ShoppingCartContext);

import { useState, createContext } from "react";

export const CartContext = createContext({
  showCart: false,
  products: [],
  addProduct: (product) => {},
  removeProduct: (productId) => {},
});

export default function CartContextProvider({ children }) {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  function addProduct(product) {
    return setProducts([...products, product]);
  }

  function removeProduct(productId) {
    return products.filter((i) => i.id !== productId);
  }

  return (
    <CartContext.Provider
      value={{
        showCart: false,
        products: products,
        addProduct: addProduct,
        removeProduct: removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: "Cookie1",
    price: 2,
    url: "/images/double-choc-chip-cookie.png",
  },
  {
    id: 2,
    name: "Cookie2",
    price: 4,
    url: "/images/double-choc-chip-cookie.png",
  },
];

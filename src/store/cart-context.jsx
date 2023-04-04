import { useState, createContext } from "react";

export const CartContext = createContext({
  showCart: false,
  products: [],
  addProduct: (product) => {},
  removeProduct: (productId) => {},
  decrementQuantity: (productId) => {},
  incrementQuantity: (productId) => {},
});

export default function CartContextProvider({ children }) {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  function addProduct(product) {
    const productExists = products.find((i) => i.id === product.id);

    if (productExists) {
      setProducts(
        products.map((i) => {
          if (i.id === product.id) {
            return { ...i, quantity: (i.quantity += product.quantity) };
          } else {
            return i;
          }
        })
      );
    } else {
      return setProducts([...products, product]);
    }
  }

  function removeProduct(productId) {
    return products.filter((i) => i.id !== productId);
  }

  function decrementQuantity(productId) {
    return setProducts(
      products.map((i) => {
        if (i.id === productId) {
          return { ...i, quantity: i.quantity-- };
        } else {
          return i;
        }
      })
    );
  }

  function incrementQuantity(productId) {
    return setProducts(
      products.map((i) => {
        if (i.id === productId) {
          return { ...i, quantity: i.quantity++ };
        } else {
          return i;
        }
      })
    );
  }

  return (
    <CartContext.Provider
      value={{
        showCart: false,
        products: products,
        addProduct: addProduct,
        removeProduct: removeProduct,
        decrementQuantity: decrementQuantity,
        incrementQuantity: incrementQuantity,
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
    quantity: 0,
  },
  {
    id: 2,
    name: "Cookie2",
    price: 4,
    url: "/images/double-choc-chip-cookie.png",
    quantity: 0,
  },
];

import { createContext, useReducer } from "react";

export const CartContext = createContext({
  products: [],
  totalCartQuantity: 0,
  totalCost: 0,
});

export const CartDispatchContext = createContext({
  dispatchCartActions: () => {},
});

export default function CartContextProvider({ children }) {
  const [cartState, dispatchCartActions] = useReducer(cartReducer, []);

  const totalCartQuantity = cartState.reduce((prevVal, curVal) => {
    return prevVal + curVal.quantity;
  }, 0);

  const totalCost = cartState.reduce((prevVal, curVal) => {
    return prevVal + curVal.quantity * curVal.price;
  }, 0);

  return (
    <CartDispatchContext.Provider value={dispatchCartActions}>
      <CartContext.Provider
        value={{
          products: cartState,
          totalCartQuantity: totalCartQuantity,
          totalCost: totalCost,
        }}
      >
        {children}
      </CartContext.Provider>
    </CartDispatchContext.Provider>
  );
}

function cartReducer(state, action) {
  if (action.type === "ADD") {
    const { type, ...rest } = action;
    const productExists = state.find((i) => i.id === action.id);

    if (productExists) {
      return state.map((i) => {
        if (i.id === action.id) {
          console.log(i.quantity);
          return { ...i, quantity: i.quantity + action.quantity };
        } else {
          return i;
        }
      });
    } else {
      return [...state, { ...rest }];
    }
  } else if (action.type === "DELETE") {
    return state.filter((i) => i.id !== +action.id);
  } else if (action.type === "DECREMENT") {
    if (action.quantity === 1) {
      return state.filter((i) => i.id !== +action.id);
    }
    return state.map((i) => {
      if (i.id === action.id) {
        return { ...i, quantity: i.quantity - 1 };
      } else {
        return i;
      }
    });
  } else if (action.type === "INCREMENT") {
    console.log(state);
    return state.map((i) => {
      if (i.id === +action.id) {
        return { ...i, quantity: i.quantity + 1 };
      } else {
        return i;
      }
    });
  }
  throw Error("Unknown action: " + action.type);
}

const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: "Cookie1",
    price: 2,
    url: "/images/double-choc-chip-cookie.png",
    quantity: 1,
  },
  {
    id: 2,
    name: "Cookie2",
    price: 4,
    url: "/images/double-choc-chip-cookie.png",
    quantity: 1,
  },
];

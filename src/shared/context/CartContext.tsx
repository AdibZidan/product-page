import { createContext, FC, ReactNode, useState } from 'react';

interface State {
  totalItems: number;
  totalAmount: number;
  isCartShown: boolean;
  isCartAdded: boolean;
}

interface Methods {
  incrementCartCount: () => void;
  decrementCartCount: () => void;
  addToCart: () => void;
  showCart: () => void;
  hideCart: () => void;
  resetCart: () => void;
}

type Cart = State & Methods;

const initialState: State = {
  totalItems: 0,
  totalAmount: 0,
  isCartShown: false,
  isCartAdded: false,
};

export const CartContext = createContext<Cart>({
  ...initialState,
  incrementCartCount: () => {},
  decrementCartCount: () => {},
  addToCart: () => {},
  showCart: () => {},
  hideCart: () => {},
  resetCart: () => {},
});

interface Props {
  children: ReactNode;
}

const DISCOUNTED_PRICE = 125;

export const CartProvider: FC<Props> = ({ children }) => {
  const [state, setState] = useState(initialState);

  const handleIncrementCartCount = () => {
    const getTotalItems = (prevState: State) => prevState.totalItems + 1;

    setState(prevState => ({
      ...prevState,
      totalItems: getTotalItems(prevState),
      totalAmount: DISCOUNTED_PRICE * getTotalItems(prevState),
    }));
  };
  const handleDecrementCartCount = () => {
    const getTotalItems = (prevState: State) =>
      prevState.totalAmount > 0
        ? prevState.totalItems - 1
        : prevState.totalItems;

    setState(prevState => ({
      ...prevState,
      totalItems: getTotalItems(prevState),
      totalAmount: DISCOUNTED_PRICE * getTotalItems(prevState),
    }));
  };
  const handleAddToCart = () =>
    setState(prevState => ({
      ...prevState,
      isCartAdded: true,
    }));
  const handleShowCart = () =>
    setState(prevState => ({
      ...prevState,
      isCartShown: true,
    }));
  const handleHideCart = () =>
    setState(prevState => ({
      ...prevState,
      isCartShown: false,
    }));
  const handleResetCart = () =>
    setState(() => ({
      ...initialState,
      isCartShown: true,
    }));

  return (
    <CartContext.Provider
      value={{
        ...state,
        incrementCartCount: handleIncrementCartCount,
        decrementCartCount: handleDecrementCartCount,
        addToCart: handleAddToCart,
        showCart: handleShowCart,
        hideCart: handleHideCart,
        resetCart: handleResetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

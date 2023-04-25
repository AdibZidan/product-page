import { useCart } from '@hooks';
import { FC } from 'react';
import './ImageDescriptionFooter.scss';

export const ImageDescriptionFooter: FC = () => {
  const {
    totalItems,
    totalAmount,
    incrementCartCount,
    decrementCartCount,
    addToCart,
  } = useCart();

  return (
    <footer className="image-description-footer">
      <div className="quantity-container">
        <button disabled={!totalAmount} onClick={decrementCartCount}>
          -
        </button>
        <span className="quantity">{totalItems}</span>
        <button onClick={incrementCartCount}>+</button>
      </div>
      <button className="button" onClick={addToCart} disabled={!totalAmount}>
        <img src="/images/icons/icon-cart.svg" alt="Cart Icon" />
        <span>Add to cart</span>
      </button>
    </footer>
  );
};

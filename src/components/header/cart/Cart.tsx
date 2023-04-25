import { useCart, useProductImage } from '@hooks';
import { FC } from 'react';
import './Cart.scss';

export const Cart: FC = () => {
  const { totalItems, totalAmount, isCartAdded, resetCart } = useCart();
  const { selectedProduct } = useProductImage();

  const isInformationShown = totalItems > 0 && isCartAdded;
  const className = isInformationShown ? 'cart with-added-items' : 'cart';

  return (
    <section className={className}>
      <header>
        <h3>Cart</h3>
      </header>
      <div className="cart-container">
        {isInformationShown && (
          <div className="sneaker-container">
            <h6>
              Fall Limited Edition Sneakers
              <span>
                $125.00 x {totalItems}
                <span className="total-amount">${totalAmount}</span>
              </span>
            </h6>
            <img
              className="thumbnail"
              src={selectedProduct.thumbnail}
              alt="Sneaker"
            />
            <img
              onClick={resetCart}
              className="delete-icon"
              src="/images/icons/icon-delete.svg"
              alt="Delete icon"
            />
          </div>
        )}
        {!isInformationShown && 'Your cart is empty.'}
      </div>
      {isInformationShown && <button className="button">Checkout</button>}
    </section>
  );
};

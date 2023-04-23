import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../store/interfaces/app/app-state.interface';
import { resetCart } from '../../../store/reducers/cart/cart.reducer';
import './Cart.scss';

export default function Cart(): JSX.Element {
  const cart = useSelector((state: AppState) => state.cart);
  const imageGallery = useSelector((state: AppState) => state.imageGallery);
  const dispatch = useDispatch();

  return (
    <section
      className={
        cart.totalItems > 0 && cart.isCartAdded
          ? 'cart with-added-items'
          : 'cart'
      }
    >
      <header>
        <h3>Cart</h3>
      </header>

      <div className="cart-container">
        {cart.totalItems > 0 && cart.isCartAdded ? (
          <div className="sneaker-container">
            <h6>
              Fall Limited Edition Sneakers
              <span>
                $125.00 x {cart.totalItems}
                <span className="total-amount">${cart.totalAmount}</span>
              </span>
            </h6>

            <img
              className="thumbnail"
              src={imageGallery.selectedImage.path}
              alt="Sneaker"
            />

            <img
              onClick={() => dispatch(resetCart())}
              className="delete-icon"
              src="images/icons/icon-delete.svg"
              alt="Delete icon"
            />
          </div>
        ) : (
          'Your cart is empty.'
        )}
      </div>

      {cart.totalItems > 0 && cart.isCartAdded ? (
        <button className="button">Checkout</button>
      ) : null}
    </section>
  );
}

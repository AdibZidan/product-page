import { AppState } from '@store/interfaces/app/app-state.interface';
import { addToCart, decrementCartCount, incrementCartCount } from '@store/reducers/cart/cart.reducer';
import { useDispatch, useSelector } from 'react-redux';
import './ImageDescriptionFooter.scss';

export default function ImageDescriptionFooter(): JSX.Element {
  const cart = useSelector((state: AppState) => state.cart);
  const dispatch = useDispatch();

  return (
    <footer className='image-description-footer'>
      <div className='quantity-container'>
        <button onClick={() => dispatch(decrementCartCount())}>
          -
        </button>

        <span className='quantity'>
          {cart.totalItems}
        </span>

        <button onClick={() => dispatch(incrementCartCount())}>
          +
        </button>
      </div>

      <button
        className='button'
        onClick={() => dispatch(addToCart())}
        disabled={!cart.totalAmount}>
        <img
          src='images/icons/icon-cart.svg'
          alt='Cart Icon'
        />

        <span>
          Add to cart
        </span>
      </button>
    </footer>
  );
};

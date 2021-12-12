import { AppState } from '@store/interfaces/app/app-state.interface';
import { Cart as CartInterface } from '@store/interfaces/cart/cart.interface';
import { ImageGallery } from '@store/interfaces/image-gallery/image-gallery.interface';
import { resetCart } from '@store/reducers/cart/cart.reducer';
import { useDispatch, useSelector } from 'react-redux';
import './Cart.scss';

export default function Cart(): JSX.Element {
  const cart: CartInterface = useSelector((state: AppState): CartInterface => state.cart);
  const imageGallery: ImageGallery = useSelector((state: AppState): ImageGallery => state.imageGallery);
  const dispatch = useDispatch();

  return (
    <section className={(cart.totalItems > 0 && cart.isCartAdded) ? 'cart with-added-items' : 'cart'}>
      <header>
        <h3>
          Cart
        </h3>
      </header>

      <div className='cart-container'>
        {
          cart.totalItems > 0 && cart.isCartAdded ?
            <div className='sneaker-container'>
              <h6>
                Fall Limited Edition Sneakers

                <span>
                  $125.00 x {cart.totalItems}
                  <span className='total-amount'>
                    ${cart.totalAmount}
                  </span>
                </span>
              </h6>

              <img
                className='thumbnail'
                src={imageGallery.selectedImage.path}
                alt='Sneaker'
              />

              <img
                onClick={() => dispatch(resetCart())}
                className='delete-icon'
                src='images/icons/icon-delete.svg'
                alt='Delete icon'
              />
            </div> : 'Your cart is empty.'
        }
      </div>

      {
        cart.totalItems > 0 && cart.isCartAdded ?
          <button className='button'>
            Checkout
          </button> : null
      }
    </section>
  );
}

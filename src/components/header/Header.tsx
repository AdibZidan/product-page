import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/interfaces/app/app-state.interface';
import { showHideCartView } from '../../store/reducers/cart/cart.reducer';
import OverlayOrNull from '../overlay-or-null/OverlayOrNull';
import Cart from './cart/Cart';
import './Header.scss';

export default function Header(): JSX.Element {
  const [isClicked, setIsClicked] = useState(false);
  const cart = useSelector((state: AppState) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <header className="header">
        <nav>
          <ul>
            <li
              onClick={(): void => setIsClicked(!isClicked)}
              className="hamburger"
            >
              <img src="images/icons/icon-menu.svg" alt="Menu Icon" />
            </li>

            <li>
              <img src="images/logos/logo.svg" alt="Sneakers" />
            </li>

            <div className={isClicked ? 'opened items' : 'items'}>
              <img
                className="close-icon"
                onClick={(): void => setIsClicked(!isClicked)}
                src="images/icons/icon-close.svg"
                alt="Close Icon"
              />

              <li className="li-selected">Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </div>

            <div className="items-2">
              <li>
                {cart.totalItems > 0 ? (
                  <span className="total-items">{cart.totalItems}</span>
                ) : null}

                <img
                  onClick={() => dispatch(showHideCartView())}
                  className="cart"
                  src="images/icons/icon-cart.svg"
                  alt="Cart"
                />

                {cart.isShown ? <Cart /> : null}
              </li>

              <li>
                <img
                  className="avatar"
                  src="images/image-avatar.png"
                  alt="Avatar of a person"
                />
              </li>
            </div>
          </ul>
        </nav>
      </header>

      <OverlayOrNull isClicked={isClicked} />
    </>
  );
}

import { useCart } from '@hooks';
import { FC, useState } from 'react';
import { Overlay } from '../overlay';
import { Cart } from './cart';
import './Header.scss';

export const Header: FC = () => {
  const { totalItems, isCartAdded, isCartShown, showCart, hideCart } =
    useCart();
  const [isOverlayShown, setIsOverlayShown] = useState(false);

  const handleOverLayClick = () => setIsOverlayShown(!isOverlayShown);
  const handleCartClick = () => (!isCartShown ? showCart() : hideCart());

  return (
    <>
      <header className="header">
        <nav>
          <ul>
            <li onClick={handleOverLayClick} className="hamburger">
              <img src="/images/icons/icon-menu.svg" alt="Menu Icon" />
            </li>
            <li>
              <img src="/images/logos/logo.svg" alt="Sneakers" />
            </li>
            <div className={isOverlayShown ? 'opened items' : 'items'}>
              <img
                className="close-icon"
                onClick={handleOverLayClick}
                src="/images/icons/icon-close.svg"
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
                {totalItems > 0 && isCartAdded && (
                  <span className="total-items">{totalItems}</span>
                )}
                <img
                  onClick={handleCartClick}
                  className="cart"
                  src="/images/icons/icon-cart.svg"
                  alt="Cart"
                />
                {isCartShown && <Cart />}
              </li>
              <li>
                <img
                  className="avatar"
                  src="/images/image-avatar.png"
                  alt="Avatar of a person"
                />
              </li>
            </div>
          </ul>
        </nav>
      </header>
      {isOverlayShown && <Overlay />}
    </>
  );
};

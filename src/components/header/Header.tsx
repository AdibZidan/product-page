import { useState } from 'react';
import Overlay from '../overlay/Overlay';
import './Header.scss';

function Header(): JSX.Element {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li
              onClick={(): void => setIsClicked(!isClicked)}
              className='hamburger'>
              <img
                src='images/icons/icon-menu.svg'
                alt='Menu Icon'
              />
            </li>

            <li>
              <img
                src='images/logos/logo.svg'
                alt='Sneakers'
              />
            </li>

            <div className={isClicked ? 'opened items' : 'items'}>
              <img
                className='close-icon'
                onClick={(): void => setIsClicked(!isClicked)}
                src='images/icons/icon-close.svg'
                alt='Close Icon'
              />

              <li className='li-selected'>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </div>

            <div className='items-2'>
              <li>
                <img
                  className='cart'
                  src='images/icons/icon-cart.svg'
                  alt='Cart'
                />
              </li>

              <li>
                <img
                  className='avatar'
                  src='images/image-avatar.png'
                  alt='Avatar of a person'
                />
              </li>
            </div>
          </ul>
        </nav>
      </header>

      <Overlay isClicked={isClicked} />
    </>
  );
}

export default Header;

import { useState } from 'react';
import { decrementOnlyIfAboveZero } from './image-description.helper';
import './ImageDescriptionFooter.scss';

export default function ImageDescriptionFooter(): JSX.Element {
  const [quantity, setQuantity] = useState(0);

  return (
    <footer className='image-description-footer'>
      <div className='quantity-container'>
        <button onClick={(): void => setQuantity(decrementOnlyIfAboveZero(quantity))}>
          -
        </button>

        <span className='quantity'>
          {quantity}
        </span>

        <button onClick={(): void => setQuantity(quantity + 1)}>
          +
        </button>
      </div>

      <button className='add-to-cart'>
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

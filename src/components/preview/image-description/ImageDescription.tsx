import ImageDescriptionFooter from './image-description-footer/ImageDescriptionFooter';
import './ImageDescription.scss';

export const ImageDescription = (): JSX.Element => {
  return (
    <article className='description'>
      <header>
        <h5>
          Sneaker Company
        </h5>

        <h3>
          Fall Limited Edition Sneakers
        </h3>
      </header>

      <p>
        These low-profile sneakers are your perfect casual wear
        companion. Featuring a durable rubber outer sole, they'll withstand
        everything the weather can offer.
      </p>

      <div className='price-container'>
        <span className='price'>
          $125.00
        </span>

        <span className='discount'>
          50%
        </span>

        <span className='old-price'>
          $250.00
        </span>
      </div>

      <ImageDescriptionFooter />
    </article>
  );
};

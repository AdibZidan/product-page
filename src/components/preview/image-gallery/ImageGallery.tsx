import { useMediaQuery, useProductImage } from '@hooks';
import { FC } from 'react';
import './ImageGallery.scss';
import { MobileButtons } from './MobileButtons';

export const ImageGallery: FC = () => {
  const { isMatching } = useMediaQuery('(max-width: 920px)');
  const { images, selectedProduct, selectImage } = useProductImage();

  const handleThumbnailChange =
    (image: { thumbnail: string; picture: string; isSelected: boolean }) =>
    () =>
      selectImage(image);

  return (
    <article>
      <img
        className="selected-image"
        src={selectedProduct.picture}
        alt="Product"
      />
      {isMatching && <MobileButtons />}
      <div className="thumbnails">
        {images.map(image => (
          <img
            key={image.thumbnail}
            className={image.isSelected ? 'selected' : undefined}
            onClick={handleThumbnailChange(image)}
            src={image.thumbnail}
            alt={`Product ${image.thumbnail}`}
          />
        ))}
      </div>
    </article>
  );
};

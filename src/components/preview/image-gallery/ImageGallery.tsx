import { useState } from 'react';
import { getImageWithoutThumbnail, getUpdatedImageWithThumbnails, imagesWithThumbnail } from './image-gallery.helper';
import './ImageGallery.scss';
import { Thumbnail } from './thumbnail.interface';

export default function ImageGallery(): JSX.Element {
  const [imageWithThumbnails, setImageWithThumbnails] = useState(imagesWithThumbnail);
  const [selectedImage, setSelectedImage] = useState(getImageWithoutThumbnail(imageWithThumbnails[0].path));

  return (
    <article>
      <img
        className='selected-image'
        src={selectedImage}
        alt='Product'
      />

      <div className='thumbnails'>
        {imageWithThumbnails.map((thumbnail: Thumbnail, index: number): JSX.Element =>
          <img
            className={thumbnail.isSelected ? 'selected' : ''}
            onClick={(): void => {
              setSelectedImage(getImageWithoutThumbnail(thumbnail.path));
              setImageWithThumbnails(getUpdatedImageWithThumbnails(imageWithThumbnails, thumbnail));
            }}
            src={thumbnail.path}
            alt={`Product ${index}`}
            key={index}
          />
        )}
      </div>
    </article>
  );
};

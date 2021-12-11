import { AppState } from '@store/interfaces/app/app-state.interface';
import { ImageGallery as ImageGalleryInterface } from '@store/interfaces/image-gallery/image-gallery.interface';
import { Image } from '@store/interfaces/image-gallery/image/image.interface';
import { getThumbnails, selectImage } from '@store/reducers/image-gallery/image-gallery.reducer';
import { useDispatch, useSelector } from 'react-redux';
import './ImageGallery.scss';

export default function ImageGallery(): JSX.Element {
  const imageGallery: ImageGalleryInterface = useSelector((state: AppState): ImageGalleryInterface => state.imageGallery);
  const dispatch = useDispatch();

  return (
    <article>
      <img
        className='selected-image'
        src={imageGallery.selectedImage.path}
        alt='Product'
      />

      <div className='thumbnails'>
        {imageGallery.images.map((image: Image, index: number): JSX.Element =>
          <img
            className={image.isSelected ? 'selected' : ''}
            onClick={() => {
              dispatch(selectImage(image));
              dispatch(getThumbnails(image));
            }}
            src={image.path}
            alt={`Product ${index}`}
            key={index}
          />
        )}
      </div>
    </article>
  );
};

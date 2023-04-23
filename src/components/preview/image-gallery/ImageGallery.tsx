import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../store/interfaces/app/app-state.interface';
import {
  getThumbnails,
  selectImage,
} from '../../../store/reducers/image-gallery/image-gallery.reducer';
import './ImageGallery.scss';
import MobileButtons from './mobile-buttons/MobileButtons';

export default function ImageGallery(): JSX.Element {
  const imageGallery = useSelector((state: AppState) => state.imageGallery);
  const dispatch = useDispatch();

  return (
    <article>
      <img
        className="selected-image"
        src={imageGallery.selectedImage.path}
        alt="Product"
      />

      <MobileButtons dispatch={dispatch} />

      <div className="thumbnails">
        {imageGallery.images.map(
          (image, index: number): JSX.Element => (
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
          )
        )}
      </div>
    </article>
  );
}

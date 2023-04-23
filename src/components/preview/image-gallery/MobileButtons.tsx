import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectImage } from '../../../store/reducers/image-gallery/image-gallery.reducer';
import './MobileButtons.scss';

export const MobileButtons: FC = () => {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(1);

  return (
    <div className="mobile-buttons">
      <img
        onClick={() => {
          setIndex(prevState => (prevState !== 1 ? -prevState : prevState));
          dispatch(
            selectImage({
              path: `images/sneakers/image-product-${index}-thumbnail.jpg`,
              selected: true,
            })
          );
        }}
        src="images/icons/icon-previous.svg"
        alt="Previous icon"
      />

      <img
        onClick={() => {
          setIndex(prevState => (prevState < 4 ? ++prevState : prevState));
          dispatch(
            selectImage({
              path: `images/sneakers/image-product-${index}-thumbnail.jpg`,
              selected: true,
            })
          );
        }}
        src="images/icons/icon-next.svg"
        alt="Next icon"
      />
    </div>
  );
};

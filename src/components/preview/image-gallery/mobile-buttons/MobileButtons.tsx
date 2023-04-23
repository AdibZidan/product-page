import { useState } from 'react';
import { selectImage } from '../../../../store/reducers/image-gallery/image-gallery.reducer';
import './MobileButtons.scss';

export default function MobileButtons({ dispatch }: any): JSX.Element {
  let [index, setIndex] = useState(1);

  return (
    <div className="mobile-buttons">
      <img
        onClick={() => {
          setIndex(index !== 1 ? --index : index);
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
          setIndex(index < 4 ? ++index : index);
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
}

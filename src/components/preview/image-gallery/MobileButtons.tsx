import { useProductImage } from '@hooks';
import { FC, useState } from 'react';
import './MobileButtons.scss';

export const MobileButtons: FC = () => {
  const { images, selectImage } = useProductImage();
  const [index, setIndex] = useState(0);

  const handleChangeToPreviousImage = () => {
    if (index > 0) {
      setIndex(prevState => --prevState);
      selectImage(images[index - 1]);
    }
  };

  const handleChangeToNextImage = () => {
    if (index < images.length - 1) {
      setIndex(prevState => ++prevState);
      selectImage(images[index + 1]);
    }
  };

  return (
    <div className="mobile-buttons">
      <img
        onClick={handleChangeToPreviousImage}
        src="/images/icons/icon-previous.svg"
        alt="Previous icon"
      />
      <img
        onClick={handleChangeToNextImage}
        src="/images/icons/icon-next.svg"
        alt="Next icon"
      />
    </div>
  );
};

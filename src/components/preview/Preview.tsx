import { ImageDescription } from './image-description/ImageDescription';
import ImageGallery from './image-gallery/ImageGallery';
import './Preview.scss';

const Preview = (): JSX.Element => {
  return (
    <section>
      <ImageGallery />
      <ImageDescription />
    </section>
  );
};

export default Preview;

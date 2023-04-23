import { FC } from 'react';
import { ImageDescription } from './image-description';
import { ImageGallery } from './image-gallery';
import './Preview.scss';

export const Preview: FC = () => (
  <section className="preview">
    <ImageGallery />
    <ImageDescription />
  </section>
);

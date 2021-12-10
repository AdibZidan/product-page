import { Image } from './image/image.interface';

export interface ImageGallery {
  images: Image[];
  selectedImage: Image;
}

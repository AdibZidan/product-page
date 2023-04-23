import { Image } from '../../interfaces/image-gallery/image/image.interface';

export const images: Image[] = [
  {
    path: 'images/sneakers/image-product-1-thumbnail.jpg',
    isSelected: true,
  },
  {
    path: 'images/sneakers/image-product-2-thumbnail.jpg',
    isSelected: false,
  },
  {
    path: 'images/sneakers/image-product-3-thumbnail.jpg',
    isSelected: false,
  },
  {
    path: 'images/sneakers/image-product-4-thumbnail.jpg',
    isSelected: false,
  },
];

export const selectImageWithoutThumbnail = (image: Image): Image => ({
  ...image,
  path: image.path.replace('-thumbnail', ''),
  isSelected: true,
});

export const getUpdatedImageWithThumbnails = (
  images: Image[],
  originalPath: string
): Image[] =>
  images.map(
    (thumbnail: Image): Image =>
      thumbnail.path === originalPath
        ? { ...thumbnail, isSelected: true }
        : { ...thumbnail, isSelected: false }
  );

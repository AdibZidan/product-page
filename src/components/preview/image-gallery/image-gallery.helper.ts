import { Thumbnail } from './thumbnail.interface';

export const imagesWithThumbnail: Thumbnail[] = [
  {
    path: 'images/sneakers/image-product-1-thumbnail.jpg',
    isSelected: true
  },
  {
    path: 'images/sneakers/image-product-2-thumbnail.jpg',
    isSelected: false
  },
  {
    path: 'images/sneakers/image-product-3-thumbnail.jpg',
    isSelected: false
  },
  {
    path: 'images/sneakers/image-product-4-thumbnail.jpg',
    isSelected: false
  }
];

export const getImageWithoutThumbnail = (image: string): string | (() => string) => {
  return image.replace('-thumbnail', '');
};

export const getUpdatedImageWithThumbnails = (
  imageWithThumbnails: Thumbnail[],
  original: Thumbnail
): Thumbnail[] =>
  imageWithThumbnails.map((thumbnail: Thumbnail): Thumbnail =>
    thumbnail === original ?
      ({ ...original, isSelected: true }) :
      ({ ...thumbnail, isSelected: false })
  );

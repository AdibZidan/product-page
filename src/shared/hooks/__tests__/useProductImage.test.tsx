import { ProductImageProvider } from '@context';
import { useProductImage } from '@hooks';
import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { describe, expect, it } from 'vitest';

describe('#useProductImage()', () => {
  it('returns initial product image values', () => {
    const { result } = renderHook(() => useProductImage(), {
      wrapper: ({ children }) => (
        <ProductImageProvider>{children}</ProductImageProvider>
      ),
    });

    expect(result.current.images).toEqual([
      {
        isSelected: true,
        picture: 'images/sneakers/image-product-1.jpg',
        thumbnail: 'images/sneakers/image-product-1-thumbnail.jpg',
      },
      {
        isSelected: false,
        picture: 'images/sneakers/image-product-2.jpg',
        thumbnail: 'images/sneakers/image-product-2-thumbnail.jpg',
      },
      {
        isSelected: false,
        picture: 'images/sneakers/image-product-3.jpg',
        thumbnail: 'images/sneakers/image-product-3-thumbnail.jpg',
      },
      {
        isSelected: false,
        picture: 'images/sneakers/image-product-4.jpg',
        thumbnail: 'images/sneakers/image-product-4-thumbnail.jpg',
      },
    ]);
    expect(result.current.images).toHaveLength(4);
    expect(result.current.selectedProduct).toEqual({
      isSelected: true,
      picture: 'images/sneakers/image-product-1.jpg',
      thumbnail: 'images/sneakers/image-product-1-thumbnail.jpg',
    });
  });

  it('selects a different image and updates the images array', () => {
    const { result } = renderHook(() => useProductImage(), {
      wrapper: ({ children }) => (
        <ProductImageProvider>{children}</ProductImageProvider>
      ),
    });

    act(() => result.current.selectImage(result.current.images[1]));

    expect(result.current.selectedProduct).toEqual({
      isSelected: true,
      picture: 'images/sneakers/image-product-2.jpg',
      thumbnail: 'images/sneakers/image-product-2-thumbnail.jpg',
    });
    expect(result.current.images).toEqual([
      {
        isSelected: false,
        picture: 'images/sneakers/image-product-1.jpg',
        thumbnail: 'images/sneakers/image-product-1-thumbnail.jpg',
      },
      {
        isSelected: true,
        picture: 'images/sneakers/image-product-2.jpg',
        thumbnail: 'images/sneakers/image-product-2-thumbnail.jpg',
      },
      {
        isSelected: false,
        picture: 'images/sneakers/image-product-3.jpg',
        thumbnail: 'images/sneakers/image-product-3-thumbnail.jpg',
      },
      {
        isSelected: false,
        picture: 'images/sneakers/image-product-4.jpg',
        thumbnail: 'images/sneakers/image-product-4-thumbnail.jpg',
      },
    ]);
    expect(result.current.images).toHaveLength(4);
  });
});

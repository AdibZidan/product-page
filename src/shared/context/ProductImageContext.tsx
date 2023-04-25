import { createContext, FC, ReactNode, useState } from 'react';

interface Image {
  thumbnail: string;
  picture: string;
  isSelected: boolean;
}

interface State {
  images: Image[];
  selectedProduct: Image;
}

interface Methods {
  selectImage(image: Image): void;
}

type Context = State & Methods;

const images: Image[] = [
  {
    thumbnail: 'images/sneakers/image-product-1-thumbnail.jpg',
    picture: 'images/sneakers/image-product-1.jpg',
    isSelected: true,
  },
  {
    thumbnail: 'images/sneakers/image-product-2-thumbnail.jpg',
    picture: 'images/sneakers/image-product-2.jpg',
    isSelected: false,
  },
  {
    thumbnail: 'images/sneakers/image-product-3-thumbnail.jpg',
    picture: 'images/sneakers/image-product-3.jpg',
    isSelected: false,
  },
  {
    thumbnail: 'images/sneakers/image-product-4-thumbnail.jpg',
    picture: 'images/sneakers/image-product-4.jpg',
    isSelected: false,
  },
];

const initialState: State = {
  images,
  selectedProduct: images[0],
};

export const ProductImageContext = createContext<Context>({
  ...initialState,
  selectImage: () => {},
});

interface Props {
  children: ReactNode;
}

export const ProductImageProvider: FC<Props> = ({ children }) => {
  const [state, setState] = useState(initialState);

  const handleImageSelection = (selectedImage: Image) =>
    setState(prevState => ({
      ...prevState,
      images: images.map(image => ({
        ...image,
        isSelected: image.thumbnail === selectedImage.thumbnail,
      })),
      selectedProduct: {
        ...selectedImage,
        isSelected: true,
      },
    }));

  return (
    <ProductImageContext.Provider
      value={{
        ...state,
        selectImage: handleImageSelection,
      }}
    >
      {children}
    </ProductImageContext.Provider>
  );
};

import { CartProvider, ProductImageProvider } from '@context';
import { FC } from 'react';
import { Header, Preview } from './components';

export const App: FC = () => (
  <CartProvider>
    <ProductImageProvider>
      <Header />
      <Preview />
    </ProductImageProvider>
  </CartProvider>
);

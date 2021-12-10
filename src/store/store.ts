import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cart/cart.reducer';
import imageGalleryReducer from './reducers/image-gallery/image-gallery.reducer';

export default configureStore({
  reducer: {
    cart: cartReducer,
    imageGallery: imageGalleryReducer
  }
});

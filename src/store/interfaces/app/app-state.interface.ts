import { Cart } from '../cart/cart.interface';
import { ImageGallery } from '../image-gallery/image-gallery.interface';

export interface AppState {
  cart: Cart;
  imageGallery: ImageGallery;
}

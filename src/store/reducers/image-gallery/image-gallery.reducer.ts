import { createSlice } from '@reduxjs/toolkit';
import {
  getUpdatedImageWithThumbnails,
  images,
  selectImageWithoutThumbnail,
} from '../../helpers/image-gallery/image-gallery.helper';
import { ImageGallery } from '../../interfaces/image-gallery/image-gallery.interface';

const initialImageGalleryState: ImageGallery = {
  images: images,
  selectedImage: selectImageWithoutThumbnail(images[0]),
};

export const imageGallerySlice = createSlice({
  name: 'imageGallery',
  initialState: initialImageGalleryState,
  reducers: {
    getThumbnails: (state, { payload }) => ({
      ...state,
      images: getUpdatedImageWithThumbnails(state.images, payload.path),
    }),
    selectImage: (state, { payload }) => ({
      ...state,
      selectedImage: selectImageWithoutThumbnail(payload),
    }),
  },
});

export const { getThumbnails, selectImage } = imageGallerySlice.actions;

export default imageGallerySlice.reducer;

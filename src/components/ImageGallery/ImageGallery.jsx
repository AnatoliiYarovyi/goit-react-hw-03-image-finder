import React from 'react';
import style from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, onClickImage }) => {
  return (
    <ul className={style.ImageGallery}>
      <ImageGalleryItem images={images} onClickImage={onClickImage} />
    </ul>
  );
};

export default ImageGallery;

import React from 'react';
import style from './ImageGalleryItem.module.css';
import defaultImage from '../default.jpg';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ images, onClickImage }) => {
  return (
    <>
      {images.map(({ id, webformatURL = { defaultImage }, largeImageURL }) => (
        <li key={id} className={style.ImageGalleryItem}>
          <img
            src={webformatURL}
            alt=""
            className={style.ImageGalleryItemImage}
            onClick={() => onClickImage({ largeImageURL })}
          />
        </li>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    }),
  ),
  onClickImage: PropTypes.func,
};

export default ImageGalleryItem;

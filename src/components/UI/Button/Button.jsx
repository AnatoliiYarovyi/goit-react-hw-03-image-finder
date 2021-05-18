import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.css';

const Button = ({ fetchImages, children }) => (
  <div className={style.Box}>
    <button type="button" className={style.Button} onClick={fetchImages}>
      {children}
    </button>
  </div>
);

Button.propTypes = {
  fetchImages: PropTypes.func,
  children: PropTypes.string,
};

export default Button;

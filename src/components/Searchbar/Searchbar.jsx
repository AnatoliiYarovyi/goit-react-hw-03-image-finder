import React from 'react';
import PropTypes from 'prop-types';
import style from './Searchbar.module.css';
import SearchForm from '../SearchForm';

const Searchbar = ({ onSubmit }) => {
  return (
    <header className={style.Searchbar}>
      <SearchForm onSubmit={onSubmit} />
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;

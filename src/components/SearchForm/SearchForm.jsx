import React, { Component } from 'react';
import style from './SearchForm.module.css';

class SearchForm extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={style.SearchForm}>
        <button type="submit" className={style.SearchFormButton}>
          <span className={style.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          value={this.state.query}
          onChange={this.handleChange}
          className={style.SearchFormInput}
        />
      </form>
    );
  }
}

export default SearchForm;

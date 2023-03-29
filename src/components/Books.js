import React from 'react';
import PropTypes from 'prop-types';

const Books = ({ book }) => (
  <>
    <p key={book.id}>
      <strong>{book.title}</strong>
      {' '}
      <span>by</span>
      {' '}
      <strong>{book.author}</strong>
    </p>
    <button type="button">Remove</button>
  </>
);

Books.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Books;

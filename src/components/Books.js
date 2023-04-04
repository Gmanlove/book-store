import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Books = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(book.id));
  };

  return (
    <>
      <p>
        <strong>{book.title}</strong>
        {' '}
        by
        <strong>{book.author}</strong>
      </p>
      <button type="button" onClick={handleRemoveBook}>
        Delete
      </button>
    </>
  );
};

Books.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Books;

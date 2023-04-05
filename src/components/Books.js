import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBookFromApi } from '../redux/books/booksSlice';

const Books = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <>
      <p key={book.id}>
        <strong>{book.title}</strong>
        {' '}
        <span>by</span>
        {' '}
        <strong>{book.author}</strong>
      </p>
      <button
        type="button"
        onClick={() => {
          dispatch(deleteBookFromApi(book.id));
        }}
      >
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

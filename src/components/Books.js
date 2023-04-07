import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBookFromApi } from '../redux/books/booksSlice';
import ProgressBar from './ProgressBar';

const Books = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="book-Card">
      <div key={book.id} className="book-ions">
        <p className="new-cat">{book.category}</p>
        <p className="onye">{book.title}</p>
        <p className="odide">{book.author}</p>
        <ul>
          <li>
            <button className="mind-off" type="button">
              Comments
            </button>
          </li>
          <div className="offLine-2" />
          <li>
            <button
              className="delete"
              type="button"
              onClick={() => {
                dispatch(deleteBookFromApi(book.id));
              }}
            >
              Remove
            </button>
          </li>
          <div className="offLine-2" />
          <li>
            <button className="set-to" type="button">
              Edit
            </button>
          </li>
        </ul>
      </div>
      <div className="progressing">
        <ProgressBar />
        <div className="progressing-text">
          <p className="P-Complete">
            {Math.floor(Math.random() * (99 - 0)) + 0}
            <span>%</span>
          </p>
          <p className="Done">Completed</p>
        </div>
      </div>
      <div className="Line-4" />
      <div className="chapters">
        <p className="C-Chapter">CURRENT CHAPTER</p>
        <p className="C-Lesson">Chapter 17</p>
        <button type="button" className="Up-progress">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

Books.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Books;

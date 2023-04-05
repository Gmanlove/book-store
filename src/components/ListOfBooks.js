import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Books from './Books';
import Load from './Load';
import { getBooksData } from '../redux/books/booksSlice';

const ListOfBooks = () => {
  const {
    books, isLoading, error, ifSuccess,
  } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksData());
  }, [dispatch, ifSuccess]);

  if (isLoading) {
    return (
      <div>
        <Load />
      </div>
    );
  }

  if (error) {
    return <h2>An error has occurred</h2>;
  }

  if (books.length === 0) {
    return <h2>Add your books</h2>;
  }

  return (
    <div>
      {books.map((book) => <Books key={book.id} book={book} />)}
    </div>
  );
};

export default ListOfBooks;

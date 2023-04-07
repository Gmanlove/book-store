import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Books from './Books';
import Load from './Load';
import { getBooksData } from '../redux/books/booksSlice';

const ListOfBooks = () => {
  const {
    books, isLoading, error, ifSuccess,
  } = useSelector((store) => store.book);
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
  if (error) return <h2>An error has occured</h2>;
  if (books.length === 0) return <h2>there are no books</h2>;
  return books.map((book) => (
    <div key={book.id} className="L-Panel">
      <Books key={book.id} book={book} />
    </div>
  ));
};

export default ListOfBooks;

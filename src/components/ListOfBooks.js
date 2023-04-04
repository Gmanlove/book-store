import React from 'react';
import { useSelector } from 'react-redux';
import Books from './Books';

const ListOfBooks = () => {
  const { books } = useSelector((store) => store.book);

  return (
    <div>
      {books.map((book) => (
        <Books key={book.id} book={book} />
      ))}
    </div>
  );
};

export default ListOfBooks;

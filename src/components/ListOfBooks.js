import React from 'react';
import Books from './Books';

const ListOfBooks = () => {
  const books = [
    {
      id: 1,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
    },
    { id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen' },
    {
      id: 4,
      title: '1984',
      author: 'George Orwell',
    },
    {
      id: 5,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
    },
    {
      id: 6,
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
    },
  ];

  return (
    <div>
      {books.map((book) => (
        <Books key={book.id} book={book} />
      ))}
    </div>
  );
};

export default ListOfBooks;
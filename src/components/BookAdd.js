import React from 'react';

const BookAdd = () => (
  <form>
    <input type="text" name="title" placeholder="Book title" />
    <input type="text" name="author" placeholder="Book Author" />
    <button type="button">Add Book</button>
  </form>
);
export default BookAdd;

import React from 'react';
import ListOfBooks from '../components/ListOfBooks';
import BookAdd from '../components/BookAdd';

const Home = () => (
  <div className="container">
    <div className="bookstore-container">
      <ListOfBooks />
    </div>
    <div className="Line" />
    <div className="form-container">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <BookAdd />
    </div>
  </div>
);

export default Home;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const message = useSelector((store) => store.categorie.message);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div id="categories">
      <button onClick={handleClick} type="button">
        Check Status
      </button>
      <h2>{message}</h2>
    </div>
  );
};

export default Categories;

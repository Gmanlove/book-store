import React from 'react';
import '../styles/progressBar.css';

const ProgressBar = () => (
  <div
    role="progressbar"
    aria-valuenow="65"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-label="Loading progress"
  />
);

export default ProgressBar;

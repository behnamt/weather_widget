import React from 'react';

const LoadingIndicator = () => {
  return (
    <div className="spinner">
      <div className="spinner__item bounce1" />
      <div className="spinner__item bounce2" />
      <div className="spinner__item bounce3" />
      <span className="spinner__text">Loading...</span>
    </div>
  );
};

export default LoadingIndicator;

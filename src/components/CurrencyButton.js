import React from 'react';

const CurrencyButton = ({ text, isActive }) => {
  return (
    <button className={isActive ? 'content-container__element content-container__button content-container__button_active' : 'content-container__element content-container__button'} type="button">{text}</button>
  );
};

export default CurrencyButton;

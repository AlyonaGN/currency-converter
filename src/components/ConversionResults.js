import React from 'react';
import { useSelector } from 'react-redux';

const ConversionResults = () => {
  const conversionState = useSelector((st) => {
    return st.conversion;
  });
  return (
    <span className="content-container__element content-container__conversion-price">
      {conversionState.inputSum}
      {conversionState.inputBase}
      {' '}
      =
      {' '}
      {conversionState.convertedSum}
      {conversionState.converseCur}
    </span>
  );
};

export default ConversionResults;

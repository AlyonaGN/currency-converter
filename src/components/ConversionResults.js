import React from 'react';

const ConversionResults = ({
  baseSum, baseCur, convertedSum, convCur,
}) => {
  return (
    <span className="content-container__element content-container__conversion-price">
      {baseSum}
      {baseCur}
      {' '}
      =
      {' '}
      {convertedSum}
      {convCur}
    </span>
  );
};

export default ConversionResults;

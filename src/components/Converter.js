import React from 'react';
import Form from './Form';

const Converter = ({
  onConverse, conversionResultsOpen, baseSum, baseCur, resSum, resCur,
}) => {
  return (
    <div className="page__main">
      <Form
        handleConverse={onConverse}
        sum={baseSum}
        base={baseCur}
        resultSum={resSum}
        converseCur={resCur}
        areResultsShown={conversionResultsOpen}
      />
    </div>
  );
};

export default Converter;

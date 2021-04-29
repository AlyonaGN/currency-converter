import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import PAGE_TITLES from '../utils/consts-titles';
import { ERRORS, VALIDATION_PARAMS } from '../utils/validation-consts';
import ROUTES_MAP from '../utils/routesMap';
import formsValidator from '../utils/formsValidator';
import ConversionResults from './ConversionResults';

const Form = ({
  handleConverse, sum, base, resultSum, converseCur, areResultsShown,
}) => {
  const [formValue, setFormValue] = React.useState('');
  const [errors, setErrors] = React.useState({
    [VALIDATION_PARAMS.REQUIRED]: false,
    [VALIDATION_PARAMS.FORMAT]: false,
  });
  const handleInputChange = useCallback((e) => {
    const { value } = e.target;
    setFormValue(value);
    const error = formsValidator.validateInput(value.toUpperCase());
    if (error) {
      setErrors(() => {
        return ({ [error]: true });
      });
    } else {
      setErrors({
        [VALIDATION_PARAMS.REQUIRED]: false,
        [VALIDATION_PARAMS.FORMAT]: false,
      });
    }
  }, [setFormValue, setErrors]);
  const handleConverseClick = useCallback((e) => {
    e.preventDefault();
    handleConverse(formValue);
    setFormValue('');
  });

  return (
    <form className="form" onSubmit={handleConverseClick} noValidate>
      <label className="form__input">
        <input className="form__field" type="text" name="input" value={formValue} onChange={handleInputChange} placeholder="Введите сумму, исходную валюту и валюту конвертации в таком формате '10 usd in rub'" />
        {errors[VALIDATION_PARAMS.REQUIRED] && <span className="form__field-error">{ERRORS.REQUIRED}</span>}
        {errors[VALIDATION_PARAMS.FORMAT] && <span className="form__field-error">{ERRORS.FORMAT}</span>}
      </label>
      <button className="form__submit-button" type="submit" disabled={Object.values(errors).includes(true)}>Конвертировать</button>
      { areResultsShown
      && (
      <ConversionResults
        baseSum={sum}
        baseCur={base}
        convertedSum={resultSum}
        convCur={converseCur}
      />
      )}
      <Link to={ROUTES_MAP.MAIN} className="content-container__element content-container__page-link">{PAGE_TITLES.CURRENCY_TABLE}</Link>
    </form>
  );
};

export default Form;

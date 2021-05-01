import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PAGE_TITLES from '../utils/consts-titles';
import { ERRORS, VALIDATION_PARAMS } from '../utils/validation-consts';
import ROUTES_MAP from '../utils/routesMap';
import formsValidator from '../utils/formsValidator';
import ConversionResults from './ConversionResults';
import { conversionActions } from '../store/conversion/actions';
import currencyApi from '../utils/currencyAPI';
import parseInput from '../utils/parseInput';

const Form = () => {
  const dispatch = useDispatch();
  const conversionState = useSelector((st) => {
    return st.conversion;
  });
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

  const convertSum = (sum, quote) => {
    return sum * quote;
  };

  const handleConverseClick = useCallback(async (e) => {
    e.preventDefault();
    const input = formValue;
    const { baseCur, converseCur, baseSum } = parseInput(input);
    dispatch(conversionActions.setInputBase(baseCur));
    dispatch(conversionActions.setConverseCur(converseCur));
    dispatch(conversionActions.setInputSum(baseSum));
    const resQuote = await currencyApi
      .getCurrency(baseCur, [converseCur]);
    const resSum = convertSum(baseSum, resQuote[converseCur]);
    dispatch(conversionActions.setConvertedSum(resSum));
    dispatch(conversionActions.setResultsOpen(true));
  });

  return (
    <form className="form" onSubmit={handleConverseClick} noValidate>
      <label className="form__input">
        <input className="form__field" type="text" name="input" value={formValue} onChange={handleInputChange} placeholder="Введите сумму, исходную валюту и валюту конвертации в таком формате '10 usd in rub'" />
        {errors[VALIDATION_PARAMS.REQUIRED] && <span className="form__field-error">{ERRORS.REQUIRED}</span>}
        {errors[VALIDATION_PARAMS.FORMAT] && <span className="form__field-error">{ERRORS.FORMAT}</span>}
      </label>
      <button className="form__submit-button" type="submit" disabled={Object.values(errors).includes(true)}>Конвертировать</button>
      { conversionState.areResultsOpen
      && (
      <ConversionResults />
      )}
      <Link to={ROUTES_MAP.MAIN} className="content-container__element content-container__page-link">{PAGE_TITLES.CURRENCY_TABLE}</Link>
    </form>
  );
};

export default Form;

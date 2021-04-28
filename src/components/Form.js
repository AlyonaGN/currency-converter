import React from 'react';
import { Link } from 'react-router-dom';
import PAGE_TITLES from '../utils/consts-titles';
import ROUTES_MAP from '../utils/routesMap';

const Form = () => {
  return (
    <form className="form" noValidate>
      <label className="form__input">
        <input className="form__field" type="text" name="input" placeholder="Введите сумму, исходную валюту и валюту конвертации в таком формате '10 usd in rub'" />
      </label>
      <button className="form__submit-button" type="button">Конвертировать</button>
      <Link to={ROUTES_MAP.MAIN} className="content-container__element content-container__page-link">{PAGE_TITLES.CURRENCY_TABLE}</Link>
    </form>
  );
};

export default Form;

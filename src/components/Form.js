import React from 'react';

const Form = () => {
  return (
    <form className="form" noValidate>
      <label className="form__input">
        <input className="form__field" type="text" name="input" placeholder="Введите сумму, исходную валюту и валюту конвертации в таком формате '10 usd in rub'" />
        <button className="form__submit-button" type="button">Конвертировать</button>
      </label>
    </form>
  );
};

export default Form;

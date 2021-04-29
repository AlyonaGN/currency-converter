export const ERRORS = {
  REQUIRED: 'Пожалуйста, введите Ваш запрос. Например, 10 usd in rub.',
  FORMAT: `Кажется, введены некорректные данные.\n
  Пожалуйста, введите сумму конвертации, исходную валюту, "in" и валюту, в которую должна быть произведена конвертация, через пробел.\n
  При этом валюта должна быть названа тремя английскими буквами и входить в список поддерживаемых валют (USD, GBP, EUR, RUB).\n
  Например, 100 RUB in USD.`,
};

export const VALIDATION_PARAMS = {
  REQUIRED: 'required',
  FORMAT: 'format',
};

export const MAXIMUM_INPUT_LENGTH = 60;

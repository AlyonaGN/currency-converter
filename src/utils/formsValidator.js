import CURRENCY from './consts-currencies';
import { MAXIMUM_INPUT_LENGTH, VALIDATION_PARAMS } from './validation-consts';

class FormsValidator {
  validateInput(value) {
    if (this._isEmpty(value)) return VALIDATION_PARAMS.REQUIRED;
    if (!this._containsInt(value)) return VALIDATION_PARAMS.FORMAT;
    if (!this._hasBaseCurAndConversionCur(value)) return VALIDATION_PARAMS.FORMAT;
    if (this._tooLongInput(value)) return VALIDATION_PARAMS.FORMAT;
    return '';
  }

  _containsInt(value) {
    return parseInt(value, 10);
  }

  _isEmpty(value) {
    return value === '';
  }

  _tooLongInput(value) {
    return value.length > MAXIMUM_INPUT_LENGTH;
  }

  _hasBaseCurAndConversionCur(value) {
    const inputCurs = {};
    Object.keys(CURRENCY).forEach((cur) => {
      if (value.includes(cur)) {
        if (inputCurs[cur]) {
          inputCurs[cur]++;
        } else {
          inputCurs[cur] = 1;
        }
      }
    });
    const areCursRepeated = this._cursAreRepeated(inputCurs);
    if (areCursRepeated) {
      return false;
    }
    const amountOfCurrencyNames = Object.values(inputCurs).filter((reps) => {
      return reps === 1;
    });
    if (amountOfCurrencyNames.length !== 2) {
      return false;
    }
    return true;
  }

  _cursAreRepeated(inputCurs) {
    return Object.values(inputCurs).some((reps) => {
      return reps > 1;
    });
  }
}

const formsValidator = new FormsValidator();

export default formsValidator;

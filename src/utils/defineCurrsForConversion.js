import CURRENCY from './consts-currencies';

const defineCurrsForConversion = (base) => {
  return Object.values(CURRENCY).filter((cur) => {
    return cur !== base;
  });
};

export default defineCurrsForConversion;

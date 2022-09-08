import Big from 'big.js';

const Operate = (one, two, operation) => {
  const numberOne = Big(one);
  const numberTwo = Big(two);
  if (operation === '+') {
    return numberOne.plus(numberTwo).toString();
  }
  if (operation === '-') {
    return numberOne.minus(numberTwo).toString();
  }
  if (operation === 'x') {
    return numberOne.times(numberTwo).toString();
  }
  if (operation === '÷') {
    try {
      return numberOne.div(numberTwo).toString();
    } catch (err) {
      return "Can't divide by 0.";
    }
  }
  if (operation === '%') {
    try {
      return this.numberOne.mod(numberTwo).toString();
    } catch (err) {
      return "Can't find modulo as can't divide by 0.";
    }
  }
  throw Error(`Unknown operation '${operation}'`);
};
export default Operate;

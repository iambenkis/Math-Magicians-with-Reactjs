// import Big from 'big.js';
import React from 'react';

class Operation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const [numberOne, numberTwo, operation] = this.state;
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
  }
}

export default Operation;

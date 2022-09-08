import Big from 'big.js';
import React from 'react';

class Operation extends React.Component {
    constructor(numberOne, numberTwo, operation) {
        this.numberOne = numberOne;
        this.numberTwo = numberTwo;
        this.operation = operation;
    }

    render () {
        if (this.operation === '+') {
            return this.numberOne.plus(this.numberTwo).toString();
        }
        if (this.operation === '-') {
            return this.numberOne.minus(this.numberTwo).toString();
        }
        if (this.operation === 'x') {
            return this.numberOne.times(this.numberTwo).toString();
        }
        if (this.operation === '÷') {
            try {
              return this.numberOne.div(this.numberTwo).toString();
            } catch (err) {
              return "Can't divide by 0.";
            }
        }
        if (this.operation === '%') {
             try {
              return this.numberOne.mod(this.numberTwo).toString();
            } catch (err) {
              return "Can't find modulo as can't divide by 0.";
            }
        }
          throw Error(`Unknown operation '${this.operation}'`);
    }
}

export default Operation;
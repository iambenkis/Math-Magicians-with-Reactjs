import React from 'react';
import './calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="calc-content">
          <div className="calc-screen">10</div>
          <div className="calc-btns">
            <button type="button">AC</button>
            <button type="button">%</button>
            <button type="button">+/-</button>
            <button type="button" className="signs">&divide;</button>
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button" className="signs">x</button>
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button" className="signs">-</button>
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button" className="signs">+</button>
            <button type="button" className="item0">0</button>
            <button type="button">.</button>
            <button type="button" className="signs">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

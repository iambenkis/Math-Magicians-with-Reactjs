import React from 'react';
import './calculator.css'

function Calculator() {
  return (
    <div className="container">
      <div className="content-calc">
        <div className="calc-screen" />
        <div className="calc-btns">
          <button type="button">AC</button>
          <button type="button">%</button>
          <button type="button">+/-</button>
          <button type="button">&divide;</button>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button">x</button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button">-</button>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button">+</button>
          <button type="button">0</button>
          <button type="button">.</button>
          <button type="button">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;

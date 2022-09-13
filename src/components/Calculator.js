import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const dispspalyValue = (e) => {
    const btnName = e.target.innerText;
    const obj = calculate(state, btnName);
    setState(({
      total: obj.total,
      next: obj.next,
      operation: obj.operation,
    }));
  };
  const { total, next, operation } = state;
  const op = operation === '%' ? '%' : operation;
  let result = '';
  if (total) {
    result = `${total}`;
  }

  if (next) {
    result = `${next}`;
  }
  return (
    <div
      className="calculator"
      style={
          {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }
}
    >
      <p
        style={
            {
              marginRight: '4rem',
              fontWeight: '700',
              fontSize: '2.2rem',
            }
}
      >
        Let s do math!
      </p>
      <div className="container">
        <div className="calc-content">
          <div className="calc-screen">
            <div className="op">{op}</div>
            {result || '0'}
          </div>
          <div className="calc-btns">
            <button onClick={dispspalyValue} type="button">AC</button>
            <button onClick={dispspalyValue} type="button">+/-</button>
            <button onClick={dispspalyValue} type="button">%</button>
            <button onClick={dispspalyValue} type="button" className="signs">&divide;</button>
            <button onClick={dispspalyValue} type="button">7</button>
            <button onClick={dispspalyValue} type="button">8</button>
            <button onClick={dispspalyValue} type="button">9</button>
            <button onClick={dispspalyValue} type="button" className="signs">x</button>
            <button onClick={dispspalyValue} type="button">4</button>
            <button onClick={dispspalyValue} type="button">5</button>
            <button onClick={dispspalyValue} type="button">6</button>
            <button onClick={dispspalyValue} type="button" className="signs">-</button>
            <button onClick={dispspalyValue} type="button">1</button>
            <button onClick={dispspalyValue} type="button">2</button>
            <button onClick={dispspalyValue} type="button">3</button>
            <button onClick={dispspalyValue} type="button" className="signs">+</button>
            <button onClick={dispspalyValue} type="button" className="item0">0</button>
            <button onClick={dispspalyValue} type="button">.</button>
            <button onClick={dispspalyValue} type="button" className="signs">=</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Calculator;

import React from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.dispspalyValue = this.dispspalyValue.bind(this);
  }

  dispspalyValue(e) {
    const btnName = e.target.innerText;
    const obj = calculate(this.state, btnName);
    this.setState(() => ({
      total: obj.total,
      next: obj.next,
      operation: obj.operation,
    }));
  }

  render() {
    const { total, next, operation } = this.state;
    const op = operation === '%' ? '%' : operation;
    let result = '';
    if (total) {
      result = `${total}`;
    }
    if (next) {
      result = `${next}`;
    }
    return (
      <div className="container">
        <div className="calc-content">
          <div className="calc-screen">
            <div className="op">{op}</div>
            {result || '0'}
          </div>
          <div className="calc-btns">
            <button onClick={this.dispspalyValue} type="button">AC</button>
            <button onClick={this.dispspalyValue} type="button">+/-</button>
            <button onClick={this.dispspalyValue} type="button">%</button>
            <button onClick={this.dispspalyValue} type="button" className="signs">&divide;</button>
            <button onClick={this.dispspalyValue} type="button">7</button>
            <button onClick={this.dispspalyValue} type="button">8</button>
            <button onClick={this.dispspalyValue} type="button">9</button>
            <button onClick={this.dispspalyValue} type="button" className="signs">x</button>
            <button onClick={this.dispspalyValue} type="button">4</button>
            <button onClick={this.dispspalyValue} type="button">5</button>
            <button onClick={this.dispspalyValue} type="button">6</button>
            <button onClick={this.dispspalyValue} type="button" className="signs">-</button>
            <button onClick={this.dispspalyValue} type="button">1</button>
            <button onClick={this.dispspalyValue} type="button">2</button>
            <button onClick={this.dispspalyValue} type="button">3</button>
            <button onClick={this.dispspalyValue} type="button" className="signs">+</button>
            <button onClick={this.dispspalyValue} type="button" className="item0">0</button>
            <button onClick={this.dispspalyValue} type="button">.</button>
            <button onClick={this.dispspalyValue} type="button" className="signs">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    this.setState((previousState) => calculate(previousState, event));
  }

  render() {
    const { total, next, operation } = this.state;
    return (

      <div className="calculator disflex">
        <div className="solution">
          {total}
          {operation}
          {next}
        </div>
        <div className="buttons disflex">
          <div className="grey-buttons">
            <button type="button" onClick={() => this.handleClick('AC')}>AC</button>
            <button type="button" onClick={() => this.handleClick('+/-')}>+/-</button>
            <button type="button" onClick={() => this.handleClick('%')}>%</button>
            <button type="button" onClick={() => this.handleClick('7')}>7</button>
            <button type="button" onClick={() => this.handleClick('8')}>8</button>
            <button type="button" onClick={() => this.handleClick('9')}>9</button>
            <button type="button" onClick={() => this.handleClick('4')}>4</button>
            <button type="button" onClick={() => this.handleClick('5')}>5</button>
            <button type="button" onClick={() => this.handleClick('6')}>6</button>
            <button type="button" onClick={() => this.handleClick('1')}>1</button>
            <button type="button" onClick={() => this.handleClick('2')}>2</button>
            <button type="button" onClick={() => this.handleClick('3')}>3</button>
            <button type="button" onClick={() => this.handleClick('0')} className="double-btn">0</button>
            <button type="button" onClick={() => this.handleClick('.')}>.</button>
          </div>
          <div className="orange-buttons disflex">
            <button type="button" onClick={() => this.handleClick('÷')}>÷</button>
            <button type="button" onClick={() => this.handleClick('x')}>x</button>
            <button type="button" onClick={() => this.handleClick('-')}>-</button>
            <button type="button" onClick={() => this.handleClick('+')}>+</button>
            <button type="button" onClick={() => this.handleClick('=')}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

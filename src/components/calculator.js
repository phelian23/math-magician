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
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler = (event) => {
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
            <button type="button" onClick={() => this.onClickHandler('AC')}>AC</button>
            <button type="button" onClick={() => this.onClickHandler('+/-')}>+/-</button>
            <button type="button" onClick={() => this.onClickHandler('%')}>%</button>
            <button type="button" onClick={() => this.onClickHandler('7')}>7</button>
            <button type="button" onClick={() => this.onClickHandler('8')}>8</button>
            <button type="button" onClick={() => this.onClickHandler('9')}>9</button>
            <button type="button" onClick={() => this.onClickHandler('4')}>4</button>
            <button type="button" onClick={() => this.onClickHandler('5')}>5</button>
            <button type="button" onClick={() => this.onClickHandler('6')}>6</button>
            <button type="button" onClick={() => this.onClickHandler('1')}>1</button>
            <button type="button" onClick={() => this.onClickHandler('2')}>2</button>
            <button type="button" onClick={() => this.onClickHandler('3')}>3</button>
            <button type="button" onClick={() => this.onClickHandler('0')} className="double-btn">0</button>
            <button type="button" onClick={() => this.onClickHandler('.')}>.</button>
          </div>
          <div className="orange-buttons disflex">
            <button type="button" onClick={() => this.onClickHandler('÷')}>÷</button>
            <button type="button" onClick={() => this.onClickHandler('x')}>x</button>
            <button type="button" onClick={() => this.onClickHandler('-')}>-</button>
            <button type="button" onClick={() => this.onClickHandler('+')}>+</button>
            <button type="button" onClick={() => this.onClickHandler('=')}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

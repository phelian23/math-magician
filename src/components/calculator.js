import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState('0');
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const onClickHandler = (event) => {
    const calcObj = calculate({ total, next, operation }, event);
    setTotal(calcObj.total);
    setNext(calcObj.next);
    setOperation(calcObj.operation);
  };
  return (

    <div className="calculator disflex">
      <div className="solution">
        {total}
        {operation}
        {next}
      </div>
      <div className="buttons disflex">
        <div className="grey-buttons">
          <button type="button" onClick={() => onClickHandler('AC')}>AC</button>
          <button type="button" onClick={() => onClickHandler('+/-')}>+/-</button>
          <button type="button" onClick={() => onClickHandler('%')}>%</button>
          <button type="button" onClick={() => onClickHandler('7')}>7</button>
          <button type="button" onClick={() => onClickHandler('8')}>8</button>
          <button type="button" onClick={() => onClickHandler('9')}>9</button>
          <button type="button" onClick={() => onClickHandler('4')}>4</button>
          <button type="button" onClick={() => onClickHandler('5')}>5</button>
          <button type="button" onClick={() => onClickHandler('6')}>6</button>
          <button type="button" onClick={() => onClickHandler('1')}>1</button>
          <button type="button" onClick={() => onClickHandler('2')}>2</button>
          <button type="button" onClick={() => onClickHandler('3')}>3</button>
          <button type="button" onClick={() => onClickHandler('0')} className="double-btn">0</button>
          <button type="button" onClick={() => onClickHandler('.')}>.</button>
        </div>
        <div className="orange-buttons disflex">
          <button type="button" onClick={() => onClickHandler('÷')}>÷</button>
          <button type="button" onClick={() => onClickHandler('x')}>x</button>
          <button type="button" onClick={() => onClickHandler('-')}>-</button>
          <button type="button" onClick={() => onClickHandler('+')}>+</button>
          <button type="button" onClick={() => onClickHandler('=')}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

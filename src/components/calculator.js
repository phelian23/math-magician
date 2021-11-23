import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      solution: '0',
    };
  }

  render() {
    const { solution } = this.state;
    return (

      <div className="calculator disflex">
        <div className="solution">{solution}</div>
        <div className="buttons disflex">
          <div className="grey-buttons">
            <button type="button">AC</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button" className="double-btn">0</button>
            <button type="button">.</button>
          </div>
          <div className="orange-buttons disflex">
            <button type="button">&divide;</button>
            <button type="button">&times;</button>
            <button type="button">-</button>
            <button type="button">+</button>
            <button type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

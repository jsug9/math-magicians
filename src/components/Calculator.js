import React from 'react';
import calculate from '../logic/calculate';
import Buttons from './Buttons';
import CalcScreen from './CalcScreen';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleEvent = (e) => {
    const button = e.target.textContent;
    const value = calculate(this.state, button);
    this.setState(value);
  };

  render() {
    const { next, total, operation } = this.state;

    return (
      <div className="calculator-container">
        <div className="calculator">
          <CalcScreen next={next} total={total} operation={operation} />
          <Buttons action={this.handleEvent} />
        </div>
      </div>
    );
  }
}

export default Calculator;

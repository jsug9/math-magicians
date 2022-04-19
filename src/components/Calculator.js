import React from 'react';

const setClass = (button) => {
  if (button === '÷' || button === 'x' || button === '-' || button === '+' || button === '=') {
    return 'calc-button orange-button';
  }

  if (button === '0') {
    return 'calc-button double-sized';
  }

  return 'calc-button';
};

const Buttons = (props) => props.buttons.map((button) => (<button key={button} className={setClass(button)} type="button">{button}</button>));
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-container">
        <div className="calculator">
          <div className="calc-screen">
            <p>0</p>
          </div>
          <div className="buttons">
            <Buttons buttons={['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']} />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

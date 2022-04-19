import React from 'react';

const Calculator = () => {
  const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  const setClass = (button) => {
    if (button === '÷' || button === 'x' || button === '-' || button === '+' || button === '=') {
      return 'orange-button';
    }

    if (button === '0') {
      return 'double-sized';
    }

    return '';
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="cScreen" />
        <div className="buttons">
          {buttons.map((button) => (<button key={button} className={setClass(button)} type="button">{button}</button>))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;

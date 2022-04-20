import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Buttons from './Buttons';
import CalcScreen from './CalcScreen';

const Calculator = () => {
  const [obj, setObj] = useState({});

  const handleEvent = (e) => {
    const button = e.target.textContent;
    const value = calculate(obj, button);
    setObj(value);
  };

  const { next, total, operation } = obj;

  return (
    <div className="calculator-container">
      <div className="calculator">
        <CalcScreen next={next} total={total} operation={operation} />
        <Buttons action={handleEvent} />
      </div>
    </div>
  );
};

export default Calculator;

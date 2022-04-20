import React from 'react';
import PropTypes from 'prop-types';

const setClass = (button) => {
  if (button === '÷' || button === 'x' || button === '-' || button === '+' || button === '=') {
    return 'calc-button orange-button';
  }

  if (button === '0') {
    return 'calc-button double-sized';
  }

  return 'calc-button';
};

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { action } = this.props;
    const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

    return (
      <div className="buttons">
        {buttons.map((button) => (<button key={button} className={setClass(button)} onClick={action} type="button">{button}</button>))}
      </div>
    );
  }
}

Buttons.propTypes = {
  action: PropTypes.func.isRequired,
};

export default Buttons;

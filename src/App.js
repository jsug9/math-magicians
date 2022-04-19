import './App.scss';
import React from 'react';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Calculator
        </header>
        <div>
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;

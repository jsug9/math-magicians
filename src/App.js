import './App.scss';
import React from 'react';
import Calculator from './components/Calculator';

const App = () => (
  <div className="App">
    <header className="App-header">
      Calculator
    </header>
    <div>
      <Calculator />
    </div>
  </div>
);

export default App;

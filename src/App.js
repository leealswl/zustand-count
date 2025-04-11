import React from 'react';
import './App.css';
import counterStore from './stores/CounterStore';
import IncreaseBox from './components/IncreaseBox';
import DecreaseBox from './components/DecreaseBox';

function App() {
  const { increase, increaseBy, decrease, decreaseBy } = counterStore();
  return (
    <div>
      <div className="increase">
        <IncreaseBox />
        <button onClick={increase}>1 증가</button>
        <button onClick={() => increaseBy(10)}>10 증가</button>
      </div>
      <div className="decrease">
        <DecreaseBox />
        <button onClick={decrease}>1 감소</button>
        <button onClick={() => decreaseBy(10)}>10 감소</button>
      </div>
    </div>
  );
}

export default App;

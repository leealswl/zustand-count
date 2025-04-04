import './App.css';
// import { useState } from 'react';
import counterStore from './stores/CounterStore';
import CountBox from './components/CountBox';

function App() {
  // const [count,setCount]=useState(0)

  const {count,increase,increaseBy,decrease,decreaseBy} =counterStore()
  return (
    <div className="App">
      <h1>count:{count}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={()=>increaseBy(5)}>10씩증가</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={()=>decreaseBy(10)}>10씩감소</button>
      <CountBox />
    </div>
  );
}

export default App;

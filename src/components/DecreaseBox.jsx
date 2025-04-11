import React from 'react';
import counterStore from '../stores/CounterStore';

const DecreaseBox = () => {
  const { decreaseCount } = counterStore();
  return (
    <div>
      <h2>감소 : {decreaseCount}</h2>
    </div>
  );
};

export default DecreaseBox;

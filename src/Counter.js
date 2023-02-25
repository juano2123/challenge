import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleSubstract = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleSubstract}>Substract</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;



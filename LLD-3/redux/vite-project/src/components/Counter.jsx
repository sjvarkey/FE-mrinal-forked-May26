import React, { useState } from "react";


function Counter() {
  const [count, setCount ] = useState(0);
  // CounterSlice - store

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if(count>0){
      setCount(count - 1);
    }
 
  };
  return (
    <>
      <button onClick={handleIncrement}> + </button>
      <h3>{count}</h3>
      <button onClick={handleDecrement}> - </button>
    </>
  );
}

export default Counter;

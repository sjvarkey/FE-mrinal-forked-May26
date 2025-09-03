import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="counter">
      <button onClick={decrement} className="btn decrement">
        Decrement
      </button>
      <h1 className="count">{count}</h1>
      <button onClick={increment} className="btn increment">
        Increment
      </button>

      <button onClick={reset} className="btn reset">
        Reset
      </button>
    </div>
  );
}

export default Counter;

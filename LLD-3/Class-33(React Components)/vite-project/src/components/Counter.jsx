import React, { useState, useEffect } from "react";

import ProductList from "./ProductList";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

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

  useEffect(() => {
    console.log("use Effect Runs");
    document.title = `You clicked ${count} times`;
  } , []);

  return (
    <div>
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

        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>{name}</p>
      </div>
    </div>
  );
}

export default Counter;

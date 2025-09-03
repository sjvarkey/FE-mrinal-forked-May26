import React from "react";
import { useState } from "react";

function Counter() {
    const [count , setCount] =useState(0)

  return (
    <div className="counter">
      <button className="btn decrement">Decrement</button>
      <h1 className="count">{count}</h1>
      <button className="btn increment">Increment</button>

      <button className="btn reset">Reset</button>
    </div>
  );
}

export default Counter;

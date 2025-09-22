import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";



function Counter() {
  const {count} = useSelector(state=>state.counter)

  const dispatch = useDispatch()
  

  const handleIncrement = () => {
      dispatch()
  };

  const handleDecrement = () => {
    dispatch()
 
  };

  const reset= ()=>{
    dispatch()
  }
  return (
    <>
      <button onClick={handleIncrement}> + </button>
      <h3>{count}</h3>
      <button onClick={handleDecrement}> - </button>
      <button onClick={reset}> Reset </button>
    </>
  );
}

export default Counter;

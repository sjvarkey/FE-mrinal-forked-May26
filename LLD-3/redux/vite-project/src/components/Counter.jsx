import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, increment, reset } from "../reduxConfig/counterSlice";





function Counter() {
  const {count} = useSelector(state=>state.counter)

  const dispatch = useDispatch()
  

  const handleIncrement = () => {
      dispatch(increment())
  };

  const handleDecrement = () => {
    dispatch(decrement())
 
  };

  const reset= ()=>{
    dispatch(reset())
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

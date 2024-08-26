import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseby1,
  increaseby2,
  increaseby3,
  increaseby4,
} from "../redux/slice/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increaseby1())}>by 1</button>
      <button onClick={() => dispatch(increaseby2())}>by 2</button>
      <button onClick={() => dispatch(increaseby3())}>by 3</button>
      <button onClick={() => dispatch(increaseby4())}>by 4</button>
    </div>
  );
};

export default Counter;

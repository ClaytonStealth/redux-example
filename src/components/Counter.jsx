import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/counterSlice";

const Counter = () => {
  //redux store looks like the following:
  //   state: {
  //     counter: {
  //         value: 0
  //     },
  //     post: {
  //         posts: []
  //     }
  //   }
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const usersArr = useSelector((state) => state.users.usersArr);
  const [onChange, setOnChange] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(increment())}>increment</button>
      <div>
        <input type='number' onChange={(e) => setOnChange(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(onChange))}>
          Submit
        </button>
      </div>
      <div>
        <p>{usersArr}</p>
      </div>
    </div>
  );
};

export default Counter;

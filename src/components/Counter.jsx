import React from "react";
import { useSelector } from "react-redux";
const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  //redux store looks like the following:
  //   state: {
  //     counter: {
  //         value: 0
  //     },
  //     post: {
  //         posts: []
  //     }
  //   }
  return <div>Counter: {count}</div>;
};

export default Counter;

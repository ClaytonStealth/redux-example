import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/counterSlice";
import { addUser, removeUser, totalAges } from "../redux/usersSlice";

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
  const totalAge = useSelector((state) => state.users.totalAges);
  const [onChange, setOnChange] = useState(0);
  const [newUser, setNewUser] = useState("");

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
        <p>{usersArr.map((e) => e.name + ", ")}</p>
        <input
          type='text'
          name=''
          id=''
          onChange={(e) => setNewUser(e.target.value)}
          placeholder='please enter new user'
        />
        <button onClick={() => dispatch(addUser(newUser))}>Add user</button>
        <br />
        <select name='' id='' onChange={(e) => setNewUser(e.target.value)}>
          {usersArr.map((e) => (
            <option value={e.name}>{e.name}</option>
          ))}
        </select>
        <button onClick={() => dispatch(removeUser(newUser))}>
          Remove User
        </button>
        <div>
          <h3>total users ages: {totalAge}</h3>
          <button onClick={() => dispatch(totalAges())}>add up ages</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;

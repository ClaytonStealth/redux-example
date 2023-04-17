import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    usersArr: [
      { name: "stealth", age: 40 },
      { name: "stealth2", age: 50 },
      { name: "stealth3", age: 60 },
      { name: "stealth4", age: 70 },
      { name: "stealth5", age: 80 },
      { name: "stealth6", age: 90 },
    ],
    totalAges: 0,
  },
  reducers: {
    addUser: (state, action) => {
      state.usersArr.push({ name: action.payload, age: 99 });
    },
    removeUser: (state, action) => {
      state.usersArr = state.usersArr.filter(
        (user) => user.name !== action.payload
      );
    },
    totalAges: (state, action) => {
      state.totalAges = state.usersArr.reduce((acc, user) => {
        return acc + user.age;
      }, 0);
    },
  },
});

export const { addUser, removeUser, totalAges } = usersSlice.actions;

export default usersSlice.reducer;

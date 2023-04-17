import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    usersArr: [
      "stealth",
      "stealth2",
      "stealth3",
      "stealth4",
      "stealth5",
      "stealth6",
    ],
  },
  reducers: {
    addUser: (state, action) => {
      state.usersArr.push(action.payload);
    },
    removeUser: (state, action) => {
      state.usersArr = state.usersArr.filter((user) => user !== action.payload);
    },
  },
});

export const { addUser, removeUser } = usersSlice.actions;

export default usersSlice.reducer;

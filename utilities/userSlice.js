import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: null,
  reducers: {
    addUser: function (state, action) {
      return action.payload;
    },
    removeUser: function () {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

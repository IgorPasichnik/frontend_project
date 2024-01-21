import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload;
    },

    logout: (state, action) => {
      state.email = "";
    },
  },
});

export const getUserEmail = (state) => state.user.email;
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

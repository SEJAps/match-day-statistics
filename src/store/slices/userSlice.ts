import { createSlice } from "@reduxjs/toolkit";
import { getUserLocalStorage } from "../../utils";

const authentificate: boolean = !!getUserLocalStorage()

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    authentificate,
    user: { ...getUserLocalStorage() }
  },
  reducers: {
    login: (state, { payload }) => {
      if (payload.email && payload.password) {
        state.authentificate = true;
        state.user = payload.user;

      }
    },
    logout: (state) => {
      state.authentificate = false;
      state.user.email = '';
      state.user.name = '';
    }
  }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer
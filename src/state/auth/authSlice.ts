import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie"

type User = {
  name: string | null;
  userName: string | null;
  token: string | null;
  id: string | null;
  email: string | null;
}

interface AuthState {
  value: User;
}

const initialState: AuthState = {
  value: {
    name: null,
    userName: null,
    token: null,
    id: null,
    email: null
  }
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      alert(action.payload)
      console.log(action.payload)
      state.value = action.payload
      Cookies.set("token", action.payload.token || "")
    },
    logout: (state) => {
      state.value = initialState.value
      Cookies.remove("token")
    }
  }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
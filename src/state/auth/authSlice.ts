import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import memorinnAPI from "../../services/memorinnAPI";

type User = {
  name: string | null;
  userName: string | null;
  token: string | null;
  id: string | null;
  email: string | null;
}

type Credentials = {
  email: string;
  password: string;
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
    logout: (state) => {
      state.value = initialState.value
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      login.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.value = action.payload
      }
    )
  }
})

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: Credentials) => {
    const response = await memorinnAPI.post(`/users/login`, {...credentials})
    if(!response.data) return initialState
    return response.data
  }
)

export const { logout } = authSlice.actions
export default authSlice.reducer
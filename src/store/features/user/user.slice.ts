import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  isVerified: boolean;
}

const initialState: UserState = {
  isVerified: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProfileVerified: (state, action: PayloadAction<boolean>) => {
      state.isVerified = action.payload;
    },
  },
});

export const { setProfileVerified } = userSlice.actions;

export default userSlice.reducer;

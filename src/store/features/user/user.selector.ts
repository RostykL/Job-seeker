import { RootState } from "src/store/store";

export const selectUserVerified = (state: RootState) => state.user.isVerified;

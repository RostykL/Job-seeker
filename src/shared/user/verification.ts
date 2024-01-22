import { UserResponse } from "src/store/features/user/user.types";

export const isUserVerified = (user?: UserResponse) => {
  return user && user?.data?.freelancerPreferences?.isVerified;
};

export const isUserVerificationPending = (user?: UserResponse) => {
  return user && user?.data?.freelancerPreferences?.isVerificationPending;
};

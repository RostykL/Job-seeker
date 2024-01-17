import { api } from "src/store/features/apiUtils/api";
import { UserResponse } from "src/store/features/user/user.types";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    triggerVerification: builder.mutation<void, string>({
      query: (webAppQueryId) => ({
        url: `/trigger-verification`,
        method: "POST",
        body: {
          channelId: webAppQueryId,
        },
      }),
      invalidatesTags: ["User"],
    }),
    getUserInformation: builder.query<UserResponse, number | undefined>({
      query: (telegramId) => {
        if (!telegramId) {
          throw new Error("Telegram user id is required.");
        }

        return {
          url: `/api/user/${telegramId}`,
          method: "GET",
        };
      },
      providesTags: ["User"],
    }),
    verifyUser: builder.mutation<
      UserResponse,
      { telegramId: number; name: string }
    >({
      query: (body) => ({
        url: `/api/verify`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useTriggerVerificationMutation,
  useGetUserInformationQuery,
  useVerifyUserMutation,
} = userApi;

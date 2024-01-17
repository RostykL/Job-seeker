import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://b197-5-199-232-89.ngrok-free.app",
  }),
  endpoints: () => ({}),
}).enhanceEndpoints({
  addTagTypes: ["User"],
});

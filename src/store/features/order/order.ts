import { api } from "src/store/features/apiUtils/api";
import { CreateOrderInput } from "src/store/features/order/order.types";

export const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<void, CreateOrderInput>({
      query: (createOrderInput) => ({
        url: `/api/create-order`,
        method: "POST",
        body: createOrderInput,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;

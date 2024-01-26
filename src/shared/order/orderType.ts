import { OrderType } from "src/pages/Client/CreateOrder/components/SelectOrderType";

export const isOrderTypeDefault = (type: OrderType) =>
  type === OrderType.DEFAULT;

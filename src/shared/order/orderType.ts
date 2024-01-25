import { OrderType } from "src/UI/CreateOrderFields/SelectOrderType/SelectOrderType";

export const isOrderTypeDefault = (type: OrderType) =>
  type === OrderType.DEFAULT;

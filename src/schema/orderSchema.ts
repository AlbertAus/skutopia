import moment from "moment";

interface item {
  Sku: string;
  Description: string;
  Quantity: number;
  UnitPrice: number;
  Options: {
    id: string;
    Name: string;
    Value: string;
  }[];
}

export interface OrderSchema {
  orderNumber: string;
  date: string;
  channel: string;
  items: item[];
  shippingDetails: {
    shippingType: string;
    ShippingPrice: number;
    customerName: string;
    customerEmail: string;
    shippingContactName: string;
    shippingContactEmail: string;
    shippingAddress: string;
  };
}

export function orderSchema(order: any): OrderSchema {
  const {
    integration: { name },
  } = order;
  let formattedOrder: OrderSchema = {
    orderNumber: "",
    date: "",
    channel: "",
    items: [],
    shippingDetails: {
      shippingType: "",
      ShippingPrice: 0,
      customerName: "",
      customerEmail: "",
      shippingContactName: "",
      shippingContactEmail: "",
      shippingAddress: "",
    },
  };

  console.log("order is::", order);
  switch (name) {
    case "shopify":
      formattedOrder.channel = name;
      formattedOrder.orderNumber = order.payload.order_number;
      formattedOrder.date = moment(order.created_at.substring(0, 10)).format(
        "MMM DD, YYYY"
      );
      console.log("formattedOrder.channel is::", formattedOrder.channel);
      break;
    case "woo_commerce":
      break;
    default:
      break;
  }
  return formattedOrder;
}

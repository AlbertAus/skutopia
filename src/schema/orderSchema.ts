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

// This schema use for different sources data transformation purpose
export function orderSchema(order: any): OrderSchema {
  const {
    integration: { name },
    payload,
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

  switch (name) {
    case "shopify":
      formattedOrder.channel = name;
      formattedOrder.orderNumber = payload.order_number;
      formattedOrder.date = moment(order.created_at.substring(0, 10)).format(
        "MMM DD, YYYY"
      );
      formattedOrder.items = payload.order_line_items.map((item: any) => {
        return {
          Sku: item.SKU,
          Description: item.description,
          Quantity: item.quantity,
          Options: item.options.map((option: any) => {
            return {
              id: option.option_id,
              Name: option.name,
              Value: option.value,
            };
          }),
        };
      });
      formattedOrder.shippingDetails = {
        shippingType: payload.shipping_purchased.service_name,
        ShippingPrice: payload.shipping_purchased.amount_paid,
        customerName: payload.customer_details.name,
        customerEmail: payload.customer_details.email,
        shippingContactName: payload.shipping_details.contact_name,
        shippingContactEmail: payload.shipping_details.contact_email,
        shippingAddress: payload.shipping_details.address.toString(),
      };
      break;
    case "woo_commerce":
      formattedOrder.channel = name;
      formattedOrder.orderNumber = payload.Ref;
      formattedOrder.date = moment(order.created_at.substring(0, 10)).format(
        "MMM DD, YYYY"
      );
      formattedOrder.items = payload.LineItems.map((item: any) => {
        return {
          Sku: item.Sku,
          Description: item.Description,
          Quantity: item.Quantity,
          UnitPrice: item.UnitPrice,
          Options: item.Options.map((option: any) => {
            return {
              id: option,
              Name: payload.Options.filter((obj: any) => {
                if (obj.Id === option) {
                  return obj;
                }
              })[0].Name,
              Value: payload.Options.filter(function (obj: any) {
                if (obj.Id === option) {
                  return obj;
                }
              })[0].Value,
            };
          }),
        };
      });
      formattedOrder.shippingDetails = {
        shippingType: payload.ShippingType,
        ShippingPrice: payload.ShippingPrice,
        customerName: payload.CustomerName,
        customerEmail: payload.CustomerEmail,
        shippingContactName: payload.ShippingContactName,
        shippingContactEmail: payload.ShippingContactEmail,
        shippingAddress: payload.ShippingAddress.toString(),
      };
      break;
    default:
      break;
  }
  return formattedOrder;
}

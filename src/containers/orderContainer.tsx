import OrderInformation from "../components/orderInformation";
import ItemList from "../components/itemList";
import ShippingInformation from "../components/shippingInformation";
import CustomerInformation from "../components/customerInformation";
import { orderSchema, OrderSchema } from "../schema/orderSchema";
import { IntegrationOrder1, IntegrationOrder2 } from "../data/order";

const OrdersOutput = (props: any) => {
  const { endPoint, source } = props;
  const orderSource: any =
    source === "shopify" ? IntegrationOrder1 : IntegrationOrder2;
  const order1: OrderSchema = orderSchema(orderSource);
  return (
    <table>
      <tr>
        <td>
          <OrderInformation order={order1} />
        </td>
      </tr>
      <tr>
        <td>
          <ItemList items={order1.items} endPoint={endPoint} />
          {endPoint === "warehouse" ? (
            <CustomerInformation
              shippingDetails={order1.shippingDetails}
              endPoint={endPoint}
            />
          ) : (
            <ShippingInformation
              shippingDetails={order1.shippingDetails}
              endPoint={endPoint}
            />
          )}
        </td>
      </tr>
    </table>
  );
};

export default OrdersOutput;

import React, { Component } from "react";
import OrderInformation from "../components/orderInformation";
import { orderSchema, OrderSchema } from "../schema/orderSchema";
import { IntegrationOrder1, IntegrationOrder2 } from "../data/order";

export class OrdersOutput extends Component {
  //   constructor(props: any) {
  //     super(props);
  //     this.state = {};
  //   }

  public render() {
    const order1: OrderSchema = orderSchema(IntegrationOrder1);
    console.log("order1 is::", order1);
    return (
      <div>
        <OrderInformation order={order1} />
      </div>
    );
  }
}

export default OrdersOutput;

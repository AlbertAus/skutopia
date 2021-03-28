import React, { Component } from "react";
import { OrderSchema } from "../schema/orderSchema";

const ItemList = (order: OrderSchema) => {
  return (
    <div>
      <h1>Order #{order.orderNumber}</h1>
      <p>{order.date}</p>
      <div>
        <strong>Sales Channel: {order.channel}</strong>
      </div>
    </div>
  );
};

export default ItemList;
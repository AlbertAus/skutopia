import React, { Component } from "react";
import { OrderSchema } from "../schema/orderSchema";

const OrderInformation = (order: any) => {
  console.log("order inside orderInformation is::", order);
  const { order: data } = order;
  return (
    <div>
      <h1>Order #{data.orderNumber}</h1>
      <p>{data.date}</p>
      <div>
        <strong>Sales Channel: {data.channel}</strong>
      </div>
    </div>
  );
};

export default OrderInformation;

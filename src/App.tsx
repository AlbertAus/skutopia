import React from "react";
import logo from "./logo.svg";
import "./App.css";
import OrdersOutput from "./containers/orderContainer";
function App() {
  return (
    <div className="App">
      <h2 className="App-menu">&#60; RETURN TO ORDERS</h2>
      <OrdersOutput />
    </div>
  );
}

export default App;

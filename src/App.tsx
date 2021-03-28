import { useState } from "react";
import "./App.css";
import OrdersOutput from "./containers/orderContainer";
function App() {
  const [endPoint, setEndPoint] = useState("inventory");
  const [source, setSource] = useState("shopify");
  return (
    <div className="App">
      {/* setup End Point system */}
      <div>
        <h1>Choose end point</h1>
        <button id='inventory' onClick={() => setEndPoint("inventory")}>Inventory</button>
        <button id='warehouse' onClick={() => setEndPoint("warehouse")}>Warehouse </button>
      </div>
      {/* setup source */}
      <div>
        <h1>Choose integration source</h1>
        <button onClick={() => setSource("shopify")}>shopify</button>
        <button onClick={() => setSource("woo_commerce")}>woo_commerce </button>
      </div>
      <h2 className="App-menu">&#60; RETURN TO ORDERS</h2>

      <OrdersOutput endPoint={endPoint} source={source} />
    </div>
  );
}

export default App;

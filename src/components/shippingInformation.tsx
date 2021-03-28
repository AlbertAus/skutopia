import "../styles/Styles.css";

const ShippingInformation = (props: any) => {
  const { shippingDetails: data } = props;
  return (
    <div>
      <h2>Shipping Information</h2>
      <hr />
      <div>
        <p>
          <div style={{ float: "left" }}>
            <strong>Service purchased</strong>
          </div>
          <div style={{ float: "right", marginRight: "10px" }}>
            {data.shippingType}
          </div>
        </p>
      </div>
      < br />
      <div>
        <p>
          <div style={{ float: "left" }}>
            <strong>Shipping paid</strong>
          </div>
          <div style={{ float: "right", marginRight: "10px" }}>
            ${data.ShippingPrice}
          </div>
        </p>
      </div>
    </div>
  );
};

export default ShippingInformation;

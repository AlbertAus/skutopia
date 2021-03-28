import "../styles/Styles.css";

const CustomerInformation = (props: any) => {
  const { shippingDetails: data } = props;
  return (
    <div className="Order-Info">
      <h2>Customer Information</h2>
      <hr />
      <br />
      <div>
        <div> {data.shippingContactName}</div>
        <div>{data.shippingAddress}</div>
        <div>{data.shippingContactEmail}</div>
      </div>
    </div>
  );
};

export default CustomerInformation;

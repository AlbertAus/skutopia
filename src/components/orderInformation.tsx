import "../styles/Styles.css";

const OrderInformation = (props: any) => {
  const { order: data } = props;
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

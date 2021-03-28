import "../styles/Styles.css";

const ItemList = (props: any) => {
  const { items: data, endPoint } = props;

  return (
    <div className="Order-Info">
      <div>
        <p>
          <div style={{ float: "left" }}>
            <strong>{data.length} Items</strong>
          </div>
          <div style={{ float: "right", marginRight: "10px" }}>To Pick</div>
        </p>
      </div>
      <br />
      {data.map((item: any) => {
        return (
          <div>
            <hr style={{ color: "lightgray", border: "2px solid" }} />
            <div>{item.Description}</div>
            <div>
              {item.Options.map((option: any) => {
                return (
                  <div>
                    {option.Name}:{option.Value}
                  </div>
                );
              })}
            </div>
            {endPoint === "warehouse" ? <div>Qty:{item.Quantity}</div> : ""}
            <div>SKU:{item.Sku}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;

export default function Price({ oldPrice, newPrice }) {
  let oldStyle = {
    textDecorationLine: "line-through",
  };
  let newstyle = {
    textWeight: "bold",
    color: "#000",
  };
  let styles = {
    backgroundColor: "#e0c367",
    height: "30px",
    width: "200px",
    borderBottomLeftRadius: "14px",
    borderBottomRightRadius: "14px",
  };
  return (
    <div style={styles}>
      <span style={oldStyle}>{oldPrice}</span>
      &nbsp;&nbsp;
      <span style={newstyle}>{newPrice}</span>
    </div>
  );
}

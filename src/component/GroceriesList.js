import "./styles/GroceriesList.css";

function GroceriesList(props) {
  return (
    <div className="groceries-item-container">
      <ul className="groceries-item">
        <li>Item: {props.item}</li>
        <li>Units: {props.units}</li>
        <li>Quantity: {props.quantity}</li>
      </ul>
    </div>
  );
}

export default GroceriesList;

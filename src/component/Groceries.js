import GroceriesList from "./GroceriesList";
import "./styles/Groceries.css";

function Groceries(props) {
  return (
    <div className="groceries">
      {props.groceriesList.map((list) => {
        return (
          <GroceriesList
            key={list.id}
            item={list.item}
            units={list.units}
            quantity={list.quantity}
          />
        );
      })}
    </div>
  );
}

export default Groceries;

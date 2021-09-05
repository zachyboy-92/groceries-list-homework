import React, { useState } from "react";
import "./styles/GroceriesListForm.css";

function GroceriesListForm(props) {
  const [enteredItem, setEnteredItem] = useState("");
  const [enteredUnit, setEnteredUnit] = useState("");
  const [enteredQuantity, setEnteredQuantity] = useState(0);

  const itemChangeHandler = (event) => {
    setEnteredItem(event.target.value);
  };

  const unitChangeHandler = (event) => {
    setEnteredUnit(event.target.value);
  };

  const quantityChangeHandler = (event) => {
    setEnteredQuantity(event.target.value);
  };

  const sumbitHandler = (event) => {
    event.preventDefault();
    const groceriesItem = {
      item: enteredItem,
      units: enteredUnit,
      quantity: enteredQuantity,
    };
    if (
      groceriesItem.item === "" ||
      groceriesItem.units === "" ||
      groceriesItem.quantity === ""
    ) {
      return;
    } else {
      props.onSaveGroceries(groceriesItem);
    }
    setEnteredItem("");
    setEnteredUnit("");
    setEnteredQuantity("");
  };

  return (
    <div className="groceries-list">
      <h3>Add New Item</h3>
      <form onSubmit={sumbitHandler}>
        {/* Item */}
        <label htmlFor="item">Item</label>
        <input
          id="item"
          placeholder="Add Item"
          value={enteredItem}
          onChange={itemChangeHandler}
        />
        {/* Units */}
        <label htmlFor="units">Units</label>
        <input
          id="units"
          placeholder="How Many Units"
          value={enteredUnit}
          onChange={unitChangeHandler}
        />
        {/* Quantity */}
        <label htmlFor="quantity">Quantity</label>
        <input
          id="quantity"
          placeholder="Add Quantity"
          value={enteredQuantity}
          onChange={quantityChangeHandler}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default GroceriesListForm;

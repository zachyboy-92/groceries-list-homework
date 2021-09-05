import React, { useState } from "react";
import "./App.css";
import Groceries from "./component/Groceries";
import NewGroceriesList from "./component/NewGroceriesList";

const dummyGroceriesList = [
  {
    id: 1,
    item: "milk",
    units: "2 gallons",
    quantity: 1,
  },
  {
    id: 2,
    item: "eggs",
    units: "12 pack",
    quantity: 1,
  },
  {
    id: 3,
    item: "bread",
    units: "1 pack",
    quantity: 1,
  },
];

function App() {
  const [groceries, setGroceries] = useState(dummyGroceriesList);

  const addGroceriesHandler = (grocerie) => {
    setGroceries((prevGroceries) => {
      return [grocerie, ...prevGroceries];
    });
  };

  return (
    <div className="App">
      <h1>Groceries List</h1>
      <NewGroceriesList onAddGroceries={addGroceriesHandler} />
      <Groceries groceriesList={groceries} />
    </div>
  );
}

export default App;

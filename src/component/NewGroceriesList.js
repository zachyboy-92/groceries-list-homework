import GroceriesListForm from "./GroceriesListForm";

function NewGroceriesList(props) {
  const saveGroceriesDataHandler = (enteredGroceriesData) => {
    const groceriesData = {
      ...enteredGroceriesData,
      id: Math.floor(Math.random() * 20),
    };
    props.onAddGroceries(groceriesData);
  };

  return (
    <div>
      <GroceriesListForm onSaveGroceries={saveGroceriesDataHandler} />
    </div>
  );
}

export default NewGroceriesList;

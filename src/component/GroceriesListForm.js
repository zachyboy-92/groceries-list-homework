import "./GroceriesListForm.css";

function GroceriesListForm() {
  return (
    <div className="groceries-list">
      <h3>Add New Item</h3>
      <form>
        {/* Item */}
        <label htmlFor="item">Item</label>
        <input id="item" placeholder="Add Item" />
        {/* Units */}
        <label htmlFor="units">Units</label>
        <input id="units" placeholder="How Many Units" />
        {/* Quantity */}
        <label htmlFor="quantity">Quantity</label>
        <input id="quantity" placeholder="Add Quantity" />
      </form>
      <button type="submit">Add Item</button>
    </div>
  );
}

export default GroceriesListForm;

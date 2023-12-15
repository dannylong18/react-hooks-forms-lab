import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchCategory, setSearchCategory] = useState('');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchCategory (event) {
    setSearchCategory(event.target.value)
}
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const searchDisplay = itemsToDisplay.filter((item) => {
    return item.name.toLowerCase().includes(searchCategory.toLowerCase())
    })


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter 
      onCategoryChange={handleCategoryChange} 
      search={searchCategory}
      onSearchChange={handleSearchCategory}
      />
      <ul className="Items">
        {searchDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category}/>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

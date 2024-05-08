import React, { useState } from "react";

function Filter({ search, onCategoryChange, onSearchChange }) {

  const [searchQuery, setSearchQuery] = useState(search)

  function handleSearchChange(event) {
    const query = event.target.value
    setSearchQuery(query)
    onSearchChange(query)
  }

  return (
    <div className="Filter">
      <input 
        type="text" 
        name="search" 
        placeholder="Search..." 
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;

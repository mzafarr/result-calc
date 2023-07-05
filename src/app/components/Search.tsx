import React, { useState } from "react";

const Search = ({selectedType, setSelectedType,
  searchQuery, setSearchQuery,
  sortType, setSortType}) => {


  return (
    <div className="my-8">
      <input
        className="outline-none px-2 py-2 rounded-md border"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter search query"
      />

      <select
        className="mx-2 font-sans cursor-pointer px-3 py-2.5 rounded-md"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="False" selected>Select Type</option>
        <option value="Name">Name</option>
        <option value="RegNumber">Reg#</option>
      </select>

      <select
        className="mx-2 font-sans cursor-pointer px-3 py-2.5 rounded-md"
        value={sortType}
        onChange={(e) => setSortType(e.target.value)}
      >
        <option value="False" selected>Sort By</option>
        <option value="Name">Name</option>
        <option value="CGPA">CGPA</option>
      </select>
    </div>
  );
};

export default Search;

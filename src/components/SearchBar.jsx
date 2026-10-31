import React from 'react';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by author..."
      className="w-full p-2 pl-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-gray-800"
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      aria-label="Search photos by author"
    />
  );
};

export default SearchBar;

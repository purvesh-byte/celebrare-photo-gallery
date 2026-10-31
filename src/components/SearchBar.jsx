import React from 'react';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#77766F]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.75"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search by author..."
        className="w-full pl-10 pr-4 py-2 text-sm bg-[#FFFFFF] text-[#292B28] placeholder-[#77766F]/70 border border-[#E7E3DA] rounded-md transition-colors duration-150 focus:outline-none focus:border-[#75866A] focus:ring-1 focus:ring-[#75866A] shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        aria-label="Search photos by author"
      />
    </div>
  );
};

export default SearchBar;

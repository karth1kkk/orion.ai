// SearchContext.js
import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export function useSearch() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }) {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible((prev) => !prev);
  };

  return (
    <SearchContext.Provider value={{ isSearchVisible, toggleSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

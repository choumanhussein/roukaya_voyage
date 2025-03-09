import React from "react";

import { createContext, useState, useEffect } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    // Load search history from localStorage on mount
    const savedHistory = localStorage.getItem("searchHistory");
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    // Save search history to localStorage when it changes
    if (searchHistory.length > 0) {
      localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    }
  }, [searchHistory]);

  const updateSearch = (query) => {
    setSearchQuery(query);
    if (query && !searchHistory.includes(query)) {
      // Add to history only if it's not empty and not already in history
      setSearchHistory((prev) => [query, ...prev].slice(0, 5)); // Keep last 5 searches
    }
  };

  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem("searchHistory");
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        searchHistory,
        updateSearch,
        clearHistory,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

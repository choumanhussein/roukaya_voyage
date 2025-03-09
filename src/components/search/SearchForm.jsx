// src/components/search/SearchForm.jsx
import React from "react";
import { MapPin, Calendar, Users } from "lucide-react";

const SearchForm = ({ query, setQuery, onSearch }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-0 sm:min-w-[200px]">
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Destination
          </label>
          <div className="relative">
            <MapPin
              size={16}
              className="absolute left-3 top-2.5 text-gray-400"
            />
            <input
              type="text"
              name="destination"
              className="block w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md"
              placeholder="Où allez-vous ?"
              value={query.destination || ""}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex-1 min-w-0 sm:min-w-[200px]">
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Dates
          </label>
          <div className="relative">
            <Calendar
              size={16}
              className="absolute left-3 top-2.5 text-gray-400"
            />
            <input
              type="text"
              name="dates"
              className="block w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md"
              placeholder="Quand partez-vous ?"
              value={query.dates || ""}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex-1 min-w-0 sm:min-w-[200px]">
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Voyageurs
          </label>
          <div className="relative">
            <Users
              size={16}
              className="absolute left-3 top-2.5 text-gray-400"
            />
            <input
              type="text"
              name="travelers"
              className="block w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md"
              placeholder="Combien de personnes ?"
              value={query.travelers || ""}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="w-full sm:w-auto flex items-end">
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white py-2 px-6 rounded-md font-medium"
          >
            Rechercher
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;

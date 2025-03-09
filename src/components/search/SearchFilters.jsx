// src/components/search/SearchFilters.jsx
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const SearchFilters = ({
  filters,
  setFilters,
  isFilterOpen,
  setIsFilterOpen,
}) => {
  // État temporaire pour stocker les valeurs avant de les appliquer
  const [tempFilters, setTempFilters] = useState(filters);

  // Réinitialiser les filtres temporaires à chaque ouverture
  useEffect(() => {
    setTempFilters(filters);
  }, [isFilterOpen, filters]);

  // Gestionnaire de changement pour les inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      // Pour les checkboxes, gérer les tableaux
      const newValues = tempFilters[name] ? [...tempFilters[name]] : [];

      if (checked) {
        newValues.push(value);
      } else {
        const index = newValues.indexOf(value);
        if (index > -1) {
          newValues.splice(index, 1);
        }
      }

      setTempFilters({
        ...tempFilters,
        [name]: newValues,
      });
    } else if (type === "range") {
      // Pour les sliders
      setTempFilters({
        ...tempFilters,
        [name]: parseInt(value),
      });
    } else {
      // Pour les autres inputs
      setTempFilters({
        ...tempFilters,
        [name]: value,
      });
    }
  };

  // Appliquer les filtres
  const applyFilters = () => {
    setFilters(tempFilters);
    setIsFilterOpen(false);
  };

  // Réinitialiser tous les filtres
  const resetFilters = () => {
    const defaultFilters = {
      priceMax: 5000,
      duration: [],
      rating: 0,
      categories: [],
    };

    setTempFilters(defaultFilters);
    setFilters(defaultFilters);
  };

  return (
    <div
      className={`fixed inset-0 z-40 transform transition-transform duration-300 ${
        isFilterOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => setIsFilterOpen(false)}
      ></div>

      <div className="absolute top-0 right-0 w-full md:w-96 h-full bg-white shadow-xl overflow-y-auto">
        <div className="p-4 border-b sticky top-0 bg-white z-10 flex justify-between items-center">
          <h3 className="text-lg font-bold text-blue-900">
            Filtres de recherche
          </h3>
          <button
            onClick={() => setIsFilterOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Prix */}
          <div className="space-y-3">
            <h4 className="font-medium text-gray-700">Budget</h4>
            <div>
              <input
                type="range"
                name="priceMax"
                min="0"
                max="10000"
                step="100"
                value={tempFilters.priceMax || 5000}
                onChange={handleChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between mt-1 text-sm text-gray-500">
                <span>0 €</span>
                <span>Max: {tempFilters.priceMax || 5000} €</span>
              </div>
            </div>
          </div>

          {/* Catégories */}
          <div className="space-y-3">
            <h4 className="font-medium text-gray-700">Type de voyage</h4>
            <div className="space-y-2">
              {["Plage", "Ville", "Montagne", "Culturel", "Aventure"].map(
                (option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="categories"
                      value={option}
                      checked={(tempFilters.categories || []).includes(option)}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                )
              )}
            </div>
          </div>
        </div>

        <div className="p-4 border-t sticky bottom-0 bg-white flex space-x-3">
          <button
            onClick={resetFilters}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 flex-1"
          >
            Réinitialiser
          </button>
          <button
            onClick={applyFilters}
            className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 flex-1"
          >
            Appliquer
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;

// src/pages/SearchPage.jsx
// Page de recherche et résultats

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchForm from "../components/search/SearchForm";
import SearchFilters from "../components/search/SearchFilters";
import SearchResults from "../components/search/SearchResults";
import { searchDestinations } from "../services/destinations";
import { Loader } from "lucide-react";

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // États
  const [query, setQuery] = useState({
    destination: queryParams.get("destination") || "",
    dates: queryParams.get("dates") || "",
    travelers: queryParams.get("travelers") || "1 adulte",
  });

  const [filters, setFilters] = useState({
    priceMax: 5000,
    duration: [],
    rating: 0,
    categories: [],
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("recommended");
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  // Charger les résultats lors du changement de filtres ou de tri
  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        // Dans un environnement réel, vous appelleriez votre API
        // Pour le moment, nous simulons un délai et utilisons des données mock
        setTimeout(() => {
          // Simulation de résultats (à remplacer par un appel API réel)
          const mockResults = [
            {
              id: 1,
              title: "Séjour paradisiaque à Bali",
              description:
                "Découvrez la magie de Bali avec ce séjour tout compris.",
              image: "/api/placeholder/800/600",
              price: 1299,
              oldPrice: 1599,
              rating: 4.8,
              reviewCount: 176,
              location: "Bali, Indonésie",
              duration: "8 jours / 7 nuits",
              promotion: "-20%",
              categories: ["Plage", "Romantique"],
            },
            {
              id: 2,
              title: "Weekend à Paris",
              description: "Un séjour romantique dans la ville lumière.",
              image: "/api/placeholder/800/600",
              price: 499,
              oldPrice: null,
              rating: 4.5,
              reviewCount: 203,
              location: "Paris, France",
              duration: "3 jours / 2 nuits",
              promotion: null,
              categories: ["Ville", "Culturel", "Romantique"],
            },
            // Autres résultats...
          ];

          // Appliquer les filtres et le tri
          let filteredResults = applyFilters(mockResults, filters);
          filteredResults = applySorting(filteredResults, sortBy);

          setResults(filteredResults);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Erreur lors de la recherche :", error);
        setLoading(false);
      }
    };

    fetchResults();
  }, [filters, sortBy]);

  // Fonction pour appliquer les filtres
  const applyFilters = (data, filters) => {
    let filteredData = [...data];

    // Filtre de prix
    if (filters.priceMax) {
      filteredData = filteredData.filter(
        (item) => item.price <= filters.priceMax
      );
    }

    // Filtre de durée
    if (filters.duration && filters.duration.length > 0) {
      filteredData = filteredData.filter((item) => {
        const days = parseInt(item.duration.split(" ")[0]);
        return filters.duration.some((range) => {
          if (range === "1-3 jours") return days >= 1 && days <= 3;
          if (range === "4-7 jours") return days >= 4 && days <= 7;
          if (range === "8-14 jours") return days >= 8 && days <= 14;
          if (range === "15+ jours") return days >= 15;
          return false;
        });
      });
    }

    // Filtre de note
    if (filters.rating) {
      filteredData = filteredData.filter(
        (item) => item.rating >= filters.rating
      );
    }

    // Filtre de catégories
    if (filters.categories && filters.categories.length > 0) {
      filteredData = filteredData.filter((item) =>
        item.categories.some((cat) => filters.categories.includes(cat))
      );
    }

    return filteredData;
  };

  // Fonction pour appliquer le tri
  const applySorting = (data, sortBy) => {
    let sortedData = [...data];

    switch (sortBy) {
      case "price-asc":
        sortedData.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sortedData.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sortedData.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Par défaut, on garde l'ordre recommandé
        break;
    }

    return sortedData;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Barre de recherche en haut */}
      <div className="bg-blue-800 py-6">
        <div className="container mx-auto px-4">
          <SearchForm query={query} setQuery={setQuery} />
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-8">
        {/* En-tête des résultats */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-blue-900 mb-2">
              {results.length} résultats trouvés
              {query.destination && <span> pour "{query.destination}"</span>}
            </h1>
            <p className="text-gray-600">
              Trouvez le voyage idéal parmi notre sélection d'offres
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-blue-500 focus:border-blue-500 bg-white"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="recommended">Recommandés</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="rating">Mieux notés</option>
            </select>

            <button
              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50"
              onClick={() => setIsFilterOpen(true)}
            >
              <Sliders size={18} className="mr-2 text-blue-700" />
              Filtres
            </button>
          </div>
        </div>

        {/* Filtres appliqués sous forme de pills */}
        {(filters.priceMax !== 5000 ||
          filters.categories.length > 0 ||
          filters.duration.length > 0 ||
          filters.rating > 0) && (
          <div className="flex flex-wrap gap-2 mb-6">
            {/* Rendu des filtres actifs ici sous forme de badges */}
            {/* ... */}

            <button
              className="text-blue-700 text-sm hover:underline"
              onClick={() =>
                setFilters({
                  priceMax: 5000,
                  duration: [],
                  rating: 0,
                  categories: [],
                })
              }
            >
              Effacer tous les filtres
            </button>
          </div>
        )}

        {/* Résultats */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader size={40} className="text-blue-700 animate-spin mb-4" />
            <p className="text-gray-600">Recherche en cours...</p>
          </div>
        ) : (
          <SearchResults results={results} />
        )}

        {/* Panel de filtres */}
        <SearchFilters
          filters={filters}
          setFilters={setFilters}
          isFilterOpen={isFilterOpen}
          setIsFilterOpen={setIsFilterOpen}
        />
      </div>
    </div>
  );
};

export default SearchPage;

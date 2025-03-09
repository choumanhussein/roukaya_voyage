import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Star } from "lucide-react";

const AllDestinationsPage = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  // Charger toutes les destinations
  useEffect(() => {
    // Simuler un chargement de données
    const mockDestinations = [
      {
        id: "1",
        name: "Paris",
        country: "France",
        continent: "Europe",
        image: "/api/placeholder/400/300",
        rating: 4.8,
        price: 1299,
      },
      {
        id: "2",
        name: "Bali",
        country: "Indonésie",
        continent: "Asie",
        image: "/api/placeholder/400/300",
        rating: 4.7,
        price: 1499,
      },
      {
        id: "3",
        name: "New York",
        country: "États-Unis",
        continent: "Amérique",
        image: "/api/placeholder/400/300",
        rating: 4.6,
        price: 1799,
      },
      {
        id: "4",
        name: "Tokyo",
        country: "Japon",
        continent: "Asie",
        image: "/api/placeholder/400/300",
        rating: 4.9,
        price: 1999,
      },
      {
        id: "5",
        name: "Santorin",
        country: "Grèce",
        continent: "Europe",
        image: "/api/placeholder/400/300",
        rating: 4.7,
        price: 1399,
      },
      {
        id: "6",
        name: "Le Caire",
        country: "Égypte",
        continent: "Afrique",
        image: "/api/placeholder/400/300",
        rating: 4.5,
        price: 1299,
      },
      {
        id: "7",
        name: "Sydney",
        country: "Australie",
        continent: "Océanie",
        image: "/api/placeholder/400/300",
        rating: 4.6,
        price: 2299,
      },
      {
        id: "8",
        name: "Rio de Janeiro",
        country: "Brésil",
        continent: "Amérique",
        image: "/api/placeholder/400/300",
        rating: 4.4,
        price: 1899,
      },
    ];

    setDestinations(mockDestinations);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="animate-spin h-10 w-10 border-4 border-blue-700 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  // Regrouper les destinations par continent
  const continents = {
    Europe: destinations.filter((dest) => dest.continent === "Europe"),
    Asie: destinations.filter((dest) => dest.continent === "Asie"),
    Afrique: destinations.filter((dest) => dest.continent === "Afrique"),
    Amérique: destinations.filter((dest) => dest.continent === "Amérique"),
    Océanie: destinations.filter((dest) => dest.continent === "Océanie"),
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Toutes nos destinations
        </h1>

        {/* Navigation par continent */}
        <div className="mb-8 flex flex-wrap gap-3">
          {Object.keys(continents).map((continent) => (
            <Link
              key={continent}
              to={`/destinations/${continent.toLowerCase()}`}
              className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition"
            >
              {continent}
            </Link>
          ))}
        </div>

        {/* Liste de toutes les destinations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Link
              to={`/destinations/${destination.id}`}
              key={destination.id}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold py-1 px-2 rounded-lg">
                  À partir de {destination.price} €
                </div>
              </div>

              {/* Contenu */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-blue-900 mb-1">
                  {destination.name}
                </h3>
                <div className="flex items-center mb-2">
                  <MapPin size={16} className="text-blue-700 mr-1" />
                  <span className="text-gray-600 text-sm">
                    {destination.country}
                  </span>
                </div>
                <div className="flex items-center">
                  <Star size={16} className="text-yellow-500 mr-1" />
                  <span className="text-gray-700">{destination.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllDestinationsPage;

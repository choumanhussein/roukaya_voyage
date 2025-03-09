// src/components/account/FavoriteList.jsx
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Star, Trash2 } from "lucide-react";

const FavoriteList = ({ favorites = [], onRemove }) => {
  if (!favorites || favorites.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold text-blue-900 mb-6">Mes favoris</h2>
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">
            Vous n'avez pas encore ajouté de favoris.
          </p>
          <Link
            to="/search"
            className="inline-block px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
          >
            Explorer nos destinations
          </Link>
        </div>
      </div>
    );
  }

  // Fonction pour supprimer un favori
  const handleRemove = (id) => {
    if (onRemove) {
      onRemove(id);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-blue-900">Mes favoris</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {favorites.map((favorite) => (
          <div
            key={favorite.id}
            className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <Link to={`/destinations/${favorite.id}`}>
              <div className="relative h-40 overflow-hidden">
                <img
                  src={favorite.image || "/placeholder.jpg"}
                  alt={favorite.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>

            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-blue-900">{favorite.name}</h3>
                  <div className="flex items-center text-gray-600 text-sm mt-1">
                    <MapPin size={14} className="mr-1" />
                    <span>{favorite.country}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(favorite.id)}
                  className="text-gray-400 hover:text-red-500 p-1"
                  aria-label="Supprimer des favoris"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center">
                  <Star size={16} className="text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">
                    {favorite.rating}
                  </span>
                </div>
                <div className="text-blue-700 font-bold">
                  {favorite.price} €
                </div>
              </div>

              <Link
                to={`/destinations/${favorite.id}`}
                className="block mt-3 text-center py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm font-medium"
              >
                Voir détails
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteList;

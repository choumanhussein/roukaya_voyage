// src/components/search/ResultCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Calendar, Star } from "lucide-react";

const ResultCard = ({ item }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="md:flex h-full">
        <div className="md:w-1/3 relative">
          <img
            src={item.image || "/placeholder.jpg"}
            alt={item.title}
            className="h-48 md:h-full w-full object-cover"
          />
          {item.promotion && (
            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-full">
              {item.promotion}
            </div>
          )}
        </div>

        <div className="p-5 md:w-2/3 flex flex-col justify-between">
          <div>
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <MapPin size={14} className="mr-1 text-blue-600" />
              <span>{item.location}</span>
            </div>

            <h3 className="text-xl font-bold text-blue-900 mb-2">
              {item.title}
            </h3>

            <div className="flex items-center mb-3">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < Math.floor(item.rating || 0)
                        ? "text-yellow-500 fill-current"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {item.rating} ({item.reviewCount} avis)
              </span>
            </div>

            <p className="text-gray-600 text-sm mb-4">{item.description}</p>

            <div className="flex items-center text-sm text-gray-600">
              <Calendar size={14} className="mr-1" />
              <span>{item.duration}</span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t">
            <div>
              {item.oldPrice && (
                <span className="text-sm text-gray-500 line-through mr-2">
                  {item.oldPrice} €
                </span>
              )}
              <span className="text-2xl font-bold text-blue-700">
                {item.price} €
              </span>
              <span className="text-sm text-gray-500">/personne</span>
            </div>

            <Link
              to={`/destinations/${item.id}`}
              className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
            >
              Voir détails
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;

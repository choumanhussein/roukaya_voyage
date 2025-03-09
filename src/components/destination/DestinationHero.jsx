// src/components/destination/DestinationHero.jsx
import React from "react";
import { Star, MapPin, Calendar, Heart } from "lucide-react";

const DestinationHero = ({ destination }) => {
  if (!destination) return null;

  return (
    <div className="relative">
      {/* Image de couverture */}
      <div className="h-64 md:h-96 overflow-hidden">
        <img
          src={destination.coverImage || "/placeholder-wide.jpg"}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
      </div>

      {/* Contenu */}
      <div className="container mx-auto px-4">
        <div className="relative -mt-24 md:-mt-32 z-10 text-white pb-8">
          <div className="bg-blue-800/80 backdrop-blur-sm p-6 rounded-t-xl">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end">
              <div>
                <div className="flex items-center text-blue-200 mb-2">
                  <MapPin size={16} className="mr-1" />
                  <span>{destination.country}</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {destination.name}
                </h1>

                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < Math.floor(destination.rating || 0)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-blue-100">
                    {destination.rating} ({destination.reviewCount} avis)
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-3 mt-4 md:mt-0">
                <button className="bg-white/10 hover:bg-white/20 p-2 rounded-full">
                  <Heart size={20} className="text-white" />
                </button>
                <div className="bg-blue-700 px-4 py-2 rounded-lg">
                  <span className="text-sm">à partir de</span>
                  <p className="text-2xl font-bold">{destination.price} €</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationHero;

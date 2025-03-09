// src/components/destination/DestinationOverview.jsx
import React from "react";
import { Check } from "lucide-react";

const DestinationOverview = ({ destination }) => {
  if (!destination) return null;

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">
        À propos de {destination.name}
      </h2>

      <p className="text-gray-700 mb-6">
        {destination.longDescription || destination.description}
      </p>

      {destination.highlights && destination.highlights.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-medium text-blue-800 mb-3">
            Points forts
          </h3>
          <ul className="space-y-2">
            {destination.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <Check
                  size={18}
                  className="text-green-500 mr-2 flex-shrink-0 mt-0.5"
                />
                <span className="text-gray-700">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-medium text-blue-900 mb-1">Meilleure période</h3>
          <p className="text-blue-700">
            {destination.weather?.bestTimeToVisit || "Toute l'année"}
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-medium text-blue-900 mb-1">Durée recommandée</h3>
          <p className="text-blue-700">{destination.duration || "7 jours"}</p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-medium text-blue-900 mb-1">Langue</h3>
          <p className="text-blue-700">
            {destination.practicalInfo?.language ||
              "Information non disponible"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DestinationOverview;

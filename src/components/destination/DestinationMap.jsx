// src/components/destination/DestinationMap.jsx
import React from "react";
import { MapPin } from "lucide-react";

const DestinationMap = ({ location }) => {
  if (!location) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Carte</h2>
        <p className="text-gray-600">
          Informations de localisation non disponibles.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Carte</h2>

      <div className="mb-4 flex items-start">
        <MapPin size={18} className="text-blue-700 mr-2 mt-0.5" />
        <p className="text-gray-700">{location.address}</p>
      </div>

      <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
        {/* Remplacez par une véritable intégration de carte (ex: Google Maps, Leaflet) */}
        <iframe
          title="Carte de la destination"
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${location.latitude},${location.longitude}`}
          loading="lazy"
          className="w-full h-full border-0"
        ></iframe>
      </div>

      <div className="mt-4 text-xs text-gray-500">
        Coordonnées: {location.latitude}, {location.longitude}
      </div>
    </div>
  );
};

export default DestinationMap;

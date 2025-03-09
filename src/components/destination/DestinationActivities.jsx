// src/components/destination/DestinationActivities.jsx
import React from "react";
import { Clock, Tag } from "lucide-react";

const DestinationActivities = ({ activities = [] }) => {
  // Si pas d'activités disponibles
  if (!activities || activities.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Activités</h2>
        <p className="text-gray-600">
          Aucune activité disponible pour cette destination.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Activités</h2>
      <p className="text-gray-600 mb-6">
        Découvrez les activités que nous vous proposons pour enrichir votre
        expérience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="h-40 overflow-hidden">
              <img
                src={activity.image || "/placeholder.jpg"}
                alt={activity.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-blue-900 mb-1">{activity.title}</h3>
              <p className="text-gray-600 text-sm mb-3">
                {activity.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock size={14} className="mr-1" />
                  <span>{activity.duration}</span>
                </div>
                <div className="font-bold text-blue-700">
                  {activity.price} €
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationActivities;

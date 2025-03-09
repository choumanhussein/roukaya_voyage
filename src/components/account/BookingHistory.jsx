// src/components/account/BookingHistory.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  CheckCircle,
  Clock,
  AlertTriangle,
} from "lucide-react";

const BookingHistory = ({ bookings = [] }) => {
  // Fonction pour déterminer le statut visuel
  const getStatusInfo = (status) => {
    switch (status) {
      case "confirmed":
        return {
          icon: <CheckCircle size={16} className="text-green-500" />,
          text: "Confirmée",
          color: "text-green-600 bg-green-50",
        };
      case "pending":
        return {
          icon: <Clock size={16} className="text-yellow-500" />,
          text: "En attente",
          color: "text-yellow-600 bg-yellow-50",
        };
      case "cancelled":
        return {
          icon: <AlertTriangle size={16} className="text-red-500" />,
          text: "Annulée",
          color: "text-red-600 bg-red-50",
        };
      case "completed":
        return {
          icon: <CheckCircle size={16} className="text-blue-500" />,
          text: "Terminée",
          color: "text-blue-600 bg-blue-50",
        };
      default:
        return {
          icon: <Clock size={16} className="text-gray-500" />,
          text: "À venir",
          color: "text-gray-600 bg-gray-50",
        };
    }
  };

  if (!bookings || bookings.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold text-blue-900 mb-6">
          Mes réservations
        </h2>
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">
            Vous n'avez pas encore de réservation.
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

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-blue-900">Mes réservations</h2>
      </div>

      <div className="divide-y">
        {bookings.map((booking) => {
          const statusInfo = getStatusInfo(booking.status);

          return (
            <div
              key={booking.id}
              className="p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex mb-4 md:mb-0">
                  <img
                    src={booking.image || "/placeholder.jpg"}
                    alt={booking.destinationName}
                    className="w-20 h-20 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-blue-900">
                      {booking.destinationName}
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm mt-1">
                      <MapPin size={14} className="mr-1" />
                      <span>{booking.country}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm mt-1">
                      <Calendar size={14} className="mr-1" />
                      <span>
                        {new Date(booking.departureDate).toLocaleDateString()} -{" "}
                        {new Date(booking.returnDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusInfo.color} mb-2`}
                  >
                    {statusInfo.icon}
                    <span className="ml-1">{statusInfo.text}</span>
                  </div>

                  <div className="text-blue-700 font-bold mb-2">
                    {booking.price} €
                  </div>

                  <Link
                    to={`/account/bookings/${booking.id}`}
                    className="text-sm text-blue-700 hover:underline"
                  >
                    Voir les détails
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookingHistory;

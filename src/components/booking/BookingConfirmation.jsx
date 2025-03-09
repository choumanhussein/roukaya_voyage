// src/components/booking/BookingConfirmation.jsx
import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Calendar, MapPin, User } from "lucide-react";

const BookingConfirmation = ({ booking }) => {
  if (!booking) return null;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 bg-green-50 border-b border-green-100 flex items-center">
        <CheckCircle size={24} className="text-green-600 mr-3" />
        <div>
          <h2 className="text-lg font-medium text-green-800">
            Réservation confirmée
          </h2>
          <p className="text-sm text-green-600">
            Un email de confirmation a été envoyé à {booking.contact?.email}
          </p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-blue-900 mb-1">
              Confirmation de réservation
            </h1>
            <p className="text-gray-600">
              N° de réservation:{" "}
              <span className="font-medium">{booking.id}</span>
            </p>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <div className="flex items-center mb-3">
            <MapPin size={18} className="text-blue-700 mr-2" />
            <h3 className="font-medium text-blue-900">Destination</h3>
          </div>
          <div className="flex items-center">
            <img
              src={booking.destination?.image || "/placeholder.jpg"}
              alt={booking.destination?.name}
              className="w-16 h-16 object-cover rounded-lg mr-4"
            />
            <div>
              <p className="font-medium text-gray-900">
                {booking.destination?.name}, {booking.destination?.country}
              </p>
              <p className="text-sm text-gray-600">{booking.duration}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <Calendar size={18} className="text-blue-700 mr-2" />
              <h3 className="font-medium text-blue-900">Dates</h3>
            </div>
            <p className="text-gray-900">
              <span className="font-medium">Départ:</span>{" "}
              {new Date(booking.departureDate).toLocaleDateString()}
            </p>
            <p className="text-gray-900">
              <span className="font-medium">Retour:</span>{" "}
              {new Date(booking.returnDate).toLocaleDateString()}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <User size={18} className="text-blue-700 mr-2" />
              <h3 className="font-medium text-blue-900">Voyageurs</h3>
            </div>
            <p className="text-gray-900">
              {booking.travelers}{" "}
              {booking.travelers > 1 ? "personnes" : "personne"}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Voyageur principal: {booking.contact?.firstName}{" "}
              {booking.contact?.lastName}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="font-medium text-gray-900 mb-4">Actions</h3>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/account/bookings"
              className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Voir mes réservations
            </Link>
            <Link
              to="/contact"
              className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg transition-colors"
            >
              Contacter le service client
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;

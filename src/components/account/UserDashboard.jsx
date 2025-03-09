// src/components/account/UserDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Heart, Settings, CreditCard, MapPin } from "lucide-react";

const UserDashboard = ({ user, stats = {} }) => {
  if (!user) return null;

  // Statistiques par défaut
  const defaultStats = {
    bookingsCount: stats.bookingsCount || 0,
    upcomingTrips: stats.upcomingTrips || 0,
    favoritesCount: stats.favoritesCount || 0,
    reviewsCount: stats.reviewsCount || 0,
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 bg-blue-800 text-white">
        <div className="flex items-center">
          <div className="mr-4">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={`${user.firstName} ${user.lastName}`}
                className="w-16 h-16 rounded-full object-cover"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold">
                {user.firstName?.charAt(0) || ""}
                {user.lastName?.charAt(0) || ""}
              </div>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-bold">Bonjour, {user.firstName}!</h2>
            <p className="text-blue-200">
              Bienvenue dans votre tableau de bord
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Calendar className="h-5 w-5 text-blue-700 mr-2" />
              <h3 className="font-medium text-blue-900">Réservations</h3>
            </div>
            <p className="text-2xl font-bold text-blue-700">
              {defaultStats.bookingsCount}
            </p>
            <p className="text-sm text-blue-600">au total</p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <MapPin className="h-5 w-5 text-green-700 mr-2" />
              <h3 className="font-medium text-green-900">Voyages à venir</h3>
            </div>
            <p className="text-2xl font-bold text-green-700">
              {defaultStats.upcomingTrips}
            </p>
            <p className="text-sm text-green-600">programmés</p>
          </div>

          <div className="bg-red-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Heart className="h-5 w-5 text-red-700 mr-2" />
              <h3 className="font-medium text-red-900">Favoris</h3>
            </div>
            <p className="text-2xl font-bold text-red-700">
              {defaultStats.favoritesCount}
            </p>
            <p className="text-sm text-red-600">destinations</p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-700 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <h3 className="font-medium text-yellow-900">Avis</h3>
            </div>
            <p className="text-2xl font-bold text-yellow-700">
              {defaultStats.reviewsCount}
            </p>
            <p className="text-sm text-yellow-600">partagés</p>
          </div>
        </div>

        {/* Accès rapides */}
        <h3 className="font-bold text-blue-900 mb-4">Accès rapides</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Link
            to="/account/bookings"
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex items-center"
          >
            <Calendar className="h-6 w-6 text-blue-700 mr-3" />
            <div>
              <h4 className="font-medium text-blue-900">Mes réservations</h4>
              <p className="text-sm text-gray-600">Gérer vos voyages</p>
            </div>
          </Link>

          <Link
            to="/account/favorites"
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex items-center"
          >
            <Heart className="h-6 w-6 text-red-600 mr-3" />
            <div>
              <h4 className="font-medium text-blue-900">Mes favoris</h4>
              <p className="text-sm text-gray-600">
                Vos destinations préférées
              </p>
            </div>
          </Link>

          <Link
            to="/account/settings"
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex items-center"
          >
            <Settings className="h-6 w-6 text-gray-600 mr-3" />
            <div>
              <h4 className="font-medium text-blue-900">Paramètres</h4>
              <p className="text-sm text-gray-600">Gérer votre compte</p>
            </div>
          </Link>
        </div>

        {/* Dernière section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Section Paiement */}
          <div className="border border-gray-200 rounded-lg p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-blue-900">Méthodes de paiement</h3>
              <Link
                to="/account/payment-methods"
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Gérer
              </Link>
            </div>

            {user.paymentMethods && user.paymentMethods.length > 0 ? (
              <div className="space-y-3">
                {user.paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-gray-50 rounded-md"
                  >
                    <CreditCard className="h-5 w-5 text-gray-600 mr-3" />
                    <div>
                      <p className="font-medium">
                        {method.cardType} •••• {method.lastFourDigits}
                      </p>
                      <p className="text-sm text-gray-500">
                        Expire {method.expiryMonth}/{method.expiryYear}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 bg-gray-50 rounded-md">
                <CreditCard className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500 mb-3">
                  Aucune méthode de paiement enregistrée
                </p>
                <Link
                  to="/account/payment-methods/add"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
                >
                  Ajouter une carte
                </Link>
              </div>
            )}
          </div>

          {/* Section Voyages récents */}
          <div className="border border-gray-200 rounded-lg p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-blue-900">Voyages récents</h3>
              <Link
                to="/account/trips"
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Voir tout
              </Link>
            </div>

            {user.recentTrips && user.recentTrips.length > 0 ? (
              <div className="space-y-3">
                {user.recentTrips.map((trip, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-gray-50 rounded-md"
                  >
                    <MapPin className="h-5 w-5 text-gray-600 mr-3" />
                    <div className="flex-1">
                      <p className="font-medium">{trip.destination}</p>
                      <p className="text-sm text-gray-500">{trip.dates}</p>
                    </div>
                    <Link
                      to={`/account/trips/${trip.id}`}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      Détails
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 bg-gray-50 rounded-md">
                <MapPin className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500 mb-3">Aucun voyage récent</p>
                <Link
                  to="/search"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
                >
                  Planifier un voyage
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

// src/pages/AccountPage.jsx
// Tableau de bord utilisateur

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import UserProfile from "../components/account/UserProfile";
import BookingHistory from "../components/account/BookingHistory";
import FavoriteList from "../components/account/FavoriteList";
import { getUserBookings } from "../services/bookings";
import { getUserFavorites } from "../services/favorites";
import {
  User,
  Calendar,
  Heart,
  Settings,
  Bell,
  LogOut,
  CreditCard,
  Loader,
} from "lucide-react";

const AccountPage = () => {
  const navigate = useNavigate();
  const { user, logout, loading: authLoading } = useAuth();

  const [activeTab, setActiveTab] = useState("profile");
  const [bookings, setBookings] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Si l'utilisateur n'est pas connecté et le chargement est terminé, rediriger vers la page de connexion
    if (!authLoading && !user) {
      navigate("/login");
      return;
    }

    // Charger les données utilisateur
    const fetchUserData = async () => {
      if (!user) return;

      setLoading(true);
      try {
        // Dans un environnement réel, appelez vos API
        // Ici, nous simulons le chargement avec setTimeout
        setTimeout(() => {
          // Données simulées (à remplacer par des appels API)
          const mockBookings = [
            {
              id: "ROK-12345678",
              destinationId: 1,
              destinationName: "Bali",
              country: "Indonésie",
              image: "/api/placeholder/800/600",
              status: "confirmed",
              departureDate: "2025-06-15",
              returnDate: "2025-06-22",
              duration: "8 jours / 7 nuits",
              price: 2598,
              bookingDate: "2025-02-10T14:30:00Z",
            },
            {
              id: "ROK-87654321",
              destinationId: 2,
              destinationName: "New York",
              country: "États-Unis",
              image: "/api/placeholder/800/600",
              status: "upcoming",
              departureDate: "2025-08-20",
              returnDate: "2025-08-25",
              duration: "6 jours / 5 nuits",
              price: 1899,
              bookingDate: "2025-03-05T09:15:00Z",
            },
            {
              id: "ROK-56781234",
              destinationId: 3,
              destinationName: "Rome",
              country: "Italie",
              image: "/api/placeholder/800/600",
              status: "completed",
              departureDate: "2024-11-10",
              returnDate: "2024-11-15",
              duration: "6 jours / 5 nuits",
              price: 1250,
              bookingDate: "2024-09-20T11:45:00Z",
            },
          ];

          const mockFavorites = [
            {
              id: 1,
              name: "Santorini",
              country: "Grèce",
              image: "/api/placeholder/800/600",
              price: 1499,
              duration: "7 jours / 6 nuits",
              rating: 4.9,
            },
            {
              id: 2,
              name: "Tokyo",
              country: "Japon",
              image: "/api/placeholder/800/600",
              price: 2299,
              duration: "10 jours / 9 nuits",
              rating: 4.8,
            },
            {
              id: 3,
              name: "Marrakech",
              country: "Maroc",
              image: "/api/placeholder/800/600",
              price: 899,
              duration: "5 jours / 4 nuits",
              rating: 4.7,
            },
          ];

          setBookings(mockBookings);
          setFavorites(mockFavorites);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error(
          "Erreur lors du chargement des données utilisateur:",
          error
        );
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user, authLoading, navigate]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
    }
  };

  if (authLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader size={40} className="text-blue-700 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar de navigation */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
              <div className="p-6 bg-blue-700 text-white">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-blue-800 flex items-center justify-center text-xl font-bold">
                    {user.firstName ? user.firstName.charAt(0) : ""}
                    {user.lastName ? user.lastName.charAt(0) : ""}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">
                      {user.firstName} {user.lastName}
                    </h2>
                    <p className="text-blue-200">
                      Membre depuis{" "}
                      {new Date(
                        user.createdAt || "2024-01-01"
                      ).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>

              <nav className="p-4">
                <ul className="space-y-1">
                  <li>
                    <button
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === "profile"
                          ? "bg-blue-50 text-blue-700 font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveTab("profile")}
                    >
                      <User size={20} />
                      <span>Mon profil</span>
                    </button>
                  </li>
                  <li>
                    <button
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === "bookings"
                          ? "bg-blue-50 text-blue-700 font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveTab("bookings")}
                    >
                      <Calendar size={20} />
                      <span>Mes réservations</span>
                      {bookings.length > 0 && (
                        <span className="ml-auto bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                          {bookings.length}
                        </span>
                      )}
                    </button>
                  </li>
                  <li>
                    <button
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === "favorites"
                          ? "bg-blue-50 text-blue-700 font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveTab("favorites")}
                    >
                      <Heart size={20} />
                      <span>Mes favoris</span>
                      {favorites.length > 0 && (
                        <span className="ml-auto bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                          {favorites.length}
                        </span>
                      )}
                    </button>
                  </li>
                  <li>
                    <button
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === "payments"
                          ? "bg-blue-50 text-blue-700 font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveTab("payments")}
                    >
                      <CreditCard size={20} />
                      <span>Moyens de paiement</span>
                    </button>
                  </li>
                  <li>
                    <button
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === "notifications"
                          ? "bg-blue-50 text-blue-700 font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveTab("notifications")}
                    >
                      <Bell size={20} />
                      <span>Notifications</span>
                    </button>
                  </li>
                  <li>
                    <button
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === "settings"
                          ? "bg-blue-50 text-blue-700 font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveTab("settings")}
                    >
                      <Settings size={20} />
                      <span>Paramètres</span>
                    </button>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <LogOut size={20} />
                    <span>Déconnexion</span>
                  </button>
                </div>
              </nav>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
              <h3 className="font-medium text-blue-900 mb-2">
                Besoin d'aide ?
              </h3>
              <p className="text-sm text-blue-700 mb-3">
                Notre service client est disponible 7j/7 pour répondre à vos
                questions.
              </p>
              <Link
                to="/contact"
                className="text-sm font-medium text-blue-700 hover:text-blue-800 flex items-center"
              >
                Contactez-nous
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="md:w-3/4">
            {loading ? (
              <div className="bg-white rounded-xl shadow-md p-8 flex items-center justify-center min-h-[400px]">
                <Loader size={40} className="text-blue-700 animate-spin" />
              </div>
            ) : (
              <>
                {activeTab === "profile" && <UserProfile user={user} />}

                {activeTab === "bookings" && (
                  <BookingHistory bookings={bookings} />
                )}

                {activeTab === "favorites" && (
                  <FavoriteList favorites={favorites} />
                )}

                {activeTab === "payments" && (
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-6 border-b">
                      <h2 className="text-xl font-bold text-blue-900">
                        Moyens de paiement
                      </h2>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-6">
                        Gérez vos cartes de crédit et autres moyens de paiement
                        pour faciliter vos futures réservations.
                      </p>

                      <div className="space-y-4 mb-6">
                        <div className="border rounded-lg p-4 flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="bg-blue-100 rounded-full p-2 mr-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-700"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                />
                              </svg>
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">
                                Visa se terminant par 1234
                              </p>
                              <p className="text-sm text-gray-500">
                                Expire le 12/26
                              </p>
                            </div>
                          </div>
                          <div>
                            <button className="text-gray-400 hover:text-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>

                      <button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                        Ajouter un moyen de paiement
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === "notifications" && (
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-6 border-b">
                      <h2 className="text-xl font-bold text-blue-900">
                        Notifications
                      </h2>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-6">
                        Gérez vos préférences de notifications pour rester
                        informé de nos meilleures offres et de vos réservations.
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">
                              Notifications par email
                            </p>
                            <p className="text-sm text-gray-500">
                              Recevez des mises à jour sur vos réservations
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              defaultChecked
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">
                              Newsletters
                            </p>
                            <p className="text-sm text-gray-500">
                              Offres spéciales et inspirations de voyage
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              defaultChecked
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">
                              Notifications SMS
                            </p>
                            <p className="text-sm text-gray-500">
                              Alertes importantes concernant votre voyage
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">
                              Notifications push
                            </p>
                            <p className="text-sm text-gray-500">
                              Recevez des alertes sur votre appareil mobile
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              defaultChecked
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "settings" && (
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-6 border-b">
                      <h2 className="text-xl font-bold text-blue-900">
                        Paramètres du compte
                      </h2>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Sécurité
                      </h3>

                      <div className="space-y-6">
                        <div>
                          <p className="font-medium text-gray-700 mb-2">
                            Changer de mot de passe
                          </p>
                          <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                            Modifier le mot de passe
                          </button>
                        </div>

                        <div>
                          <p className="font-medium text-gray-700 mb-2">
                            Authentification à deux facteurs
                          </p>
                          <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                            Activer l'authentification à deux facteurs
                          </button>
                          <p className="text-xs text-gray-500 mt-1">
                            Renforce la sécurité de votre compte en ajoutant une
                            couche de protection supplémentaire.
                          </p>
                        </div>

                        <div className="pt-6 border-t border-gray-200">
                          <h3 className="text-lg font-medium text-gray-900 mb-4">
                            Préférences
                          </h3>

                          <div className="space-y-4">
                            <div>
                              <p className="font-medium text-gray-700 mb-2">
                                Langue
                              </p>
                              <select className="w-full max-w-xs p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                                <option value="fr">Français</option>
                                <option value="en">English</option>
                                <option value="es">Español</option>
                                <option value="de">Deutsch</option>
                                <option value="it">Italiano</option>
                              </select>
                            </div>

                            <div>
                              <p className="font-medium text-gray-700 mb-2">
                                Devise
                              </p>
                              <select className="w-full max-w-xs p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                                <option value="eur">Euro (€)</option>
                                <option value="usd">
                                  Dollar américain ($)
                                </option>
                                <option value="gbp">Livre sterling (£)</option>
                                <option value="chf">Franc suisse (CHF)</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="pt-6 border-t border-gray-200">
                          <h3 className="text-lg font-medium text-red-600 mb-4">
                            Zone de danger
                          </h3>

                          <button className="bg-white border border-red-300 hover:bg-red-50 text-red-600 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                            Supprimer mon compte
                          </button>
                          <p className="text-xs text-gray-500 mt-1">
                            Cette action est irréversible et supprimera
                            définitivement toutes vos données.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;

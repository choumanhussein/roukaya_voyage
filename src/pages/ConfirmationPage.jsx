// src/pages/ConfirmationPage.jsx
// Page de confirmation après une réservation réussie

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  Printer,
  Download,
  Share2,
  CheckCircle,
  MapPin,
  Calendar,
  Users,
  Clock,
} from "lucide-react";

const ConfirmationPage = () => {
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler un chargement de réservation
    const timer = setTimeout(() => {
      // Données fictives de réservation (à remplacer par un appel API)
      const mockBooking = {
        id: "ROK-" + Date.now().toString().substr(-8),
        status: "confirmed",
        date: new Date().toISOString(),
        destination: {
          id: 1,
          name: "Bali",
          country: "Indonésie",
          image: "/api/placeholder/800/600",
        },
        departureDate: "2025-06-15",
        returnDate: "2025-06-22",
        duration: "8 jours / 7 nuits",
        travelers: 2,
        price: 2598,
        options: [
          { name: "Pension complète", price: 240 },
          { name: "Assurance annulation", price: 80 },
        ],
        contact: {
          firstName: "Jean",
          lastName: "Dupont",
          email: "jean.dupont@example.com",
          phone: "+33612345678",
        },
        travel: {
          departureCity: "Paris",
          departureTime: "10:25",
          arrivalTime: "14:40",
          airline: "Air France",
          flightNumber: "AF456",
        },
        accommodation: {
          name: "Royal Beach Resort & Spa",
          address: "Jl. Pantai Kuta No.12, Kuta, Bali",
          checkIn: "15:00",
          checkOut: "11:00",
          roomType: "Suite Deluxe Vue Mer",
        },
      };

      setBooking(mockBooking);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement de votre réservation...</p>
        </div>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Réservation non trouvée
        </h2>
        <p className="text-gray-600 mb-6">
          Nous n'avons pas pu trouver les détails de votre réservation.
        </p>
        <Link
          to="/account"
          className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
        >
          Voir mes réservations
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          {/* En-tête avec statut */}
          <div className="bg-green-50 px-6 py-4 flex items-center border-b border-green-100">
            <CheckCircle size={24} className="text-green-600 mr-3" />
            <div>
              <h2 className="text-lg font-medium text-green-800">
                Réservation confirmée
              </h2>
              <p className="text-sm text-green-600">
                Un email de confirmation a été envoyé à {booking.contact.email}
              </p>
            </div>
          </div>

          {/* Contenu principal */}
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
              <div className="flex space-x-2">
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                  <Printer size={20} />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                  <Download size={20} />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Destination */}
              <div className="col-span-2 flex">
                <img
                  src={booking.destination.image}
                  alt={booking.destination.name}
                  className="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <div>
                  <h2 className="text-xl font-bold text-blue-900 mb-1">
                    {booking.destination.name}, {booking.destination.country}
                  </h2>
                  <div className="flex items-center text-gray-600 mb-1">
                    <Calendar size={16} className="mr-2" />
                    <span>
                      Du {new Date(booking.departureDate).toLocaleDateString()}{" "}
                      au {new Date(booking.returnDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users size={16} className="mr-2" />
                    <span>
                      {booking.travelers}{" "}
                      {booking.travelers > 1 ? "voyageurs" : "voyageur"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Prix total */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-700 mb-1">Prix total</p>
                <p className="text-2xl font-bold text-blue-900">
                  {booking.price} €
                </p>
                <p className="text-xs text-blue-600">
                  Payé intégralement le{" "}
                  {new Date(booking.date).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-bold text-blue-900 mb-4">
                Détails du voyage
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Vol aller */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-700 text-white p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11.43a1 1 0 01.725-.962l5-1.429a1 1 0 001.17-1.409l-7-14z" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-gray-900">
                      Vol aller -{" "}
                      {new Date(booking.departureDate).toLocaleDateString()}
                    </h4>
                  </div>

                  <div className="flex justify-between mb-2">
                    <div>
                      <p className="text-xl font-bold text-gray-900">
                        {booking.travel.departureTime}
                      </p>
                      <p className="text-sm text-gray-600">
                        {booking.travel.departureCity}
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-xs text-gray-500">Direct</p>
                      <div className="w-20 h-px bg-gray-300 relative">
                        <div className="absolute -top-1.5 right-0 w-2 h-2 border-t-2 border-r-2 border-gray-300 transform rotate-45"></div>
                      </div>
                      <p className="text-xs text-gray-500">
                        {booking.duration.split("/")[0].trim()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-gray-900">
                        {booking.travel.arrivalTime}
                      </p>
                      <p className="text-sm text-gray-600">
                        {booking.destination.name}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      className="h-4 w-4 mr-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 5H11M19 5H15M5 12H11M19 12H15M5 19H11M19 19H15M13 5V19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>
                      {booking.travel.airline} - {booking.travel.flightNumber}
                    </span>
                  </div>
                </div>

                {/* Hébergement */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-700 text-white p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-gray-900">Hébergement</h4>
                  </div>

                  <p className="font-medium text-gray-900 mb-1">
                    {booking.accommodation.name}
                  </p>
                  <div className="flex items-start mb-2">
                    <MapPin
                      size={16}
                      className="mr-1 text-gray-500 mt-0.5 flex-shrink-0"
                    />
                    <p className="text-sm text-gray-600">
                      {booking.accommodation.address}
                    </p>
                  </div>

                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="text-gray-500">Check-in</p>
                      <p className="font-medium text-gray-900">
                        {booking.accommodation.checkIn}
                      </p>
                      <p className="text-xs text-gray-500">
                        {new Date(booking.departureDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500">Check-out</p>
                      <p className="font-medium text-gray-900">
                        {booking.accommodation.checkOut}
                      </p>
                      <p className="text-xs text-gray-500">
                        {new Date(booking.returnDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Voyageurs et contact */}
              <div className="border-t border-gray-200 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-bold text-blue-900 mb-4">
                    Voyageurs
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium text-gray-900">
                      {booking.contact.firstName} {booking.contact.lastName}
                    </p>
                    <p className="text-sm text-gray-600">
                      {booking.travelers > 1
                        ? "Voyageur principal"
                        : "Voyageur"}
                    </p>

                    {booking.travelers > 1 && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-500">
                          Les informations des autres voyageurs seront à
                          compléter dans votre espace client.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-blue-900 mb-4">
                    Contact d'urgence
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium text-gray-900">
                      {booking.contact.firstName} {booking.contact.lastName}
                    </p>
                    <div className="flex items-center text-gray-600 mt-2">
                      <Mail size={16} className="mr-2" />
                      <span>{booking.contact.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mt-2">
                      <Phone size={16} className="mr-2" />
                      <span>{booking.contact.phone}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Récapitulatif du prix */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold text-blue-900 mb-4">
                  Récapitulatif du prix
                </h3>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Séjour ({booking.travelers}{" "}
                        {booking.travelers > 1 ? "personnes" : "personne"})
                      </span>
                      <span className="text-gray-900">
                        {booking.price -
                          booking.options.reduce(
                            (sum, option) => sum + option.price,
                            0
                          ) *
                            booking.travelers}{" "}
                        €
                      </span>
                    </div>

                    {booking.options.map((option, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-600">
                          {option.name} ({booking.travelers}{" "}
                          {booking.travelers > 1 ? "personnes" : "personne"})
                        </span>
                        <span className="text-gray-900">
                          {option.price * booking.travelers} €
                        </span>
                      </div>
                    ))}

                    <div className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                      <span className="font-medium text-gray-900">Total</span>
                      <span className="font-bold text-blue-700">
                        {booking.price} €
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Politique d'annulation */}
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-lg font-bold text-blue-900 mb-4">
                  Politique d'annulation
                </h3>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <Clock
                      size={18}
                      className="mr-3 text-blue-700 mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <p className="text-blue-800 mb-1">Annulation flexible</p>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>
                          • Annulation gratuite jusqu'à 30 jours avant le départ
                        </li>
                        <li>
                          • 50% de frais d'annulation entre 30 et 15 jours avant
                          le départ
                        </li>
                        <li>
                          • 100% de frais d'annulation à moins de 15 jours du
                          départ
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="border-t border-gray-200 pt-6 mt-6 flex flex-col md:flex-row gap-4">
                <Link
                  to="/account/bookings"
                  className="px-6 py-3 bg-blue-700 text-white rounded-lg font-medium text-center hover:bg-blue-800 transition-colors"
                >
                  Voir toutes mes réservations
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-white border border-blue-700 text-blue-700 rounded-lg font-medium text-center hover:bg-blue-50 transition-colors"
                >
                  Contacter le service client
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Suggestions */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-4">
            Vous pourriez aussi aimer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={`/api/placeholder/${800 + item}/${600 + item}`}
                    alt="Destination"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-blue-900 mb-1">
                    Destination populaire {item}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-blue-700 font-medium">
                      à partir de {999 + item * 100} €
                    </p>
                    <Link
                      to={`/destinations/${item}`}
                      className="text-sm text-blue-700 hover:underline"
                    >
                      Voir plus
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold text-blue-900">
              Questions fréquentes
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Comment puis-je modifier ma réservation ?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                  Pour modifier votre réservation, connectez-vous à votre compte
                  et accédez à la section "Mes réservations". Selon la nature de
                  la modification, certains changements peuvent entraîner des
                  frais supplémentaires. N'hésitez pas à contacter notre service
                  client pour toute assistance.
                </p>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    Quels documents dois-je apporter lors de mon voyage ?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                  Vous devez toujours voyager avec un passeport valide (6 mois
                  après votre retour), votre billet d'avion, et la confirmation
                  de réservation. Selon la destination, un visa ou d'autres
                  documents peuvent être nécessaires. Consultez les informations
                  spécifiques à votre destination dans votre espace client.
                </p>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    Comment puis-je contacter le service client en cas d'urgence
                    ?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                  Notre service client est disponible 24h/24 et 7j/7 pour les
                  urgences au +33 1 23 45 67 89. Pour les questions non
                  urgentes, vous pouvez nous contacter par email à
                  support@roukaya-voyage.com ou via le formulaire de contact sur
                  notre site web.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;

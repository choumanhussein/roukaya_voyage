// src/pages/CheckoutPage.jsx
// Page de paiement et finalisation de la réservation

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useAuth } from "../hooks/useAuth";
import PaymentForm from "../components/booking/PaymentForm";
import { ArrowLeft, CreditCard, CheckCircle } from "lucide-react";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, totalPrice, clearCart } = useCart();
  const { user } = useAuth();

  const [paymentStep, setPaymentStep] = useState("details"); // details, processing, success, error
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [paymentError, setPaymentError] = useState(null);

  // Informations de contact (pré-remplies avec les données de l'utilisateur si connecté)
  const [contactInfo, setContactInfo] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
    city: user?.city || "",
    postalCode: user?.postalCode || "",
    country: user?.country || "",
  });

  // Si le panier est vide, rediriger vers la page d'accueil
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="bg-white rounded-xl shadow-md p-8 text-center max-w-md mx-auto">
            <div className="text-gray-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Votre panier est vide
            </h3>
            <p className="text-gray-600 mb-6">
              Vous n'avez pas encore ajouté de voyages à votre panier.
            </p>
            <Link
              to="/search"
              className="inline-flex items-center justify-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
            >
              Découvrir nos voyages
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentSubmit = async (paymentData) => {
    setPaymentStep("processing");

    try {
      // Simuler un appel API de paiement
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simuler un paiement réussi (à remplacer par un vrai appel API)
      setPaymentStep("success");

      // Vider le panier après un paiement réussi
      setTimeout(() => {
        clearCart();
        navigate("/confirmation");
      }, 3000);
    } catch (error) {
      setPaymentError(
        "Une erreur est survenue lors du traitement du paiement. Veuillez réessayer."
      );
      setPaymentStep("error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Retour aux réservations */}
        {paymentStep === "details" && (
          <Link
            to="/cart"
            className="inline-flex items-center text-blue-700 hover:text-blue-800 mb-6"
          >
            <ArrowLeft size={18} className="mr-2" />
            Retour au panier
          </Link>
        )}

        <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
          {paymentStep === "success"
            ? "Paiement confirmé"
            : "Finaliser votre réservation"}
        </h1>

        {paymentStep === "success" ? (
          <div className="bg-white rounded-xl shadow-md p-8 text-center max-w-2xl mx-auto">
            <div className="text-green-500 mb-6">
              <CheckCircle size={64} className="mx-auto" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Merci pour votre réservation !
            </h2>
            <p className="text-gray-600 mb-6">
              Votre paiement a été traité avec succès. Vous recevrez
              prochainement un email de confirmation avec tous les détails de
              votre voyage.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Référence de réservation:{" "}
              <span className="font-medium">
                ROK-{Date.now().toString().substr(-8)}
              </span>
            </p>
            <div className="space-y-3">
              <Link
                to="/confirmation"
                className="block w-full bg-blue-700 hover:bg-blue-800 text-white py-3 px-4 rounded-lg font-medium text-center transition-colors"
              >
                Voir les détails de ma réservation
              </Link>
              <Link
                to="/"
                className="block w-full bg-white hover:bg-gray-50 text-gray-700 py-3 px-4 rounded-lg font-medium text-center transition-colors border border-gray-300"
              >
                Retour à l'accueil
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Formulaire de paiement */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-bold text-blue-900">
                    Vos informations de contact
                  </h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Prénom
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={contactInfo.firstName}
                        onChange={handleContactChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nom
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={contactInfo.lastName}
                        onChange={handleContactChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={contactInfo.email}
                        onChange={handleContactChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={contactInfo.phone}
                        onChange={handleContactChange}
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Adresse
                      </label>
                      <input
                        type="text"
                        name="address"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={contactInfo.address}
                        onChange={handleContactChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Ville
                      </label>
                      <input
                        type="text"
                        name="city"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={contactInfo.city}
                        onChange={handleContactChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Code postal
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={contactInfo.postalCode}
                        onChange={handleContactChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Pays
                      </label>
                      <select
                        name="country"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={contactInfo.country}
                        onChange={handleContactChange}
                        required
                      >
                        <option value="">Sélectionnez un pays</option>
                        <option value="FR">France</option>
                        <option value="BE">Belgique</option>
                        <option value="CH">Suisse</option>
                        <option value="CA">Canada</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MC">Monaco</option>
                        {/* Ajoutez d'autres pays selon vos besoins */}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-bold text-blue-900">Paiement</h2>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      Choisissez votre mode de paiement
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div
                        className={`border rounded-lg p-4 cursor-pointer flex items-center ${
                          paymentMethod === "card"
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-300 hover:border-blue-300"
                        }`}
                        onClick={() => setPaymentMethod("card")}
                      >
                        <div className="w-6 h-6 mr-3 flex-shrink-0">
                          <input
                            type="radio"
                            checked={paymentMethod === "card"}
                            onChange={() => setPaymentMethod("card")}
                            className="w-full h-full"
                          />
                        </div>
                        <div className="flex items-center">
                          <CreditCard
                            size={20}
                            className="mr-2 text-blue-700"
                          />
                          <span>Carte bancaire</span>
                        </div>
                      </div>

                      <div
                        className={`border rounded-lg p-4 cursor-pointer flex items-center ${
                          paymentMethod === "paypal"
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-300 hover:border-blue-300"
                        }`}
                        onClick={() => setPaymentMethod("paypal")}
                      >
                        <div className="w-6 h-6 mr-3 flex-shrink-0">
                          <input
                            type="radio"
                            checked={paymentMethod === "paypal"}
                            onChange={() => setPaymentMethod("paypal")}
                            className="w-full h-full"
                          />
                        </div>
                        <div className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.5 8.25H18C18.1422 9.20942 18.2812 10.1747 18.375 11.25C18.5113 12.674 17.9171 14.0707 16.2 14.625C15.2533 14.8772 14.3066 15.0025 13.5 15C12.8626 14.9975 12.1175 15 11.25 15H10.5L9.75 20.25H7.5L8.25 15H4.5L6 5.25H12.75C14.8177 5.25 16.2425 5.91975 17.025 7.125M19.5 8.25C20.7322 8.25 21.8338 9.10285 21.9933 10.3266L22.0062 10.5C22.0062 10.5 22.5 13.5 22.5 14.25C22.5 15 22.067 16.125 20.625 16.125C19.183 16.125 18.375 15 18.375 15M19.5 8.25V6.75C19.5 5.25 18.4955 3.75 16.125 3.75C14.3677 3.75 12.75 3.75 12.75 3.75M2.25 7.5L3.75 1.5L6.75 2.25L5.25 8.25"
                              stroke="#0070BA"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>PayPal</span>
                        </div>
                      </div>

                      <div
                        className={`border rounded-lg p-4 cursor-pointer flex items-center ${
                          paymentMethod === "bank"
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-300 hover:border-blue-300"
                        }`}
                        onClick={() => setPaymentMethod("bank")}
                      >
                        <div className="w-6 h-6 mr-3 flex-shrink-0">
                          <input
                            type="radio"
                            checked={paymentMethod === "bank"}
                            onChange={() => setPaymentMethod("bank")}
                            className="w-full h-full"
                          />
                        </div>
                        <div className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.25 8.25H21.75M2.25 9H21.75M5.25 14.25H11.25M5.25 16.5H8.25M4.5 19.5H19.5C20.0967 19.5 20.669 19.2629 21.091 18.841C21.5129 18.419 21.75 17.8467 21.75 17.25V6.75C21.75 6.15326 21.5129 5.58097 21.091 5.15901C20.669 4.73705 20.0967 4.5 19.5 4.5H4.5C3.90326 4.5 3.33097 4.73705 2.90901 5.15901C2.48705 5.58097 2.25 6.15326 2.25 6.75V17.25C2.25 17.8467 2.48705 18.419 2.90901 18.841C3.33097 19.2629 3.90326 19.5 4.5 19.5Z"
                              stroke="#6B7280"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>Virement</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {paymentMethod === "card" && (
                    <div>
                      <PaymentForm
                        onSubmit={handlePaymentSubmit}
                        isProcessing={paymentStep === "processing"}
                        error={paymentError}
                      />
                    </div>
                  )}

                  {paymentMethod === "paypal" && (
                    <div className="text-center py-6">
                      <p className="text-gray-600 mb-4">
                        Vous allez être redirigé vers PayPal pour finaliser
                        votre paiement.
                      </p>
                      <button
                        className="bg-[#0070BA] hover:bg-[#005ea6] text-white py-3 px-6 rounded-lg font-medium transition-colors"
                        onClick={() => handlePaymentSubmit({})}
                        disabled={paymentStep === "processing"}
                      >
                        {paymentStep === "processing" ? (
                          <span className="flex items-center justify-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Redirection...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            <svg
                              className="w-5 h-5 mr-2"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.5 8.25H18C18.1422 9.20942 18.2812 10.1747 18.375 11.25C18.5113 12.674 17.9171 14.0707 16.2 14.625C15.2533 14.8772 14.3066 15.0025 13.5 15C12.8626 14.9975 12.1175 15 11.25 15H10.5L9.75 20.25H7.5L8.25 15H4.5L6 5.25H12.75C14.8177 5.25 16.2425 5.91975 17.025 7.125M19.5 8.25C20.7322 8.25 21.8338 9.10285 21.9933 10.3266L22.0062 10.5C22.0062 10.5 22.5 13.5 22.5 14.25C22.5 15 22.067 16.125 20.625 16.125C19.183 16.125 18.375 15 18.375 15M19.5 8.25V6.75C19.5 5.25 18.4955 3.75 16.125 3.75C14.3677 3.75 12.75 3.75 12.75 3.75M2.25 7.5L3.75 1.5L6.75 2.25L5.25 8.25"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            Payer avec PayPal
                          </span>
                        )}
                      </button>
                    </div>
                  )}

                  {paymentMethod === "bank" && (
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-900 mb-3">
                        Informations de virement bancaire
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Veuillez effectuer votre virement aux coordonnées
                        bancaires suivantes:
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">
                            Bénéficiaire:
                          </span>
                          <span>Roukaya Voyage SARL</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">
                            IBAN:
                          </span>
                          <span>FR76 3000 6000 0123 4567 8900 123</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">
                            BIC:
                          </span>
                          <span>AGRIFRPP123</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">
                            Référence:
                          </span>
                          <span>ROK-{Date.now().toString().substr(-8)}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">
                        Veuillez noter que votre réservation ne sera confirmée
                        qu'après réception du paiement. Le délai de traitement
                        peut prendre jusqu'à 3 jours ouvrables.
                      </p>
                      <button
                        className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 px-4 rounded-lg font-medium transition-colors"
                        onClick={() => handlePaymentSubmit({})}
                        disabled={paymentStep === "processing"}
                      >
                        {paymentStep === "processing" ? (
                          <span className="flex items-center justify-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Traitement...
                          </span>
                        ) : (
                          "Confirmer la réservation"
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Récapitulatif de la commande */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-24">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-bold text-blue-900">
                    Récapitulatif
                  </h2>
                </div>

                <div className="p-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex mb-4 pb-4 border-b border-gray-100"
                    >
                      <img
                        src={item.image}
                        alt={item.destinationName}
                        className="w-20 h-20 object-cover rounded-lg mr-4"
                      />
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {item.destinationName}
                        </h3>
                        <p className="text-sm text-gray-600">{item.duration}</p>
                        <p className="text-sm text-gray-600">
                          Voyageurs: {item.travelers}
                        </p>
                        <p className="text-sm text-blue-700 font-medium">
                          {item.price} €
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sous-total</span>
                      <span className="text-gray-900">{totalPrice} €</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Taxes</span>
                      <span className="text-gray-900">Incluses</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                      <span className="font-medium text-gray-900">Total</span>
                      <span className="font-bold text-blue-700">
                        {totalPrice} €
                      </span>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <h3 className="font-medium text-blue-900 mb-2">
                      Informations importantes
                    </h3>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Prix garantis jusqu'à la confirmation</li>
                      <li>
                        • Annulation gratuite jusqu'à 30 jours avant le départ
                      </li>
                      <li>• Support client disponible 24/7</li>
                    </ul>
                  </div>

                  <div className="text-center text-sm text-gray-500">
                    En finalisant votre réservation, vous acceptez nos{" "}
                    <Link to="/terms" className="text-blue-700 hover:underline">
                      conditions générales
                    </Link>{" "}
                    et notre{" "}
                    <Link
                      to="/privacy"
                      className="text-blue-700 hover:underline"
                    >
                      politique de confidentialité
                    </Link>
                    .
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;

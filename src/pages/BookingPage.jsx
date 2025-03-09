// src/pages/BookingPage.jsx
// Page de réservation

import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getDestinationById } from "../services/destinations";
import BookingForm from "../components/booking/BookingForm";
import BookingSummary from "../components/booking/BookingSummary";
import { useCart } from "../hooks/useCart";
import { useAuth } from "../hooks/useAuth";
import { Loader, ArrowLeft, AlertCircle } from "lucide-react";

const BookingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addItem } = useCart();

  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    travelers: 2,
    departureDate: "",
    returnDate: "",
    rooms: 1,
    options: [],
    specialRequests: "",
  });

  // Étapes de réservation
  const [currentStep, setCurrentStep] = useState(1);
  const [steps] = useState([
    { id: 1, name: "Détails du voyage" },
    { id: 2, name: "Informations voyageurs" },
    { id: 3, name: "Récapitulatif" },
  ]);

  useEffect(() => {
    const fetchDestination = async () => {
      setLoading(true);
      try {
        // Simuler un appel API
        setTimeout(() => {
          // Données simulées (à remplacer par un appel API réel)
          const mockDestination = {
            id: id,
            name: "Bali",
            country: "Indonésie",
            description:
              "Île paradisiaque d'Indonésie, Bali est réputée pour ses rizières en terrasses, ses plages magnifiques et ses temples sacrés.",
            image: "/api/placeholder/800/600",
            price: 1299,
            oldPrice: 1599,
            currency: "EUR",
            rating: 4.8,
            reviewCount: 645,
            duration: "8 jours / 7 nuits",
            departureCity: "Paris",
            inclusions: [
              "Vols aller-retour",
              "Hébergement en hôtel 4★",
              "Petit-déjeuner inclus",
              "Transferts aéroport",
              "Guide francophone",
            ],
            options: [
              {
                id: 1,
                name: "Pension complète",
                price: 240,
                description: "Tous les repas inclus pendant votre séjour",
              },
              {
                id: 2,
                name: "Excursions guidées",
                price: 180,
                description: "Pack de 3 excursions avec guide local",
              },
              {
                id: 3,
                name: "Assurance annulation",
                price: 80,
                description: "Remboursement en cas d'annulation",
              },
              {
                id: 4,
                name: "Transfert privé",
                price: 60,
                description: "Véhicule privé pour vos transferts",
              },
            ],
            availableDates: [
              { date: "2025-04-15", price: 1299 },
              { date: "2025-05-10", price: 1349 },
              { date: "2025-06-05", price: 1399 },
              { date: "2025-07-20", price: 1499 },
              { date: "2025-08-15", price: 1549 },
            ],
          };

          setDestination(mockDestination);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Erreur lors du chargement de la destination:", error);
        setError("Impossible de charger les informations de la destination.");
        setLoading(false);
      }
    };

    fetchDestination();
  }, [id]);

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleAddToCart = () => {
    // Calculer le prix total avec les options
    const optionsTotal = formData.options.reduce((sum, optionId) => {
      const option = destination.options.find((opt) => opt.id === optionId);
      return sum + (option ? option.price : 0);
    }, 0);

    const totalPrice = (destination.price + optionsTotal) * formData.travelers;

    // Créer l'objet de réservation
    const bookingItem = {
      id: `booking-${Date.now()}`,
      destinationId: destination.id,
      destinationName: destination.name,
      image: destination.image,
      price: totalPrice,
      basePrice: destination.price,
      travelers: formData.travelers,
      departureDate: formData.departureDate,
      returnDate: formData.returnDate,
      duration: destination.duration,
      options: formData.options.map((optionId) => {
        const option = destination.options.find((opt) => opt.id === optionId);
        return option;
      }),
      specialRequests: formData.specialRequests,
    };

    // Ajouter au panier
    addItem(bookingItem);

    // Rediriger vers le checkout
    navigate("/checkout");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader size={40} className="text-blue-700 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Erreur</h2>
        <p className="text-gray-600 mb-6">{error}</p>
        <Link
          to="/"
          className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
        >
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Destination non trouvée
        </h2>
        <p className="text-gray-600 mb-6">
          La destination que vous recherchez n'existe pas ou a été supprimée.
        </p>
        <Link
          to="/search"
          className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
        >
          Parcourir nos destinations
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Retour à la page précédente */}
        <Link
          to={`/destinations/${id}`}
          className="inline-flex items-center text-blue-700 hover:text-blue-800 mb-6"
        >
          <ArrowLeft size={18} className="mr-2" />
          Retour aux détails de la destination
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
          Réservez votre voyage à {destination.name}
        </h1>
        <p className="text-gray-600 mb-8">
          Complétez les détails ci-dessous pour réserver votre voyage de rêve
        </p>

        {/* Indicateur d'étapes */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      currentStep > step.id
                        ? "bg-green-500 text-white"
                        : currentStep === step.id
                        ? "bg-blue-700 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      step.id
                    )}
                  </div>
                  <p
                    className={`mt-2 text-sm ${
                      currentStep === step.id
                        ? "text-blue-700 font-medium"
                        : "text-gray-500"
                    }`}
                  >
                    {step.name}
                  </p>
                </div>

                {i < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      currentStep > step.id ? "bg-green-500" : "bg-gray-200"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {!user && currentStep === 2 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-center">
            <AlertCircle
              size={20}
              className="text-blue-700 mr-3 flex-shrink-0"
            />
            <div>
              <p className="text-blue-800 font-medium">
                Vous n'êtes pas connecté
              </p>
              <p className="text-blue-700 text-sm">
                <Link to="/login" className="underline font-medium">
                  Connectez-vous
                </Link>{" "}
                ou{" "}
                <Link to="/register" className="underline font-medium">
                  créez un compte
                </Link>{" "}
                pour faciliter votre réservation et accéder à votre historique.
              </p>
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Formulaire de réservation */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <BookingForm
                currentStep={currentStep}
                destination={destination}
                formData={formData}
                onChange={handleChange}
                onNext={handleNext}
                onBack={handleBack}
                onSubmit={handleAddToCart}
              />
            </div>
          </div>

          {/* Récapitulatif de la réservation */}
          <div className="lg:w-1/3">
            <BookingSummary
              destination={destination}
              formData={formData}
              currentStep={currentStep}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;

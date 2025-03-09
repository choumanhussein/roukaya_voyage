// src/components/booking/BookingForm.jsx
import React from "react";
import { User, Calendar, Users, Home, CreditCard } from "lucide-react";

const BookingForm = ({
  currentStep,
  destination,
  formData,
  onChange,
  onNext,
  onBack,
  onSubmit,
}) => {
  const handleChange = (name, value) => {
    onChange(name, value);
  };

  const handleSelectOption = (optionId) => {
    const options = formData.options || [];
    const index = options.indexOf(optionId);

    if (index >= 0) {
      // Remove option
      const newOptions = [...options];
      newOptions.splice(index, 1);
      handleChange("options", newOptions);
    } else {
      // Add option
      handleChange("options", [...options, optionId]);
    }
  };

  return (
    <div className="p-6">
      {currentStep === 1 && (
        <>
          <h2 className="text-xl font-bold text-blue-900 mb-4">
            Détails du voyage
          </h2>

          <div className="space-y-6">
            {/* Choix des dates */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date de départ
              </label>
              <div className="relative">
                <Calendar
                  size={16}
                  className="absolute left-3 top-3 text-gray-400"
                />
                <select
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg"
                  value={formData.departureDate || ""}
                  onChange={(e) =>
                    handleChange("departureDate", e.target.value)
                  }
                >
                  <option value="">Sélectionnez une date</option>
                  {destination.availableDates?.map((date, index) => (
                    <option key={index} value={date.date}>
                      {new Date(date.date).toLocaleDateString()} - {date.price}€
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Nombre de voyageurs */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre de voyageurs
              </label>
              <div className="relative">
                <Users
                  size={16}
                  className="absolute left-3 top-3 text-gray-400"
                />
                <select
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg"
                  value={formData.travelers || 2}
                  onChange={(e) =>
                    handleChange("travelers", parseInt(e.target.value))
                  }
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} voyageur{num > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Options */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3">
                Options supplémentaires
              </h3>
              <div className="space-y-3">
                {destination.options?.map((option) => (
                  <div
                    key={option.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      (formData.options || []).includes(option.id)
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                    onClick={() => handleSelectOption(option.id)}
                  >
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {option.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {option.description}
                        </p>
                      </div>
                      <div className="font-bold text-blue-700">
                        +{option.price}€
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={onNext}
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg"
              >
                Continuer
              </button>
            </div>
          </div>
        </>
      )}

      {currentStep === 2 && (
        <>
          <h2 className="text-xl font-bold text-blue-900 mb-4">
            Informations voyageurs
          </h2>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prénom
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Votre prénom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Votre numéro de téléphone"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Demandes spéciales (optionnel)
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-lg"
                rows="3"
                placeholder="Régime alimentaire, mobilité réduite, etc."
                value={formData.specialRequests || ""}
                onChange={(e) =>
                  handleChange("specialRequests", e.target.value)
                }
              ></textarea>
            </div>

            <div className="flex justify-between">
              <button
                onClick={onBack}
                className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50"
              >
                Retour
              </button>
              <button
                onClick={onNext}
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg"
              >
                Continuer
              </button>
            </div>
          </div>
        </>
      )}

      {currentStep === 3 && (
        <>
          <h2 className="text-xl font-bold text-blue-900 mb-4">
            Récapitulatif et confirmation
          </h2>

          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">Votre voyage</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Destination:</span>
                  <span className="font-medium">
                    {destination.name}, {destination.country}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">
                    {formData.departureDate
                      ? new Date(formData.departureDate).toLocaleDateString()
                      : "Non sélectionnée"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Voyageurs:</span>
                  <span className="font-medium">{formData.travelers}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">
                Conditions générales
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600 h-32 overflow-auto mb-2">
                <p>
                  En finalisant cette réservation, vous acceptez nos conditions
                  générales de vente et notre politique de confidentialité.
                </p>
                <p className="mt-2">
                  Vous disposez d'un droit d'annulation gratuite jusqu'à 30
                  jours avant le départ.
                </p>
              </div>
              <label className="flex items-start">
                <input type="checkbox" className="mt-1 mr-2" required />
                <span className="text-sm text-gray-700">
                  J'accepte les conditions générales et la politique de
                  confidentialité
                </span>
              </label>
            </div>

            <div className="flex justify-between">
              <button
                onClick={onBack}
                className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50"
              >
                Retour
              </button>
              <button
                onClick={onSubmit}
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg"
              >
                Passer au paiement
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BookingForm;

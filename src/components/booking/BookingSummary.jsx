// src/components/booking/BookingSummary.jsx
import React, { useMemo } from "react";

const BookingSummary = ({ destination, formData }) => {
  // Calculer le prix total
  const totalPrice = useMemo(() => {
    if (!destination || !formData) return 0;

    // Prix de base par personne
    let basePrice = destination.price;

    // Ajouter les options sélectionnées
    const optionsTotal = (formData.options || []).reduce((sum, optionId) => {
      const option = destination.options?.find((opt) => opt.id === optionId);
      return sum + (option ? option.price : 0);
    }, 0);

    // Multiplier par le nombre de voyageurs
    return (basePrice + optionsTotal) * (formData.travelers || 1);
  }, [destination, formData]);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-blue-900">Récapitulatif</h2>
      </div>

      <div className="p-6">
        <div className="flex mb-4">
          <img
            src={destination?.image || "/placeholder.jpg"}
            alt={destination?.name}
            className="w-20 h-20 object-cover rounded-lg mr-4"
          />
          <div>
            <h3 className="font-medium text-gray-900">{destination?.name}</h3>
            <p className="text-sm text-gray-600">{destination?.duration}</p>
            <p className="text-sm text-blue-700 font-medium">
              {destination?.price} € / personne
            </p>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600">
              Séjour ({formData?.travelers || 1}{" "}
              {formData?.travelers > 1 ? "personnes" : "personne"})
            </span>
            <span className="text-gray-900">
              {destination?.price * (formData?.travelers || 1)} €
            </span>
          </div>

          {(formData?.options || []).map((optionId) => {
            const option = destination?.options?.find(
              (opt) => opt.id === optionId
            );
            if (!option) return null;

            return (
              <div key={optionId} className="flex justify-between">
                <span className="text-gray-600">{option.name}</span>
                <span className="text-gray-900">
                  {option.price * (formData?.travelers || 1)} €
                </span>
              </div>
            );
          })}

          <div className="flex justify-between border-t border-gray-200 pt-2 mt-2">
            <span className="font-medium text-gray-900">Total</span>
            <span className="font-bold text-blue-700">{totalPrice} €</span>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h3 className="font-medium text-blue-900 mb-2">
            Informations importantes
          </h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Prix garantis jusqu'à la confirmation</li>
            <li>• Annulation gratuite jusqu'à 30 jours avant le départ</li>
            <li>• Support client disponible 24/7</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;

// src/components/booking/PaymentForm.jsx
import React, { useState } from "react";
import { CreditCard, Calendar, Lock } from "lucide-react";

const PaymentForm = ({ onSubmit, isProcessing, error }) => {
  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(cardData);
  };

  // Format card number with spaces
  const formatCardNumber = (value) => {
    return value
      .replace(/\s/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nom sur la carte
          </label>
          <input
            type="text"
            name="cardName"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Nom du titulaire"
            value={cardData.cardName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Numéro de carte
          </label>
          <div className="relative">
            <CreditCard
              size={18}
              className="absolute left-3 top-3.5 text-gray-400"
            />
            <input
              type="text"
              name="cardNumber"
              className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="1234 5678 9012 3456"
              value={cardData.cardNumber}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "").slice(0, 16);
                handleChange({
                  target: {
                    name: "cardNumber",
                    value: formatCardNumber(value),
                  },
                });
              }}
              maxLength={19}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date d'expiration
            </label>
            <div className="relative">
              <Calendar
                size={18}
                className="absolute left-3 top-3.5 text-gray-400"
              />
              <input
                type="text"
                name="expiry"
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="MM/AA"
                value={cardData.expiry}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, "").slice(0, 4);
                  if (value.length > 2) {
                    value = value.slice(0, 2) + "/" + value.slice(2);
                  }
                  handleChange({
                    target: { name: "expiry", value },
                  });
                }}
                maxLength={5}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CVC
            </label>
            <div className="relative">
              <Lock
                size={18}
                className="absolute left-3 top-3.5 text-gray-400"
              />
              <input
                type="text"
                name="cvc"
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="123"
                value={cardData.cvc}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 3);
                  handleChange({
                    target: { name: "cvc", value },
                  });
                }}
                maxLength={3}
                required
              />
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Lock size={18} className="text-green-700 mr-2" />
          <span className="text-sm text-gray-600">Paiement sécurisé</span>
        </div>
        <div className="flex space-x-2">
          <img src="/visa.png" alt="Visa" className="h-6" />
          <img src="/mastercard.png" alt="Mastercard" className="h-6" />
          <img src="/amex.png" alt="American Express" className="h-6" />
        </div>
      </div>

      <button
        type="submit"
        disabled={isProcessing}
        className="w-full bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-lg font-medium transition-colors"
      >
        {isProcessing ? (
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
            Traitement en cours...
          </span>
        ) : (
          "Payer maintenant"
        )}
      </button>
    </form>
  );
};

export default PaymentForm;

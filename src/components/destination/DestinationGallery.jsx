// src/components/destination/DestinationGallery.jsx
import React, { useState } from "react";
import { X } from "lucide-react";

const DestinationGallery = ({ gallery = [] }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Si pas d'images dans la galerie
  if (!gallery || gallery.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Galerie</h2>
        <p className="text-gray-600">
          Aucune image disponible pour cette destination.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Galerie</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {gallery.map((image, index) => (
          <div
            key={index}
            className="relative h-40 md:h-64 overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image || "/placeholder.jpg"}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal d'affichage plein écran */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <button
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          <img
            src={selectedImage}
            alt="Vue élargie"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default DestinationGallery;

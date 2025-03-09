import React, { useState, useEffect } from "react";
import {
  Plane,
  Search,
  MapPin,
  Calendar,
  Users,
  ChevronRight,
} from "lucide-react";
import logo from "../../image/roukaya.png";

// Animation du fond avec des particules inspirées du logo
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900 to-blue-800 opacity-90"></div>
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-40"></div>
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-400 opacity-20"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Composant principal Hero Section
const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("flights");
  const [searchVisible, setSearchVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
        {/* Logo et titre */}
        <div className="mb-8 transform transition-all duration-1000 translate-y-0 opacity-100">
          <img src={logo} alt="Roukaya Voyage" className="h-20 mb-4 mx-auto" />
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-2">
            Découvrez le monde avec
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-300 text-center mb-8">
            Roukaya Voyage
          </h2>
          <p className="text-xl text-white text-center max-w-2xl mx-auto">
            Des expériences de voyage uniques et personnalisées pour réaliser
            vos rêves d'évasion
          </p>
        </div>

        {/* Barre de recherche */}
        <div
          className={`w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-1000 transform ${
            searchVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* Onglets */}
          <div className="flex border-b">
            <button
              className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 font-medium transition-all ${
                activeTab === "flights"
                  ? "text-blue-700 border-b-2 border-blue-700"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab("flights")}
            >
              <Plane size={20} />
              <span>Vols</span>
            </button>
            <button
              className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 font-medium transition-all ${
                activeTab === "hotels"
                  ? "text-blue-700 border-b-2 border-blue-700"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab("hotels")}
            >
              <Search size={20} />
              <span>Hôtels</span>
            </button>
            <button
              className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 font-medium transition-all ${
                activeTab === "packages"
                  ? "text-blue-700 border-b-2 border-blue-700"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab("packages")}
            >
              <Users size={20} />
              <span>Séjours</span>
            </button>
          </div>

          {/* Formulaire de recherche */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Départ
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ville de départ"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10"
                  />
                  <MapPin
                    className="absolute left-3 top-3.5 text-blue-600"
                    size={18}
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Destination
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Où allez-vous ?"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10"
                  />
                  <MapPin
                    className="absolute left-3 top-3.5 text-blue-600"
                    size={18}
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Dates
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Sélectionnez vos dates"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10"
                  />
                  <Calendar
                    className="absolute left-3 top-3.5 text-blue-600"
                    size={18}
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Voyageurs
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="1 adulte"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10"
                  />
                  <Users
                    className="absolute left-3 top-3.5 text-blue-600"
                    size={18}
                  />
                </div>
              </div>
            </div>

            <button className="w-full mt-4 bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.02]">
              <span>Rechercher</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Statistiques */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {[
            { count: "500+", label: "Destinations" },
            { count: "10,000+", label: "Clients satisfaits" },
            { count: "24/7", label: "Assistance voyage" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center transform transition-all duration-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-2xl font-bold text-white">{stat.count}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center animate-bounce">
        <span className="text-sm mb-2">Découvrir</span>
        <ChevronRight size={24} className="transform rotate-90" />
      </div>
    </div>
  );
};

export default HeroSection;

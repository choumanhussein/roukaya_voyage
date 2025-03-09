import React, { useState, useEffect, useRef } from "react";
import {
  Plane,
  Search,
  MapPin,
  Calendar,
  Users,
  ChevronRight,
  Bed,
  Star,
  Coffee,
  Palmtree,
  Globe,
  CreditCard,
  ArrowRight,
  CloudSun,
  Moon,
  Wind,
} from "lucide-react";
import logo from "../../image/roukaya.png";

// Advanced animated background with aviation elements
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Sky gradient background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-sky-900 via-blue-800 to-indigo-900 opacity-90"></div>

      {/* Background world map */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20"></div>

      {/* Animated clouds */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={`cloud-${i}`}
            className="absolute bg-white opacity-30 rounded-full"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 60 + 40}px`,
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(20px)",
              animation: `floatCloud ${
                Math.random() * 120 + 90
              }s linear infinite`,
              animationDelay: `${Math.random() * -60}s`,
            }}
          />
        ))}
      </div>

      {/* Animated stars */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${
                Math.random() * 4 + 2
              }s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Flight paths */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={`path-${i}`}
            className="absolute"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: 0,
              width: "100%",
              height: "2px",
            }}
          >
            <div
              className="h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30"
              style={{
                animation: `flightPath ${
                  Math.random() * 20 + 15
                }s linear infinite`,
                animationDelay: `${Math.random() * -10}s`,
              }}
            />
            <div
              className="absolute h-1 w-1 bg-white rounded-full"
              style={{
                top: "-1px",
                animation: `flightDot ${
                  Math.random() * 20 + 15
                }s linear infinite`,
                animationDelay: `${Math.random() * -10}s`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Style global pour les animations
const GlobalStyles = () => (
  <style jsx global>{`
    @keyframes floatCloud {
      0% {
        transform: translateX(-200px);
      }
      100% {
        transform: translateX(calc(100vw + 200px));
      }
    }

    @keyframes twinkle {
      0% {
        opacity: 0.2;
      }
      100% {
        opacity: 0.8;
      }
    }

    @keyframes flightPath {
      0% {
        transform: scaleX(0);
        transform-origin: left;
      }
      5% {
        transform: scaleX(1);
        transform-origin: left;
      }
      95% {
        transform: scaleX(1);
        transform-origin: right;
      }
      100% {
        transform: scaleX(0);
        transform-origin: right;
      }
    }

    @keyframes flightDot {
      0% {
        left: -5px;
        opacity: 0;
      }
      5% {
        left: 0%;
        opacity: 1;
      }
      95% {
        left: 100%;
        opacity: 1;
      }
      100% {
        left: calc(100% + 5px);
        opacity: 0;
      }
    }

    @keyframes planeFly {
      0% {
        transform: translate(-100px, 0) rotate(0deg);
        opacity: 0;
      }
      10% {
        transform: translate(0, 0) rotate(0deg);
        opacity: 1;
      }
      45% {
        transform: translate(calc(50vw - 50px), -50px) rotate(-10deg);
      }
      55% {
        transform: translate(calc(50vw + 50px), -50px) rotate(10deg);
      }
      90% {
        transform: translate(100vw, 0) rotate(0deg);
        opacity: 1;
      }
      100% {
        transform: translate(calc(100vw + 100px), 0) rotate(0deg);
        opacity: 0;
      }
    }

    @keyframes planeTransition {
      0% {
        transform: translate(-50%, -50%) scale(1) rotate(0deg);
        opacity: 1;
      }
      50% {
        transform: translate(-50%, -50%) scale(1.5) rotate(360deg);
        opacity: 0.8;
      }
      100% {
        transform: translate(-50%, -50%) scale(1) rotate(720deg);
        opacity: 1;
      }
    }

    @keyframes fadeInScale {
      from {
        transform: scale(0.95);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }

    @keyframes rotateInOut {
      0% {
        transform: rotate(-10deg) translateY(40px);
        opacity: 0;
      }
      100% {
        transform: rotate(0deg) translateY(0);
        opacity: 1;
      }
    }

    @keyframes shimmer {
      0% {
        background-position: -200% 0;
      }
      100% {
        background-position: 200% 0;
      }
    }

    .tab-content-enter {
      animation: fadeInScale 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    .tab-content-exit {
      animation: fadeInScale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) reverse
        forwards;
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
    }

    .rotate-in {
      animation: rotateInOut 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    .plane-transition {
      animation: planeTransition 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    .shimmer-effect {
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      background-size: 200% 100%;
      animation: shimmer 2s infinite;
    }

    .btn-hover-effect:hover {
      box-shadow: 0 10px 20px -10px rgba(59, 130, 246, 0.7);
      transform: translateY(-2px) scale(1.01);
    }
  `}</style>
);

// Animated 3D-looking airplane component
const AnimatedPlane = ({ isAnimating, fromTab, toTab }) => {
  const planeRef = useRef(null);
  const [animationActive, setAnimationActive] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      setAnimationActive(true);
      const timer = setTimeout(() => {
        setAnimationActive(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  // Random flight animations for background
  useEffect(() => {
    const interval = setInterval(() => {
      const plane = document.createElement("div");
      plane.className = "absolute z-10";
      plane.style.top = `${Math.random() * 60 + 10}%`;
      plane.style.animation = "planeFly 30s linear forwards";

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("width", "20");
      svg.setAttribute("height", "20");
      svg.setAttribute("fill", "none");
      svg.setAttribute("stroke", "white");
      svg.setAttribute("stroke-width", "2");
      svg.setAttribute("stroke-linecap", "round");
      svg.setAttribute("stroke-linejoin", "round");

      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path.setAttribute(
        "d",
        "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
      );

      svg.appendChild(path);
      plane.appendChild(svg);

      document.querySelector(".plane-container").appendChild(plane);

      setTimeout(() => {
        if (plane.parentNode) {
          plane.parentNode.removeChild(plane);
        }
      }, 30000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  if (!isAnimating) return null;

  return (
    <div
      ref={planeRef}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 plane-transition"
    >
      <Plane
        size={60}
        className="text-blue-300 drop-shadow-lg"
        strokeWidth={1.5}
      />
    </div>
  );
};

// Animated input field component
const AnimatedInput = ({
  label,
  placeholder,
  icon: Icon,
  delay = 0,
  className = "",
}) => (
  <div
    className={`relative transition-all duration-700 ${className}`}
    style={{
      animationDelay: `${delay}ms`,
      animationFillMode: "both",
      animationName: "rotateInOut",
    }}
  >
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <div className="relative group">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-3 focus:ring-blue-400 focus:border-transparent pl-10 transition-all duration-300 group-hover:border-blue-300 group-hover:shadow-md"
      />
      <Icon
        className="absolute left-3 top-3.5 text-blue-600 transition-all duration-300 group-hover:scale-110"
        size={18}
      />
      <div className="absolute inset-0 rounded-lg shimmer-effect opacity-0 group-hover:opacity-100 pointer-events-none"></div>
    </div>
  </div>
);

// Main hero section component
const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("flights");
  const [searchVisible, setSearchVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [prevTab, setPrevTab] = useState(null);
  const [timeOfDay, setTimeOfDay] = useState("day");

  // Toggle between day and night mode
  const toggleTimeOfDay = () => {
    setTimeOfDay((prev) => (prev === "day" ? "night" : "day"));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleTabChange = (tab) => {
    if (tab !== activeTab && !isAnimating) {
      setIsAnimating(true);
      setPrevTab(activeTab);

      setTimeout(() => {
        setActiveTab(tab);

        setTimeout(() => {
          setIsAnimating(false);
          setPrevTab(null);
        }, 800);
      }, 500);
    }
  };

  // Flights tab content
  const FlightsTabContent = () => (
    <div
      className={`${
        isAnimating && activeTab !== "flights"
          ? "tab-content-exit"
          : "tab-content-enter"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <AnimatedInput
          label="Départ"
          placeholder="Ville de départ"
          icon={MapPin}
          delay={100}
        />
        <AnimatedInput
          label="Destination"
          placeholder="Où allez-vous ?"
          icon={MapPin}
          delay={200}
        />
        <AnimatedInput
          label="Dates"
          placeholder="Sélectionnez vos dates"
          icon={Calendar}
          delay={300}
        />
        <AnimatedInput
          label="Voyageurs"
          placeholder="1 adulte"
          icon={Users}
          delay={400}
        />
      </div>

      <div
        className="mt-4 flex items-center"
        style={{ animation: "fadeInScale 0.8s 500ms forwards", opacity: 0 }}
      >
        <label className="flex items-center text-sm text-gray-700 transition-all duration-300 hover:text-blue-700">
          <input
            type="checkbox"
            className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 transition-all duration-300"
          />
          Vols directs uniquement
        </label>
        <label className="flex items-center text-sm text-gray-700 ml-6 transition-all duration-300 hover:text-blue-700">
          <input
            type="checkbox"
            className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 transition-all duration-300"
          />
          Billets flexibles
        </label>
      </div>

      <button
        className="w-full mt-4 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-500 btn-hover-effect"
        style={{ animation: "fadeInScale 0.6s 600ms forwards", opacity: 0 }}
      >
        <Plane
          size={20}
          className="transform transition-all duration-500 group-hover:translate-x-1"
        />
        <span>Rechercher des vols</span>
        <ArrowRight
          size={20}
          className="ml-1 transform transition-all duration-500 group-hover:translate-x-1"
        />
      </button>
    </div>
  );

  // Hotels tab content
  const HotelsTabContent = () => (
    <div
      className={`${
        isAnimating && activeTab !== "hotels"
          ? "tab-content-exit"
          : "tab-content-enter"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatedInput
          label="Destination"
          placeholder="Ville, région ou hôtel"
          icon={MapPin}
          delay={100}
        />
        <AnimatedInput
          label="Dates de séjour"
          placeholder="Arrivée - Départ"
          icon={Calendar}
          delay={200}
        />
        <AnimatedInput
          label="Chambres et invités"
          placeholder="1 chambre, 2 adultes"
          icon={Users}
          delay={300}
        />
      </div>

      <div
        className="mt-4"
        style={{ animation: "fadeInScale 0.8s 400ms forwards", opacity: 0 }}
      >
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Étoiles
        </label>
        <div className="flex space-x-3">
          {[1, 2, 3, 4, 5].map((star, index) => (
            <button
              key={star}
              className="h-9 w-9 flex items-center justify-center rounded-full border border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 transform hover:scale-110 hover:shadow-md"
              style={{
                animationDelay: `${400 + index * 100}ms`,
                animationFillMode: "both",
                animationName: "fadeInScale",
                opacity: 0,
              }}
            >
              <Star
                size={16}
                className={star <= 3 ? "text-blue-600" : "text-gray-400"}
              />
            </button>
          ))}
          <div
            className="h-9 flex items-center text-sm text-gray-500 ml-2"
            style={{ animation: "fadeInScale 0.8s 900ms forwards", opacity: 0 }}
          >
            3 étoiles minimum
          </div>
        </div>
      </div>

      <div
        className="mt-2 flex items-center"
        style={{ animation: "fadeInScale 0.8s 1000ms forwards", opacity: 0 }}
      >
        <label className="flex items-center text-sm text-gray-700 transition-all duration-300 hover:text-blue-700">
          <input
            type="checkbox"
            className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500"
          />
          Petit-déjeuner inclus
        </label>
        <label className="flex items-center text-sm text-gray-700 ml-6 transition-all duration-300 hover:text-blue-700">
          <input
            type="checkbox"
            className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500"
          />
          Annulation gratuite
        </label>
      </div>

      <button
        className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-500 btn-hover-effect"
        style={{ animation: "fadeInScale 0.6s 1100ms forwards", opacity: 0 }}
      >
        <Bed
          size={20}
          className="transform transition-all duration-500 group-hover:translate-x-1"
        />
        <span>Rechercher des hôtels</span>
        <ArrowRight
          size={20}
          className="ml-1 transform transition-all duration-500 group-hover:translate-x-1"
        />
      </button>
    </div>
  );

  // Packages tab content
  const PackagesTabContent = () => (
    <div
      className={`${
        isAnimating && activeTab !== "packages"
          ? "tab-content-exit"
          : "tab-content-enter"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className="relative"
          style={{ animation: "rotateInOut 0.6s 100ms forwards", opacity: 0 }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type de séjour
          </label>
          <div className="relative group">
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-3 focus:ring-blue-400 focus:border-transparent pl-10 pr-10 appearance-none transition-all duration-300 group-hover:border-blue-300 group-hover:shadow-md">
              <option>Tout compris</option>
              <option>Culturel</option>
              <option>Aventure</option>
              <option>Détente</option>
              <option>Gastronomique</option>
            </select>
            <Palmtree
              className="absolute left-3 top-3.5 text-blue-600 transition-all duration-300 group-hover:scale-110"
              size={18}
            />
            <ChevronRight
              className="absolute right-3 top-3.5 text-gray-500 transform rotate-90"
              size={18}
            />
            <div className="absolute inset-0 rounded-lg shimmer-effect opacity-0 group-hover:opacity-100 pointer-events-none"></div>
          </div>
        </div>

        <AnimatedInput
          label="Destination"
          placeholder="Où souhaitez-vous aller ?"
          icon={Globe}
          delay={200}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <AnimatedInput
          label="Dates"
          placeholder="Période souhaitée"
          icon={Calendar}
          delay={300}
        />
        <AnimatedInput
          label="Budget"
          placeholder="Budget maximum"
          icon={CreditCard}
          delay={400}
        />
      </div>

      <div
        className="mt-4"
        style={{ animation: "fadeInScale 0.8s 500ms forwards", opacity: 0 }}
      >
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Participants
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="flex items-center justify-between border border-gray-300 rounded-lg p-2 transition-all duration-300 hover:border-blue-300 hover:shadow-md group">
            <span className="text-sm">Adultes</span>
            <div className="flex items-center">
              <button className="w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-all duration-300">
                -
              </button>
              <span className="mx-2 text-sm">2</span>
              <button className="w-6 h-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-300">
                +
              </button>
            </div>
            <div className="absolute inset-0 rounded-lg shimmer-effect opacity-0 group-hover:opacity-100 pointer-events-none"></div>
          </div>
          <div className="flex items-center justify-between border border-gray-300 rounded-lg p-2 transition-all duration-300 hover:border-blue-300 hover:shadow-md group">
            <span className="text-sm">Enfants</span>
            <div className="flex items-center">
              <button className="w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-all duration-300">
                -
              </button>
              <span className="mx-2 text-sm">0</span>
              <button className="w-6 h-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-300">
                +
              </button>
            </div>
            <div className="absolute inset-0 rounded-lg shimmer-effect opacity-0 group-hover:opacity-100 pointer-events-none"></div>
          </div>
        </div>
      </div>

      <button
        className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-500 btn-hover-effect"
        style={{ animation: "fadeInScale 0.6s 600ms forwards", opacity: 0 }}
      >
        <Coffee
          size={20}
          className="transform transition-all duration-500 group-hover:translate-x-1"
        />
        <span>Trouver votre séjour idéal</span>
        <ArrowRight
          size={20}
          className="ml-1 transform transition-all duration-500 group-hover:translate-x-1"
        />
      </button>
    </div>
  );

  // Function to render tab content based on active tab
  const renderTabContent = () => {
    // Show previous content during exit animation
    if (isAnimating && prevTab) {
      switch (prevTab) {
        case "flights":
          return <FlightsTabContent />;
        case "hotels":
          return <HotelsTabContent />;
        case "packages":
          return <PackagesTabContent />;
        default:
          return null;
      }
    }

    // Show active tab content
    switch (activeTab) {
      case "flights":
        return <FlightsTabContent />;
      case "hotels":
        return <HotelsTabContent />;
      case "packages":
        return <PackagesTabContent />;
      default:
        return <FlightsTabContent />;
    }
  };

  // Icons for each tab
  const getTabIcon = (tab) => {
    switch (tab) {
      case "flights":
        return (
          <Plane
            size={22}
            className={`transition-all duration-300 ${
              activeTab === "flights" ? "scale-110" : ""
            }`}
          />
        );
      case "hotels":
        return (
          <Bed
            size={22}
            className={`transition-all duration-300 ${
              activeTab === "hotels" ? "scale-110" : ""
            }`}
          />
        );
      case "packages":
        return (
          <Palmtree
            size={22}
            className={`transition-all duration-300 ${
              activeTab === "packages" ? "scale-110" : ""
            }`}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`relative w-full h-screen flex flex-col justify-center items-center overflow-hidden transition-all duration-1000 ${
        timeOfDay === "night" ? "bg-gray-900" : ""
      }`}
    >
      <GlobalStyles />
      <AnimatedBackground />

      {/* Container for flying planes animations */}
      <div className="plane-container absolute inset-0 overflow-hidden pointer-events-none z-10"></div>

      {/* Day/Night toggle */}
      <button
        onClick={toggleTimeOfDay}
        className="absolute top-4 right-4 z-20 bg-white bg-opacity-20 backdrop-blur-md p-2 rounded-full hover:bg-opacity-30 transition-all duration-300"
      >
        {timeOfDay === "day" ? (
          <Moon size={20} className="text-white" />
        ) : (
          <CloudSun size={20} className="text-white" />
        )}
      </button>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
        {/* Logo and headline */}
        <div className="mb-8 transform transition-all duration-1000 translate-y-0 opacity-100">
          <img
            src={logo}
            alt="Roukaya Voyage"
            className="h-20 mb-4 mx-auto filter drop-shadow-lg"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-2 drop-shadow-lg">
            Découvrez le monde avec
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-300 text-center mb-8 drop-shadow-lg">
            Roukaya Voyage
          </h2>
          <p className="text-xl text-white text-center max-w-2xl mx-auto">
            Des expériences de voyage uniques et personnalisées pour réaliser
            vos rêves d'évasion
          </p>
        </div>

        {/* Search container with tabs */}
        <div
          className={`w-full max-w-4xl bg-white bg-opacity-95 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden transition-all duration-1000 transform ${
            searchVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* Tab buttons */}
          <div className="flex border-b relative">
            {/* Animation plane that appears during tab transitions */}
            <AnimatedPlane
              isAnimating={isAnimating}
              fromTab={prevTab}
              toTab={activeTab}
            />

            {["flights", "hotels", "packages"].map((tab) => (
              <button
                key={tab}
                className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "text-blue-700"
                    : "text-gray-600 hover:text-blue-600"
                }`}
                onClick={() => handleTabChange(tab)}
                disabled={isAnimating}
              >
                {getTabIcon(tab)}
                <span className="capitalize">{tab}</span>
              </button>
            ))}

            {/* Animated tab indicator */}
            {/* Animated tab indicator */}
            <div
              className="absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-500 ease-in-out"
              style={{
                width: "33.333%",
                transform:
                  activeTab === "flights"
                    ? "translateX(0)"
                    : activeTab === "hotels"
                    ? "translateX(100%)"
                    : "translateX(200%)",
              }}
            ></div>
          </div>

          {/* Tab content container */}
          <div className="p-6 relative">{renderTabContent()}</div>
        </div>

        {/* Quick links and features below search box */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            {
              icon: <Globe className="text-white" size={24} />,
              text: "Plus de 1000 destinations",
            },
            {
              icon: <Calendar className="text-white" size={24} />,
              text: "Réservation flexible",
            },
            {
              icon: <CreditCard className="text-white" size={24} />,
              text: "Paiement sécurisé",
            },
            {
              icon: <Wind className="text-white" size={24} />,
              text: "Support 24/7",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 transform transition-all duration-500 hover:bg-opacity-30 hover:scale-105"
              style={{
                animation: `fadeInScale 0.5s ${index * 100 + 1200}ms forwards`,
                opacity: 0,
              }}
            >
              <div className="rounded-full bg-blue-600 bg-opacity-70 p-2 backdrop-blur-sm">
                {feature.icon}
              </div>
              <span className="text-white font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

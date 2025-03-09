import React from "react";
import { useState, useEffect } from "react";
import { MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

const DestinationsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [destinations, setDestinations] = useState([]);
  const [visibleDestinations, setVisibleDestinations] = useState([]);

  // Simuler le chargement des données depuis une API
  useEffect(() => {
    // Dans un cas réel, vous récupéreriez ces données depuis une API
    const mockDestinations = [
      {
        id: 1,
        name: "Paris",
        country: "France",
        image:
          "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
        rating: 4.8,
        reviewCount: 420,
        categories: ["europe", "city", "popular"],
        featured: true,
      },
      {
        id: 2,
        name: "Bali",
        country: "Indonésie",
        image:
          "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
        rating: 4.9,
        reviewCount: 645,
        categories: ["asia", "beach", "popular"],
        featured: true,
      },
      {
        id: 3,
        name: "New York",
        country: "États-Unis",
        image:
          "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
        rating: 4.7,
        reviewCount: 387,
        categories: ["america", "city", "popular"],
        featured: true,
      },
      {
        id: 4,
        name: "Tokyo",
        country: "Japon",
        image:
          "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
        rating: 4.8,
        reviewCount: 412,
        categories: ["asia", "city", "popular"],
        featured: false,
      },
      {
        id: 5,
        name: "Santorin",
        country: "Grèce",
        image:
          "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
        rating: 4.9,
        reviewCount: 523,
        categories: ["europe", "beach", "romantic"],
        featured: true,
      },
      {
        id: 6,
        name: "Marrakech",
        country: "Maroc",
        image:
          "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
        rating: 4.6,
        reviewCount: 298,
        categories: ["africa", "city", "cultural"],
        featured: false,
      },
      {
        id: 7,
        name: "Maldives",
        country: "Maldives",
        image:
          "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
        rating: 4.9,
        reviewCount: 587,
        categories: ["asia", "beach", "romantic", "popular"],
        featured: true,
      },
      {
        id: 8,
        name: "Barcelone",
        country: "Espagne",
        image:
          "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
        rating: 4.7,
        reviewCount: 367,
        categories: ["europe", "city", "cultural"],
        featured: false,
      },
    ];

    setDestinations(mockDestinations);
  }, []);

  // Filtrer les destinations selon la catégorie active
  useEffect(() => {
    if (activeCategory === "all") {
      setVisibleDestinations(destinations);
    } else {
      const filtered = destinations.filter((dest) =>
        dest.categories.includes(activeCategory)
      );
      setVisibleDestinations(filtered);
    }
  }, [activeCategory, destinations]);

  // Catégories de destinations
  const categories = [
    { id: "all", label: "Toutes" },
    { id: "popular", label: "Populaires" },
    { id: "beach", label: "Plages" },
    { id: "city", label: "Villes" },
    { id: "cultural", label: "Culturel" },
    { id: "romantic", label: "Romantique" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Explorez le monde avec <span className="text-blue-600">nous</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez nos destinations les plus prisées à travers le monde et
            commencez à planifier votre prochaine aventure.
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                category.id === activeCategory
                  ? "bg-blue-700 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-700 border border-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grille de destinations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleDestinations.map((destination, index) => (
            <Link
              to={`/destinations/${destination.id}`}
              key={destination.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-w-3 aspect-h-2 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/40 to-transparent opacity-80"></div>

              {/* Contenu */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  {destination.name}
                </h3>
                <div className="flex items-center mb-3">
                  <MapPin size={16} className="text-blue-300 mr-1" />
                  <span className="text-blue-100 text-sm">
                    {destination.country}
                  </span>
                </div>

                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < Math.floor(destination.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-white">
                    {destination.rating} ({destination.reviewCount})
                  </span>
                </div>
              </div>

              {/* Badge Featured */}
              {destination.featured && (
                <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded-full">
                  Tendance
                </div>
              )}
            </Link>
          ))}
        </div>

        {/* Bouton voir plus */}
        <div className="text-center mt-12">
          <Link
            to="/destinations"
            className="inline-flex items-center px-6 py-3 bg-white border border-blue-700 text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300"
          >
            Voir toutes les destinations
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
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
    </section>
  );
};

export default DestinationsSection;

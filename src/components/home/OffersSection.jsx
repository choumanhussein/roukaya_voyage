import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, MapPin, Calendar, Heart } from "lucide-react";

const OffersSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);
  const [animationTrigger, setAnimationTrigger] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setAnimationTrigger(true);
  }, []);

  // Offer categories
  const categories = [
    { id: "all", label: "Toutes les offres" },
    { id: "popular", label: "Populaires" },
    { id: "last-minute", label: "Dernière minute" },
    { id: "summer", label: "Été 2025" },
    { id: "romantic", label: "Séjours romantiques" },
  ];

  // Simulated offers data
  const offers = [
    {
      id: 1,
      title: "Découverte de Bali",
      description:
        "Entre plages paradisiaques et temples sacrés, vivez l'expérience balinaise ultime.",
      image:
        "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
      price: 1299,
      oldPrice: 1599,
      rating: 4.8,
      reviewCount: 176,
      location: "Bali, Indonésie",
      duration: "8 jours / 7 nuits",
      categories: ["popular", "summer", "romantic"],
      promotion: "-20%",
    },
    {
      id: 2,
      title: "Escapade à Santorin",
      description:
        "Paysages de carte postale avec maisons blanches et mer turquoise.",
      image:
        "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
      price: 899,
      oldPrice: 1099,
      rating: 4.9,
      reviewCount: 241,
      location: "Santorin, Grèce",
      duration: "5 jours / 4 nuits",
      categories: ["popular", "last-minute", "romantic"],
      promotion: "-18%",
    },
    {
      id: 3,
      title: "Safari au Kenya",
      description:
        "Partez à la rencontre des Big Five dans les plus belles réserves d'Afrique.",
      image:
        "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
      price: 1849,
      oldPrice: null,
      rating: 4.7,
      reviewCount: 129,
      location: "Massaï Mara, Kenya",
      duration: "9 jours / 8 nuits",
      categories: ["summer", "popular"],
      promotion: null,
    },
    {
      id: 4,
      title: "New York City Break",
      description: "Un week-end prolongé dans la ville qui ne dort jamais.",
      image:
        "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
      price: 749,
      oldPrice: 899,
      rating: 4.5,
      reviewCount: 203,
      location: "New York, USA",
      duration: "4 jours / 3 nuits",
      categories: ["last-minute"],
      promotion: "-17%",
    },
    {
      id: 5,
      title: "Merveilles du Japon",
      description:
        "De Tokyo à Kyoto, découvrez l'alliance parfaite entre tradition et modernité.",
      image:
        "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
      price: 2199,
      oldPrice: null,
      rating: 4.9,
      reviewCount: 158,
      location: "Tokyo → Kyoto, Japon",
      duration: "12 jours / 11 nuits",
      categories: ["summer"],
      promotion: null,
    },
    {
      id: 6,
      title: "Séjour aux Maldives",
      description: "Luxe, détente et farniente dans un cadre paradisiaque.",
      image:
        "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
      price: 1599,
      oldPrice: 1999,
      rating: 4.9,
      reviewCount: 217,
      location: "Malé, Maldives",
      duration: "7 jours / 6 nuits",
      categories: ["romantic", "popular"],
      promotion: "-20%",
    },
    {
      id: 7,
      title: "Culture Marocaine",
      description:
        "Des médinas colorées aux dunes du désert, toute la magie du Maroc en un voyage.",
      image:
        "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
      price: 699,
      oldPrice: 849,
      rating: 4.6,
      reviewCount: 183,
      location: "Marrakech → Fès, Maroc",
      duration: "6 jours / 5 nuits",
      categories: ["last-minute", "popular"],
      promotion: "-18%",
    },
    {
      id: 8,
      title: "Croisière Caraïbes",
      description:
        "Une semaine inoubliable à voguer d'île en île dans les eaux turquoise des Caraïbes.",
      image:
        "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
      price: 1149,
      oldPrice: 1399,
      rating: 4.7,
      reviewCount: 194,
      location: "Antilles",
      duration: "8 jours / 7 nuits",
      categories: ["summer", "romantic"],
      promotion: "-18%",
    },
  ];

  // Filter offers based on selected category
  const filteredOffers =
    activeCategory === "all"
      ? offers
      : offers.filter((offer) => offer.categories.includes(activeCategory));

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Destinations <span className="text-blue-600">populaires</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Découvrez nos offres exclusives et nos destinations les plus prisées
            pour votre prochain voyage inoubliable.
          </p>
        </div>

        {/* Category Filters */}
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

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOffers.slice(0, visibleCount).map((offer, index) => (
            <div
              key={offer.id}
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform ${
                animationTrigger
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image and Promo Badge */}
              <div className="relative">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-48 object-cover"
                />
                {offer.promotion && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold py-1 px-3 rounded-full">
                    {offer.promotion}
                  </div>
                )}
                <button className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full transition-all duration-300">
                  <Heart size={18} className="text-red-500" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin size={16} className="text-blue-600 mr-1" />
                  <span className="text-sm text-gray-600">
                    {offer.location}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {offer.title}
                </h3>

                <div className="flex items-center mb-3">
                  <Star size={16} className="text-yellow-500 fill-current" />
                  <span className="ml-1 text-sm font-medium">
                    {offer.rating}
                  </span>
                  <span className="ml-1 text-sm text-gray-500">
                    ({offer.reviewCount} avis)
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  {offer.description}
                </p>

                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Calendar size={16} className="mr-1" />
                  <span>{offer.duration}</span>
                </div>

                {/* Price and CTA */}
                <div className="flex items-end justify-between mt-6">
                  <div>
                    {offer.oldPrice && (
                      <span className="text-sm text-gray-500 line-through mr-2">
                        {offer.oldPrice} €
                      </span>
                    )}
                    <span className="text-xl font-bold text-blue-700">
                      {offer.price} €
                    </span>
                    <span className="text-sm text-gray-500">/personne</span>
                  </div>

                  <Link
                    to={`/booking/${offer.id}`}
                    className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-lg flex items-center text-sm font-medium transition-all duration-300"
                  >
                    <span>Réserver</span>
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* "Voir plus" Button */}
        {filteredOffers.length > visibleCount && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="bg-white border border-blue-700 text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium flex items-center transition-all duration-300"
            >
              <span>Voir plus d'offres</span>
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default OffersSection;

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { MapPin, Star, ArrowLeft } from "lucide-react";

const ContinentPage = () => {
  const { continent } = useParams();
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fonction pour transformer la première lettre en majuscule
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Titre formaté du continent
  const continentTitle = capitalizeFirstLetter(continent);

  useEffect(() => {
    // Simuler un chargement de données
    const fetchDestinations = async () => {
      setLoading(true);
      try {
        // Simulation de données de destinations
        const mockDestinations = [
          {
            id: "1",
            name: "Paris",
            country: "France",
            continent: "europe",
            description:
              "La ville lumière vous séduira par son architecture, sa gastronomie et son atmosphère romantique.",
            image:
              "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
            rating: 4.8,
            price: 1299,
          },
          {
            id: "2",
            name: "Bali",
            country: "Indonésie",
            continent: "asie",
            description:
              "Île paradisiaque d'Indonésie, Bali est réputée pour ses rizières en terrasses, ses plages magnifiques et ses temples sacrés.",
            image:
              "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
            rating: 4.7,
            price: 1499,
          },
          {
            id: "3",
            name: "New York",
            country: "États-Unis",
            continent: "amérique",
            description:
              "La ville qui ne dort jamais vous invite à découvrir ses gratte-ciels, sa culture et son énergie unique.",
            image:
              "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
            rating: 4.6,
            price: 1799,
          },
          {
            id: "4",
            name: "Tokyo",
            country: "Japon",
            continent: "asie",
            description:
              "Mélange fascinant de tradition et d'innovation, Tokyo est une métropole qui ne dort jamais.",
            image:
              "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
            rating: 4.9,
            price: 1999,
          },
          {
            id: "5",
            name: "Santorin",
            country: "Grèce",
            continent: "europe",
            description:
              "Île des Cyclades connue pour ses maisons blanches à dômes bleus, ses vues spectaculaires et ses couchers de soleil romantiques.",
            image:
              "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
            rating: 4.7,
            price: 1399,
          },
          {
            id: "6",
            name: "Le Caire",
            country: "Égypte",
            continent: "afrique",
            description:
              "Explorez les pyramides et découvrez l'histoire fascinante de l'Égypte ancienne.",
            image:
              "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
            rating: 4.5,
            price: 1299,
          },
          {
            id: "7",
            name: "Sydney",
            country: "Australie",
            continent: "océanie",
            description:
              "Découvrez la beauté de l'opéra de Sydney et les plages australiennes.",
            image:
              "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
            rating: 4.6,
            price: 2299,
          },
          {
            id: "8",
            name: "Rio de Janeiro",
            country: "Brésil",
            continent: "amérique",
            description:
              "Profitez des plages de Copacabana et admirez le Christ Rédempteur.",
            image:
              "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
            rating: 4.4,
            price: 1899,
          },
          {
            id: "9",
            name: "Rome",
            country: "Italie",
            continent: "europe",
            description:
              "La ville éternelle regorge de trésors historiques et d'une gastronomie exceptionnelle.",
            image:
              "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
            rating: 4.8,
            price: 1349,
          },
          {
            id: "10",
            name: "Marrakech",
            country: "Maroc",
            continent: "afrique",
            description:
              "Plongez dans l'ambiance des souks et découvrez les palais majestueux.",
            image:
              "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
            rating: 4.6,
            price: 1199,
          },
        ];

        // Filtrer les destinations par continent (insensible à la casse)
        const filteredDestinations = mockDestinations.filter(
          (dest) => dest.continent.toLowerCase() === continent.toLowerCase()
        );

        if (filteredDestinations.length === 0) {
          setError("Aucune destination trouvée pour ce continent.");
        } else {
          setDestinations(filteredDestinations);
        }

        setLoading(false);
      } catch (error) {
        console.error("Erreur lors du chargement des destinations:", error);
        setError("Impossible de charger les destinations.");
        setLoading(false);
      }
    };

    fetchDestinations();
  }, [continent]);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="animate-spin h-10 w-10 border-4 border-blue-700 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-20 flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Erreur</h2>
        <p className="text-gray-600 mb-6">{error}</p>
        <Link
          to="/destinations"
          className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
        >
          Voir toutes les destinations
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Lien de retour */}
        <Link
          to="/destinations"
          className="inline-flex items-center text-blue-700 hover:text-blue-800 mb-4"
        >
          <ArrowLeft size={18} className="mr-2" />
          Toutes les destinations
        </Link>

        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Destinations en {continentTitle}
        </h1>

        {destinations.length === 0 ? (
          <p className="text-gray-600">
            Aucune destination disponible pour ce continent.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination) => (
              <Link
                to={`/destinations/${destination.id}`}
                key={destination.id}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold py-1 px-2 rounded-lg">
                    À partir de {destination.price} €
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-blue-900 mb-1">
                    {destination.name}
                  </h3>
                  <div className="flex items-center mb-2">
                    <MapPin size={16} className="text-blue-700 mr-1" />
                    <span className="text-gray-600 text-sm">
                      {destination.country}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                    {destination.description}
                  </p>
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-500 mr-1" />
                    <span className="text-gray-700">{destination.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContinentPage;

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import DestinationHero from "../components/destination/DestinationHero";
import DestinationOverview from "../components/destination/DestinationOverview";
import DestinationGallery from "../components/destination/DestinationGallery";
import DestinationActivities from "../components/destination/DestinationActivities";
import DestinationMap from "../components/destination/DestinationMap";
import { Calendar, Users, Map, ArrowRight, Loader } from "lucide-react"; // Import des icônes manquantes

const DestinationPage = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTab, setSelectedTab] = useState("overview"); // Ajout de l'état pour selectedTab

  useEffect(() => {
    const fetchDestination = async () => {
      setLoading(true);
      try {
        // Liste de destinations simulées (pourrait venir de votre service/context)
        const mockDestinations = [
          {
            id: "1",
            name: "Paris",
            country: "France",
            description:
              "La ville lumière vous séduira par son architecture, sa gastronomie et son atmosphère romantique.",
            image:
              "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
            price: 1299,
            duration: "7 jours / 6 nuits",
            gallery: [],
            activities: [],
            location: { lat: 48.8566, lng: 2.3522 },
            weather: {
              bestTimeToVisit:
                "Printemps (Avril-Juin) ou Automne (Septembre-Octobre)",
              averageTemperature: "15°C annuel",
              rainySeasonInfo: "Décembre à Mars",
            },
            practicalInfo: {
              visa: "Non requis pour les citoyens européens",
              language: "Français",
              currency: "Euro (€)",
              timeZone: "GMT+1",
              electricity: "230V, prises de type E",
            },
          },
          {
            id: "2",
            name: "Bali",
            country: "Indonésie",
            description:
              "Île paradisiaque d'Indonésie, Bali est réputée pour ses rizières en terrasses, ses plages magnifiques et ses temples sacrés.",
            image:
              "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
            price: 1499,
            duration: "10 jours / 9 nuits",
            gallery: [],
            activities: [],
            location: { lat: -8.4095, lng: 115.1889 },
            weather: {
              bestTimeToVisit: "Mai à Septembre (saison sèche)",
              averageTemperature: "26-28°C toute l'année",
              rainySeasonInfo: "Novembre à Mars",
            },
            practicalInfo: {
              visa: "Visa à l'arrivée pour 30 jours",
              language: "Indonésien, Balinais",
              currency: "Roupie indonésienne (IDR)",
              timeZone: "GMT+8",
              electricity: "230V, prises de type C et F",
            },
          },
          {
            id: "3",
            name: "New York",
            country: "États-Unis",
            description:
              "La ville qui ne dort jamais vous invite à découvrir ses gratte-ciels, sa culture et son énergie unique.",
            image:
              "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
            price: 1799,
            duration: "8 jours / 7 nuits",
            gallery: [],
            activities: [],
            location: { lat: 40.7128, lng: -74.006 },
            weather: {
              bestTimeToVisit: "Avril-Mai ou Septembre-Octobre",
              averageTemperature: "12°C annuel",
              rainySeasonInfo: "Juillet et Août (orages)",
            },
            practicalInfo: {
              visa: "ESTA obligatoire",
              language: "Anglais",
              currency: "Dollar américain ($)",
              timeZone: "GMT-5",
              electricity: "120V, prises de type A et B",
            },
          },
          {
            id: "4",
            name: "Tokyo",
            country: "Japon",
            description:
              "Mélange fascinant de tradition et d'innovation, Tokyo est une métropole qui ne dort jamais.",
            image:
              "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
            price: 1999,
            duration: "12 jours / 11 nuits",
            gallery: [],
            activities: [],
            location: { lat: 35.6762, lng: 139.6503 },
            weather: {
              bestTimeToVisit:
                "Mars-Mai (cerisiers) ou Octobre-Novembre (automne)",
              averageTemperature: "16°C annuel",
              rainySeasonInfo: "Juin (saison des pluies)",
            },
            practicalInfo: {
              visa: "Exemption de visa pour 90 jours",
              language: "Japonais",
              currency: "Yen japonais (¥)",
              timeZone: "GMT+9",
              electricity: "100V, prises de type A et B",
            },
          },
          {
            id: "5",
            name: "Santorin",
            country: "Grèce",
            description:
              "Île des Cyclades connue pour ses maisons blanches à dômes bleus, ses vues spectaculaires et ses couchers de soleil romantiques.",
            image:
              "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
            price: 1399,
            duration: "6 jours / 5 nuits",
            gallery: [],
            activities: [],
            location: { lat: 36.3932, lng: 25.4615 },
            weather: {
              bestTimeToVisit: "Mai-Juin ou Septembre-Octobre",
              averageTemperature: "20°C annuel",
              rainySeasonInfo: "Décembre à Mars",
            },
            practicalInfo: {
              visa: "Non requis pour les citoyens européens",
              language: "Grec",
              currency: "Euro (€)",
              timeZone: "GMT+2",
              electricity: "230V, prises de type C et F",
            },
          },
        ];

        // Important: convertir l'ID de l'URL en string pour la comparaison
        const foundDestination = mockDestinations.find(
          (dest) => dest.id === String(id)
        );

        if (foundDestination) {
          setDestination(foundDestination);
        } else {
          setError("Destination non trouvée");
        }

        setLoading(false);
      } catch (error) {
        console.error("Erreur lors du chargement de la destination:", error);
        setError("Impossible de charger les informations de la destination.");
        setLoading(false);
      }
    };

    fetchDestination();
  }, [id]);

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
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero section avec image de couverture */}
      <DestinationHero destination={destination} />

      {/* Navigation par onglets */}
      <div className="sticky top-16 bg-white shadow-sm z-20 border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar">
            <button
              className={`px-6 py-4 whitespace-nowrap font-medium border-b-2 transition-colors ${
                selectedTab === "overview"
                  ? "border-blue-700 text-blue-700"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setSelectedTab("overview")}
            >
              Aperçu
            </button>
            <button
              className={`px-6 py-4 whitespace-nowrap font-medium border-b-2 transition-colors ${
                selectedTab === "gallery"
                  ? "border-blue-700 text-blue-700"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setSelectedTab("gallery")}
            >
              Galerie
            </button>
            <button
              className={`px-6 py-4 whitespace-nowrap font-medium border-b-2 transition-colors ${
                selectedTab === "activities"
                  ? "border-blue-700 text-blue-700"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setSelectedTab("activities")}
            >
              Activités
            </button>
            <button
              className={`px-6 py-4 whitespace-nowrap font-medium border-b-2 transition-colors ${
                selectedTab === "map"
                  ? "border-blue-700 text-blue-700"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setSelectedTab("map")}
            >
              Carte
            </button>
            <button
              className={`px-6 py-4 whitespace-nowrap font-medium border-b-2 transition-colors ${
                selectedTab === "info"
                  ? "border-blue-700 text-blue-700"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setSelectedTab("info")}
            >
              Infos pratiques
            </button>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contenu principal (70%) */}
          <div className="lg:w-2/3">
            {selectedTab === "overview" && (
              <DestinationOverview destination={destination} />
            )}
            {selectedTab === "gallery" && (
              <DestinationGallery gallery={destination.gallery} />
            )}
            {selectedTab === "activities" && (
              <DestinationActivities activities={destination.activities} />
            )}
            {selectedTab === "map" && (
              <DestinationMap location={destination.location} />
            )}
            {selectedTab === "info" && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">
                  Informations pratiques
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-blue-800 mb-2">
                      Meilleure période
                    </h3>
                    <p className="text-gray-700">
                      {destination.weather.bestTimeToVisit}
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      Température moyenne:{" "}
                      {destination.weather.averageTemperature}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Saison des pluies: {destination.weather.rainySeasonInfo}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-medium text-blue-800 mb-2">
                        Visa
                      </h3>
                      <p className="text-gray-700">
                        {destination.practicalInfo.visa}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-blue-800 mb-2">
                        Langue
                      </h3>
                      <p className="text-gray-700">
                        {destination.practicalInfo.language}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-blue-800 mb-2">
                        Monnaie
                      </h3>
                      <p className="text-gray-700">
                        {destination.practicalInfo.currency}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-blue-800 mb-2">
                        Fuseau horaire
                      </h3>
                      <p className="text-gray-700">
                        {destination.practicalInfo.timeZone}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-blue-800 mb-2">
                        Électricité
                      </h3>
                      <p className="text-gray-700">
                        {destination.practicalInfo.electricity}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar (30%) */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-32">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="block text-3xl font-bold text-blue-900">
                      {destination.price} €
                    </span>
                    <span className="text-sm text-gray-500">par personne</span>
                  </div>
                  <div className="bg-blue-50 px-3 py-1 rounded-full text-blue-700 text-sm">
                    {destination.duration}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={18} className="mr-3 text-blue-700" />
                    <span>Départ flexible</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users size={18} className="mr-3 text-blue-700" />
                    <span>Groupe de 2 à 16 personnes</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Map size={18} className="mr-3 text-blue-700" />
                    <span>Circuit guidé avec accompagnateur</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    to={`/booking/${destination.id}`}
                    className="flex w-full bg-blue-700 hover:bg-blue-800 text-white py-3 px-4 rounded-lg font-medium text-center transition-colors items-center justify-center"
                  >
                    <span>Réserver maintenant</span>
                    <ArrowRight size={18} className="ml-2" />
                  </Link>

                  <button className="block w-full bg-white hover:bg-gray-50 text-blue-700 py-3 px-4 rounded-lg font-medium text-center transition-colors border border-blue-700">
                    Ajouter aux favoris
                  </button>

                  <button className="block w-full bg-white hover:bg-gray-50 text-gray-700 py-3 px-4 rounded-lg font-medium text-center transition-colors border border-gray-300">
                    Demander un devis
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-3">
                    Ce voyage inclut :
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">Vols aller-retour</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">
                        Hébergement en hôtel 4★
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">
                        Petit-déjeuner inclus
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">Transferts aéroport</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">Guide francophone</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-4 text-center">
                <p className="text-sm text-blue-700">
                  Besoin d'aide pour réserver ?
                </p>
                <p className="font-medium text-blue-900">+33 1 23 45 67 89</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;

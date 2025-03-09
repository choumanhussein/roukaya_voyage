// src/components/pages/AboutPage.jsx
import React from "react";
import { MapPin, Users, Globe, Coffee, Award, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sophie Martin",
      role: "Fondatrice & CEO",
      avatar: "/images/team/sophie.jpg",
      bio: "Passionnée de voyage depuis son plus jeune âge, Sophie a créé cette plateforme pour rendre les voyages accessibles à tous.",
    },
    {
      id: 2,
      name: "Thomas Dubois",
      role: "Directeur Technique",
      avatar: "/images/team/thomas.jpg",
      bio: "Expert en développement web avec plus de 10 ans d'expérience dans la création d'applications innovantes.",
    },
    {
      id: 3,
      name: "Emma Laurent",
      role: "Responsable Relations Clients",
      avatar: "/images/team/emma.jpg",
      bio: "Emma veille à ce que chaque voyageur vive une expérience inoubliable grâce à notre service client d'exception.",
    },
  ];

  const values = [
    {
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      title: "Accessibilité",
      description:
        "Nous croyons que voyager devrait être accessible à tous, quels que soient le budget ou l'expérience.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Communauté",
      description:
        "Nous favorisons une communauté mondiale de voyageurs partageant leurs expériences et conseils.",
    },
    {
      icon: <Award className="h-8 w-8 text-blue-500" />,
      title: "Qualité",
      description:
        "Nous sélectionnons minutieusement chaque partenaire pour garantir une expérience de voyage exceptionnelle.",
    },
    {
      icon: <Coffee className="h-8 w-8 text-blue-500" />,
      title: "Authenticité",
      description:
        "Nous valorisons les expériences authentiques qui permettent de découvrir la culture locale.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Notre Histoire
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Fondée en 2018, notre plateforme est née d'une passion commune pour
          l'exploration et le désir de rendre les voyages accessibles à tous.
          Nous sommes fiers d'avoir aidé plus de 50 000 voyageurs à découvrir
          des destinations exceptionnelles à travers le monde.
        </p>
      </div>

      {/* Nos Valeurs */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">
          Nos Valeurs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Notre Équipe */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">
          Notre Équipe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg`;
                    e.target.alt = "Photo de profil indisponible";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-800">
                  {member.name}
                </h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Présence */}
      <div className="mb-16 bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          Notre Présence
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left md:space-x-12">
          <div className="mb-6 md:mb-0">
            <MapPin className="h-12 w-12 text-blue-700 mx-auto md:mx-0 mb-4" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Siège Social
            </h3>
            <p className="text-gray-600">
              123 Avenue des Voyageurs
              <br />
              75001 Paris, France
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <Globe className="h-12 w-12 text-blue-700 mx-auto md:mx-0 mb-4" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Destinations
            </h3>
            <p className="text-gray-600">
              Plus de 500 destinations
              <br />
              Dans 75 pays
            </p>
          </div>
          <div>
            <Users className="h-12 w-12 text-blue-700 mx-auto md:mx-0 mb-4" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Communauté
            </h3>
            <p className="text-gray-600">
              Plus de 50 000 voyageurs
              <br />
              Plus de 200 partenaires locaux
            </p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center bg-white rounded-lg shadow-sm border border-gray-100 p-8">
        <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-blue-900 mb-3">
          Une question ou une suggestion ?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Notre équipe est à votre écoute pour répondre à toutes vos questions
          et vous accompagner dans la planification de votre prochain voyage.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          Contactez-nous
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;

import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("next");

  // Données des témoignages
  const testimonials = [
    {
      id: 1,
      name: "Sophie Martin",
      location: "Paris, France",
      photo:
        "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
      rating: 5,
      text: "Notre voyage à Bali organisé par Roukaya Voyage a été absolument parfait ! L'itinéraire était bien pensé, les hôtels étaient magnifiques et le guide local était très professionnel. Nous avons découvert des endroits que nous n'aurions jamais trouvés par nous-mêmes. Un grand merci à toute l'équipe !",
      destination: "Bali, Indonésie",
      date: "Juillet 2024",
    },
    {
      id: 2,
      name: "Thomas Dubois",
      location: "Lyon, France",
      photo:
        "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
      rating: 5,
      text: "Le service client de Roukaya Voyage est exemplaire. Lorsque notre vol a été annulé en raison de conditions météorologiques, leur équipe a immédiatement trouvé une solution alternative et réorganisé notre itinéraire. Malgré cet imprévu, notre séjour au Japon a été une expérience inoubliable. Je les recommande vivement !",
      destination: "Tokyo, Japon",
      date: "Mai 2024",
    },
    {
      id: 3,
      name: "Camille Rousseau",
      location: "Marseille, France",
      photo:
        "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
      rating: 4,
      text: "Notre lune de miel aux Maldives était tout simplement magique ! Roukaya Voyage a su comprendre exactement ce que nous recherchions et a créé un voyage personnalisé qui correspondait parfaitement à nos attentes. Le resort était paradisiaque et les petites attentions tout au long du séjour ont fait la différence.",
      destination: "Maldives",
      date: "Juin 2024",
    },
  ];

  // Changer de témoignage automatiquement toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const goToPrev = () => {
    setAnimationDirection("prev");
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setAnimationDirection("next");
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-blue-50 relative overflow-hidden">
      {/* Éléments de design en arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-100 opacity-50"></div>
        <div className="absolute top-40 right-10 w-32 h-32 rounded-full bg-blue-200 opacity-40"></div>
        <div className="absolute bottom-10 left-1/4 w-48 h-48 rounded-full bg-blue-100 opacity-30"></div>
        <div className="absolute -bottom-20 -right-10 w-80 h-80 rounded-full bg-blue-100 opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Ce que disent nos <span className="text-blue-600">voyageurs</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les expériences de nos clients qui ont vécu des moments
            inoubliables avec Roukaya Voyage.
          </p>
        </div>

        {/* Carrousel de témoignages */}
        <div className="max-w-4xl mx-auto relative">
          {/* Témoignage actif */}
          <div className="relative">
            <div
              className={`bg-white rounded-2xl shadow-xl p-8 md:p-10 transition-all duration-500 transform ${
                animationDirection === "next"
                  ? "animate-fade-in"
                  : "animate-fade-in"
              }`}
            >
              {/* Icône de citation */}
              <div className="absolute -top-6 left-10 w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full shadow-lg">
                <Quote size={24} className="text-white" />
              </div>

              {/* Contenu du témoignage */}
              <div className="mb-6">
                <p className="text-gray-700 text-lg italic leading-relaxed">
                  "{testimonials[activeIndex].text}"
                </p>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                {/* Info client */}
                <div className="flex items-center mb-4 md:mb-0">
                  <img
                    src={testimonials[activeIndex].photo}
                    alt={testimonials[activeIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-100 mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-blue-900">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonials[activeIndex].location}
                    </p>
                  </div>
                </div>

                {/* Info voyage */}
                <div className="text-right">
                  <div className="flex mb-1 justify-end">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < testimonials[activeIndex].rating
                            ? "text-yellow-500 fill-current"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <p className="text-blue-700 font-medium">
                    {testimonials[activeIndex].destination}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[activeIndex].date}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contrôles de navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={goToPrev}
              className="w-12 h-12 rounded-full bg-white shadow-md hover:bg-blue-50 flex items-center justify-center transition-all duration-300"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft size={24} className="text-blue-700" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-blue-700 w-6"
                      : "bg-blue-200 hover:bg-blue-300"
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-white shadow-md hover:bg-blue-50 flex items-center justify-center transition-all duration-300"
              aria-label="Témoignage suivant"
            >
              <ChevronRight size={24} className="text-blue-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

// src/components/pages/BlogPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronRight, Tag, Calendar, User } from "lucide-react";

const BlogPage = ({ posts = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Sample blog posts if none provided
  const defaultPosts =
    posts.length > 0
      ? posts
      : [
          {
            id: 1,
            title: "Top 10 destinations à visiter en 2025",
            excerpt:
              "Découvrez notre sélection des destinations tendances qui marqueront l'année 2025, des plages paradisiaques aux villes culturelles.",
            image:
              "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
            category: "destinations",
            date: "2025-02-15",
            author: "Sophie Martin",
            tags: ["voyage", "destinations", "tendances"],
          },
          {
            id: 2,
            title: "Comment voyager de façon écoresponsable",
            excerpt:
              "Nos conseils et astuces pour réduire votre impact environnemental tout en profitant pleinement de vos voyages à travers le monde.",
            image:
              "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
            category: "conseils",
            date: "2025-01-28",
            author: "Thomas Dubois",
            tags: ["écologie", "conseils", "tourisme durable"],
          },
          {
            id: 3,
            title: "Guide complet: Safari en Tanzanie",
            excerpt:
              "Tout ce que vous devez savoir pour préparer un safari inoubliable en Tanzanie, de la meilleure période aux parcs à ne pas manquer.",
            image:
              "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
            category: "guides",
            date: "2025-01-10",
            author: "Emma Laurent",
            tags: ["afrique", "safari", "animaux", "tanzanie"],
          },
          {
            id: 4,
            title: "Les plus beaux hôtels boutique d'Europe",
            excerpt:
              "Notre sélection d'hôtels boutique alliant charme, authenticité et service personnalisé pour un séjour mémorable en Europe.",
            image:
              "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
            category: "hébergement",
            date: "2024-12-05",
            author: "Sophie Martin",
            tags: ["hôtels", "europe", "luxe"],
          },
          {
            id: 5,
            title: "Cuisine du monde: 5 recettes à rapporter de vos voyages",
            excerpt:
              "Prolongez vos voyages en cuisine avec ces 5 recettes emblématiques faciles à reproduire chez vous.",
            image:
              "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
            category: "culture",
            date: "2024-11-20",
            author: "Thomas Dubois",
            tags: ["gastronomie", "recettes", "cuisine"],
          },
        ];

  // Extract all categories from posts
  const categories = [
    "all",
    ...new Set(defaultPosts.map((post) => post.category)),
  ];

  // Filter posts based on search term and active category
  const filteredPosts = defaultPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Format date to French style
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Notre Blog
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Conseils de voyage, guides de destinations, récits d'aventures et bien
          plus pour inspirer vos prochains voyages.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category === "all"
                ? "Tous"
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  onError={(e) => {
                    e.target.src = `https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg`;
                    e.target.alt = "Image indisponible";
                  }}
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-blue-900 mb-2">
                  <Link to={`/blog/${post.id}`} className="hover:text-blue-700">
                    {post.title}
                  </Link>
                </h2>

                <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/blog/${post.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Lire l'article
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-600 mb-4">
            Aucun article ne correspond à votre recherche.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setActiveCategory("all");
            }}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}

      {/* Newsletter Signup */}
      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-3">
          Restez inspiré
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Inscrivez-vous à notre newsletter pour recevoir nos derniers articles,
          conseils de voyage et offres exclusives directement dans votre boîte
          mail.
        </p>
        <div className="flex flex-col sm:flex-row max-w-md mx-auto">
          <input
            type="email"
            placeholder="Votre adresse email"
            className="flex-grow px-4 py-2 rounded-l-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:rounded-r-none"
          />
          <button className="mt-2 sm:mt-0 bg-blue-600 text-white px-6 py-2 rounded-md sm:rounded-l-none font-medium hover:bg-blue-700 transition-colors">
            S'inscrire
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

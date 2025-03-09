import React from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, ChevronRight } from "lucide-react";

const BlogPreviewSection = () => {
  // Données simulées des articles de blog
  const blogPosts = [
    {
      id: 1,
      title: "Les 10 plus belles plages cachées de Thaïlande",
      excerpt:
        "Découvrez des joyaux cachés loin des foules touristiques pour profiter pleinement du paradis thaïlandais.",
      image:
        "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
      category: "Destinations",
      date: "28 février 2025",
      author: "Marie Laurent",
      authorAvatar:
        "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
    },
    // {
    //   id: 2,
    //   title: "Guide complet pour un safari inoubliable en Tanzanie",
    //   excerpt:
    //     "Tout ce que vous devez savoir pour organiser votre safari dans le Serengeti et observer la grande migration.",
    //   image:
    //     "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
    //   category: "Guides",
    //   date: "15 février 2025",
    //   author: "Thomas Renaud",
    //   authorAvatar:
    //     "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
    // },
    {
      id: 3,
      title: "Comment voyager de manière responsable et durable en 2025",
      excerpt:
        "Nos conseils pour réduire votre empreinte carbone tout en découvrant le monde et en soutenant les économies locales.",
      image:
        "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
      category: "Conseils",
      date: "3 février 2025",
      author: "Sophie Mercier",
      authorAvatar:
        "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
    },
  ];

  // Article principal (featured)
  const featuredPost = blogPosts[0];
  // Articles secondaires
  const secondaryPosts = blogPosts.slice(1);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Blog <span className="text-blue-600">Voyages</span>
            </h2>
            <p className="text-gray-600 max-w-xl">
              Inspirations, conseils pratiques et récits d'expériences pour
              préparer votre prochain voyage.
            </p>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-700 font-medium mt-4 md:mt-0 hover:text-blue-800 transition-colors"
          >
            Voir tous les articles
            <ChevronRight size={18} className="ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Article principal */}
          <div className="lg:col-span-2">
            <Link
              to={`/blog/${featuredPost.id}`}
              className="group block h-full overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="relative overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded-full">
                  {featuredPost.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {featuredPost.title}
                </h3>

                <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center">
                    <img
                      src={featuredPost.authorAvatar}
                      alt={featuredPost.author}
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <span className="text-sm text-gray-600">
                      {featuredPost.author}
                    </span>
                  </div>

                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    <span>{featuredPost.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Articles secondaires */}
          <div className="lg:col-span-1 space-y-6">
            {secondaryPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group flex flex-col sm:flex-row lg:flex-col overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white h-full"
              >
                <div className="relative overflow-hidden sm:w-1/3 lg:w-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold py-1 px-2 rounded-full">
                    {post.category}
                  </div>
                </div>

                <div className="p-4 sm:w-2/3 lg:w-full">
                  <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center">
                      <img
                        src={post.authorAvatar}
                        alt={post.author}
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <span className="text-xs text-gray-600">
                        {post.author}
                      </span>
                    </div>

                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar size={12} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Appel à l'action */}
        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition-all duration-300"
          >
            Découvrir plus d'articles
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;

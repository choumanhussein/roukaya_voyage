// src/components/pages/BlogPostPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  User,
  Tag,
  Clock,
  ArrowLeft,
  Share2,
  Heart,
  MessageSquare,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
} from "lucide-react";

const BlogPostPage = ({ posts = [] }) => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // Sample posts data if none provided
  const defaultPosts =
    posts.length > 0
      ? posts
      : [
          {
            id: 1,
            title: "Top 10 destinations à visiter en 2025",
            excerpt:
              "Découvrez notre sélection des destinations tendances qui marqueront l'année 2025, des plages paradisiaques aux villes culturelles.",
            image: "/images/blog/destinations-2025.jpg",
            category: "destinations",
            date: "2025-02-15",
            author: "Sophie Martin",
            authorAvatar:
              "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
            readTime: 8,
            tags: ["voyage", "destinations", "tendances"],
            content: `
        <p>L'année 2025 s'annonce riche en découvertes pour les voyageurs en quête de nouvelles expériences. Que vous soyez passionné par les paysages grandioses, les villes culturelles ou les plages paradisiaques, notre sélection des destinations incontournables saura vous inspirer pour vos prochaines aventures.</p>
        
        <h2>1. Kyoto, Japon</h2>
        <p>Avec ses temples millénaires, ses jardins zen et ses ruelles traditionnelles, Kyoto reste une destination intemporelle. En 2025, la ville célèbrera le 1200ème anniversaire du temple Kiyomizu-dera avec des festivités exceptionnelles. C'est le moment idéal pour découvrir cette ville où tradition et modernité s'entremêlent harmonieusement.</p>
        
        <h2>2. Cartagena, Colombie</h2>
        <p>Cette perle des Caraïbes séduit par son centre historique classé au patrimoine mondial de l'UNESCO, ses façades colorées et sa vie nocturne animée. La gastronomie locale, mêlant influences caribéennes, espagnoles et africaines, est un véritable délice pour les papilles.</p>
        
        <h2>3. Ljubljana, Slovénie</h2>
        <p>Capitale verte de l'Europe, Ljubljana surprend par son engagement écologique, ses espaces verts abondants et son centre-ville sans voiture. Idéale pour un city-break, cette ville à taille humaine permet également d'explorer facilement les merveilles naturelles de la Slovénie, du lac de Bled aux grottes de Postojna.</p>
        
        <h2>4. Marrakech, Maroc</h2>
        <p>Entre les couleurs vives de ses souks, les senteurs envoûtantes de ses épices et la beauté de ses palais, Marrakech est une expérience sensorielle unique. En 2025, la ville accueillera plusieurs événements culturels majeurs qui mettront en valeur l'artisanat traditionnel marocain.</p>
        
        <h2>5. Queenstown, Nouvelle-Zélande</h2>
        <p>Pour les amateurs de sensations fortes et de paysages époustouflants, Queenstown est la destination rêvée. Entourée par les majestueuses montagnes des Remarkables, cette ville offre d'innombrables activités outdoor, du saut à l'élastique aux randonnées spectaculaires, en passant par le ski en hiver.</p>
        
        <p>Notre top 10 continue avec d'autres destinations exceptionnelles comme Porto (Portugal), Hoi An (Vietnam), Zanzibar (Tanzanie), Mexico City (Mexique) et enfin l'île de Milos (Grèce) qui complète ce panorama des lieux à ne pas manquer en 2025.</p>
        
        <p>Quelle que soit votre destination de rêve, n'oubliez pas que voyager de manière responsable est essentiel pour préserver ces merveilles pour les générations futures. Privilégiez les hébergements écoresponsables, respectez les cultures locales et limitez votre empreinte environnementale.</p>
      `,
            relatedPosts: [2, 3, 5],
          },
          {
            id: 2,
            title: "Comment voyager de façon écoresponsable",
            excerpt:
              "Nos conseils et astuces pour réduire votre impact environnemental tout en profitant pleinement de vos voyages à travers le monde.",
            image: "/images/blog/eco-voyage.jpg",
            category: "conseils",
            date: "2025-01-28",
            author: "Thomas Dubois",
            authorAvatar:
              "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
            readTime: 6,
            tags: ["écologie", "conseils", "tourisme durable"],
            relatedPosts: [1, 4, 5],
          },
          {
            id: 3,
            title: "Guide complet: Safari en Tanzanie",
            excerpt:
              "Tout ce que vous devez savoir pour préparer un safari inoubliable en Tanzanie, de la meilleure période aux parcs à ne pas manquer.",
            image: "/images/blog/safari-tanzanie.jpg",
            category: "guides",
            date: "2025-01-10",
            author: "Emma Laurent",
            authorAvatar: "/images/team/emma.jpg",
            readTime: 10,
            tags: ["afrique", "safari", "animaux", "tanzanie"],
            relatedPosts: [1, 2, 5],
          },
          {
            id: 4,
            title: "Les plus beaux hôtels boutique d'Europe",
            excerpt:
              "Notre sélection d'hôtels boutique alliant charme, authenticité et service personnalisé pour un séjour mémorable en Europe.",
            image: "/images/blog/hotels-boutique.jpg",
            category: "hébergement",
            date: "2024-12-05",
            author: "Sophie Martin",
            authorAvatar:
              "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
            readTime: 7,
            tags: ["hôtels", "europe", "luxe"],
            relatedPosts: [1, 2, 5],
          },
          {
            id: 5,
            title: "Cuisine du monde: 5 recettes à rapporter de vos voyages",
            excerpt:
              "Prolongez vos voyages en cuisine avec ces 5 recettes emblématiques faciles à reproduire chez vous.",
            image: "/images/blog/cuisine-monde.jpg",
            category: "culture",
            date: "2024-11-20",
            author: "Thomas Dubois",
            authorAvatar:
              "https://www.qantas.com/content/travelinsider/en/explore/asia/indonesia/bali/what-to-know-before-you-go-to-bali/jcr:content/parsysContent/contentFragment/par43/calltoaction/image.img.480.medium.jpg/1651583179701.jpg",
            readTime: 5,
            tags: ["gastronomie", "recettes", "cuisine"],
            relatedPosts: [1, 2, 3],
          },
        ];

  // Format date to French style
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
  };

  // Find current post and related posts when component mounts or id changes
  useEffect(() => {
    setLoading(true);
    // Simulate API fetch
    setTimeout(() => {
      const foundPost = defaultPosts.find((p) => p.id === Number(id));
      setPost(foundPost);
      setLoading(false);
    }, 300);
  }, [id]);

  // Handle share link copy
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  // Get related posts
  const getRelatedPosts = () => {
    if (!post || !post.relatedPosts) return [];
    return defaultPosts.filter((p) => post.relatedPosts.includes(p.id));
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse mx-auto mb-4"></div>
        <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse mx-auto mb-8"></div>
        <div className="h-64 bg-gray-200 rounded animate-pulse mb-6"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Article introuvable
        </h1>
        <p className="text-gray-600 mb-6">
          L'article que vous recherchez n'existe pas ou a été déplacé.
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour au blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour au blog
        </Link>
      </div>

      <article className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime} min de lecture
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            {post.title}
          </h1>

          <div className="flex items-center">
            <img
              src={post.authorAvatar}
              alt={post.author}
              className="w-10 h-10 rounded-full mr-4"
              onError={(e) => {
                e.target.src = `/api/placeholder/40/40`;
                e.target.alt = "Avatar";
              }}
            />
            <div>
              <p className="font-medium">{post.author}</p>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                {formatDate(post.date)}
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto object-cover"
            onError={(e) => {
              e.target.src = `/api/placeholder/800/400`;
              e.target.alt = "Image indisponible";
            }}
          />
        </div>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
            >
              <Tag className="h-4 w-4 mr-1" />
              {tag}
            </span>
          ))}
        </div>

        {/* Engagement */}
        <div className="flex justify-between items-center py-4 border-t border-b border-gray-200 mb-8">
          <button
            onClick={() => setLiked(!liked)}
            className={`flex items-center ${
              liked ? "text-red-500" : "text-gray-500"
            } hover:text-red-500 transition-colors`}
          >
            <Heart className={`h-5 w-5 mr-2 ${liked ? "fill-current" : ""}`} />
            J'aime
          </button>

          <div className="flex items-center space-x-3">
            <p className="text-sm text-gray-500 mr-2">Partager:</p>
            <button
              className="text-blue-600 hover:text-blue-800"
              aria-label="Partager sur Facebook"
            >
              <Facebook className="h-5 w-5" />
            </button>
            <button
              className="text-blue-400 hover:text-blue-600"
              aria-label="Partager sur Twitter"
            >
              <Twitter className="h-5 w-5" />
            </button>
            <button
              className="text-blue-700 hover:text-blue-900"
              aria-label="Partager sur LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </button>
            <button
              onClick={copyToClipboard}
              className="text-gray-500 hover:text-gray-700 relative"
              aria-label="Copier le lien"
            >
              <Copy className="h-5 w-5" />
              {copySuccess && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                  Lien copié!
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Author */}
        <div className="bg-blue-50 rounded-lg p-6 mb-12">
          <div className="flex items-center mb-4">
            <img
              src={post.authorAvatar}
              alt={post.author}
              className="w-16 h-16 rounded-full mr-4"
              onError={(e) => {
                e.target.src = `/api/placeholder/64/64`;
                e.target.alt = "Avatar";
              }}
            />
            <div>
              <h3 className="font-bold text-lg">À propos de {post.author}</h3>
              <p className="text-gray-600 text-sm">
                Passionné de voyage et d'aventure
              </p>
            </div>
          </div>
          <p className="text-gray-600">
            Explorateur infatigable, {post.author} parcourt le monde à la
            recherche d'expériences authentiques et de rencontres
            enrichissantes. À travers ses articles, il partage ses découvertes
            et ses conseils pour vous inspirer dans vos prochains voyages.
          </p>
        </div>

        {/* Related Posts */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Articles similaires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getRelatedPosts().map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.id}`}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col">
                  <div className="h-40 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                      onError={(e) => {
                        e.target.src = `/api/placeholder/400/200`;
                        e.target.alt = "Image indisponible";
                      }}
                    />
                  </div>
                  <div className="p-4 flex-grow">
                    <p className="text-sm text-gray-500 mb-2">
                      {formatDate(relatedPost.date)}
                    </p>
                    <h3 className="font-bold text-blue-900 group-hover:text-blue-700 mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Comments Section */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold text-blue-900 mr-2">
              Commentaires
            </h2>
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm">
              3
            </span>
          </div>

          <div className="space-y-6 mb-8">
            {/* Comment Form */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-4 flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Laisser un commentaire
              </h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Commentaire
                  </label>
                  <textarea
                    id="comment"
                    rows="4"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  Publier le commentaire
                </button>
              </form>
            </div>

            {/* Sample Comments */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex mb-4">
                <img
                  src="/api/placeholder/40/40"
                  alt="Commentateur"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <div className="flex items-center mb-1">
                    <h4 className="font-bold mr-2">Marie Dupont</h4>
                    <span className="text-sm text-gray-500">
                      Il y a 2 jours
                    </span>
                  </div>
                  <p className="text-gray-700 mb-2">
                    Super article ! J'ai visité Kyoto l'année dernière et c'est
                    vraiment une destination magique. J'ajouterais le temple
                    Fushimi Inari à ne pas manquer !
                  </p>
                  <button className="text-blue-600 text-sm hover:text-blue-800">
                    Répondre
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex mb-4">
                <img
                  src="/api/placeholder/40/40"
                  alt="Commentateur"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <div className="flex items-center mb-1">
                    <h4 className="font-bold mr-2">Jean Martin</h4>
                    <span className="text-sm text-gray-500">
                      Il y a 3 jours
                    </span>
                  </div>
                  <p className="text-gray-700 mb-2">
                    Très inspirant ! J'hésite entre Marrakech et Ljubljana pour
                    mon prochain voyage. Des conseils sur la meilleure période
                    pour visiter la Slovénie ?
                  </p>
                  <button className="text-blue-600 text-sm hover:text-blue-800">
                    Répondre
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;

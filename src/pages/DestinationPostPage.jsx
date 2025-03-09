// src/pages/DestinationPostPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  User,
  Clock,
  Tag,
  Share2,
  ArrowLeft,
  Loader,
} from "lucide-react";
import CommentSection from "../components/blog/CommentSection";

const DestinationPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simuler un chargement d'article
    const fetchPost = async () => {
      setLoading(true);
      try {
        // Dans un environnement réel, vous feriez un appel API
        // Simulation avec setTimeout et données fictives
        setTimeout(() => {
          const mockPost = {
            id: id,
            title: "Découvrez les merveilles cachées de Bali",
            category: "Asie",
            date: "12 février 2025",
            author: "Sophie Martin",
            authorAvatar: "/avatar-placeholder.jpg",
            location: "Bali, Indonésie",
            image: "/api/placeholder/1200/600",
            content: (
              <div>
                <p className="mb-4">
                  Située au cœur de l'archipel indonésien, Bali est bien plus
                  qu'une simple destination de plage. Surnommée "l'île des
                  dieux", elle abrite une culture riche, des paysages
                  époustouflants et une spiritualité omniprésente qui séduisent
                  les voyageurs du monde entier.
                </p>

                <h2 className="text-xl font-bold text-blue-900 mt-6 mb-3">
                  Une nature luxuriante à explorer
                </h2>
                <p className="mb-4">
                  Des rizières en terrasses de Tegallalang aux plages de sable
                  noir du nord, en passant par les cascades cachées de Munduk,
                  Bali offre une diversité de paysages impressionnante. La
                  jungle dense abrite des temples centenaires, tandis que les
                  volcans majestueux comme le Mont Batur et le Mont Agung
                  dominent l'horizon.
                </p>

                <h2 className="text-xl font-bold text-blue-900 mt-6 mb-3">
                  Une immersion culturelle unique
                </h2>
                <p className="mb-4">
                  La culture balinaise, imprégnée d'hindouisme, se manifeste
                  dans chaque aspect de la vie quotidienne. Les offrandes
                  quotidiennes (canang sari) déposées devant les maisons, les
                  nombreuses cérémonies religieuses et les danses
                  traditionnelles comme le Legong ou le Barong sont autant
                  d'occasions de s'immerger dans cette richesse culturelle.
                </p>

                <h2 className="text-xl font-bold text-blue-900 mt-6 mb-3">
                  Ubud, le cœur culturel de l'île
                </h2>
                <p className="mb-4">
                  Nichée dans les collines, Ubud est considérée comme le centre
                  artistique et spirituel de Bali. Ses galeries d'art, ses
                  ateliers d'artisans et son fameux marché en font un lieu
                  incontournable. Ne manquez pas de visiter la Monkey Forest,
                  une réserve naturelle abritant des centaines de macaques,
                  ainsi que le palais royal Puri Saren Agung.
                </p>

                <p className="mb-4">
                  Que vous soyez en quête de détente sur les plages de Kuta,
                  d'aventures dans la jungle de Munduk, ou d'une retraite
                  spirituelle à Ubud, Bali saura vous séduire par sa diversité
                  et son authenticité.
                </p>
              </div>
            ),
            tags: ["Bali", "Indonésie", "Culture", "Nature", "Temples"],
            relatedPosts: [
              {
                id: "2",
                title: "Les plus belles plages de Thaïlande",
                image: "/api/placeholder/400/300",
              },
              {
                id: "3",
                title: "Guide complet du Japon en automne",
                image: "/api/placeholder/400/300",
              },
            ],
            comments: [
              {
                id: 1,
                author: "Jean Dupont",
                date: "15 février 2025",
                text: "Superbe article qui me donne envie de découvrir Bali! Avez-vous des recommandations d'hébergement dans la région d'Ubud?",
                avatar: "/avatar-placeholder.jpg",
              },
              {
                id: 2,
                author: "Marie Lambert",
                date: "16 février 2025",
                text: "J'ai visité Bali l'année dernière et je confirme que c'est un endroit magique. N'oubliez pas de visiter les temples de Tanah Lot et Uluwatu, ils sont spectaculaires au coucher du soleil!",
                avatar: "/avatar-placeholder.jpg",
              },
            ],
          };

          setPost(mockPost);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Erreur lors du chargement de l'article:", error);
        setError(
          "Impossible de charger l'article. Veuillez réessayer plus tard."
        );
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <Loader size={40} className="text-blue-700 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-20 flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Erreur</h2>
        <p className="text-gray-600 mb-6">{error}</p>
        <Link
          to="/blog"
          className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
        >
          Retour au blog
        </Link>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Article non trouvé
        </h2>
        <p className="text-gray-600 mb-6">
          L'article que vous recherchez n'existe pas ou a été supprimé.
        </p>
        <Link
          to="/blog"
          className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
        >
          Parcourir le blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Lien de retour */}
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-700 hover:text-blue-800 mb-6"
        >
          <ArrowLeft size={18} className="mr-2" />
          Retour au blog
        </Link>

        <article className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Image de couverture */}
          <div className="relative h-72 md:h-96">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            {post.category && (
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded-full">
                {post.category}
              </div>
            )}
          </div>

          <div className="p-6 md:p-8">
            {/* En-tête */}
            <div className="mb-6">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center text-sm text-gray-600 gap-4">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  <span>{post.date}</span>
                </div>

                <div className="flex items-center">
                  <User size={16} className="mr-1" />
                  <span>{post.author}</span>
                </div>

                {post.location && (
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span>{post.location}</span>
                  </div>
                )}

                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  <span>5 min de lecture</span>
                </div>
              </div>
            </div>

            {/* Contenu */}
            <div className="prose max-w-none mb-8">{post.content}</div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex items-center flex-wrap gap-2 mb-8">
                <Tag size={18} className="text-gray-500" />
                {post.tags.map((tag, index) => (
                  <Link
                    key={index}
                    to={`/blog/tag/${tag.toLowerCase()}`}
                    className="bg-gray-100 text-gray-700 text-xs py-1 px-2 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}

            {/* Partage */}
            <div className="flex justify-end mb-8">
              <button className="flex items-center text-blue-700 hover:text-blue-800 font-medium">
                <Share2 size={18} className="mr-1" />
                Partager
              </button>
            </div>

            {/* Articles liés */}
            {post.relatedPosts && post.relatedPosts.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Articles liés
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {post.relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.id}`}
                      className="flex items-center bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors"
                    >
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-16 h-16 object-cover rounded-md mr-3"
                      />
                      <h4 className="font-medium text-blue-900">
                        {relatedPost.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Commentaires */}
            <CommentSection postId={post.id} comments={post.comments} />
          </div>
        </article>
      </div>
    </div>
  );
};

export default DestinationPostPage;

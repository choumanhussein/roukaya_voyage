// src/components/blog/BlogPost.jsx
import React from "react";
import { Calendar, User, MapPin, Tag, Share2 } from "lucide-react";
import CommentSection from "./CommentSection";

const BlogPost = ({ post }) => {
  if (!post) return null;

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* Image de couverture */}
      <div className="relative h-72 md:h-96">
        <img
          src={post.image || "/placeholder-wide.jpg"}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 md:p-8">
        {/* En-tête */}
        <div className="mb-6">
          {post.category && (
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium py-1 px-2 rounded mb-2">
              {post.category}
            </span>
          )}

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
          </div>
        </div>

        {/* Contenu */}
        <div className="prose max-w-none mb-8">{post.content}</div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex items-center flex-wrap gap-2 mb-8">
            <Tag size={18} className="text-gray-500" />
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 text-xs py-1 px-2 rounded-full"
              >
                {tag}
              </span>
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

        {/* Commentaires */}
        <CommentSection postId={post.id} comments={post.comments} />
      </div>
    </article>
  );
};

export default BlogPost;

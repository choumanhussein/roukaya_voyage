// src/components/blog/BlogCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";

const BlogCard = ({ post }) => {
  return (
    <Link to={`/blog/${post.id}`} className="block group">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="relative overflow-hidden">
          <img
            src={post.image || "/placeholder.jpg"}
            alt={post.title}
            className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          {post.category && (
            <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded-full">
              {post.category}
            </div>
          )}
        </div>

        <div className="p-5">
          <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
            {post.title}
          </h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={post.authorAvatar || "/avatar-placeholder.jpg"}
                alt={post.author}
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="text-sm text-gray-600">{post.author}</span>
            </div>

            <div className="flex items-center text-gray-500 text-sm">
              <Calendar size={14} className="mr-1" />
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

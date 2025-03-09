// src/components/blog/BlogList.jsx
import React from "react";
import BlogCard from "./BlogCard";

const BlogList = ({ posts, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <h3 className="text-xl font-medium text-gray-900 mb-2">
          Aucun article disponible
        </h3>
        <p className="text-gray-600">
          Revenez bientôt pour découvrir nos nouveaux articles.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;

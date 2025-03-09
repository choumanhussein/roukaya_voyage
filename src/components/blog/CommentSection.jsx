// src/components/blog/CommentSection.jsx
import React, { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

const CommentSection = ({ postId, comments = [] }) => {
  const [commentText, setCommentText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [localComments, setLocalComments] = useState(comments);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    setIsSubmitting(true);

    // Simuler l'envoi du commentaire
    setTimeout(() => {
      const newComment = {
        id: Date.now(),
        author: "Vous",
        date: new Date().toLocaleDateString(),
        text: commentText,
        avatar: "/avatar-placeholder.jpg",
      };

      setLocalComments([...localComments, newComment]);
      setCommentText("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div>
      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
        <MessageCircle size={20} className="mr-2" />
        Commentaires ({localComments.length})
      </h3>

      {/* Liste des commentaires */}
      <div className="space-y-6 mb-8">
        {localComments.length === 0 ? (
          <p className="text-gray-500 italic">Soyez le premier à commenter</p>
        ) : (
          localComments.map((comment) => (
            <div key={comment.id} className="border-b pb-4">
              <div className="flex items-start mb-2">
                <img
                  src={comment.avatar || "/avatar-placeholder.jpg"}
                  alt={comment.author}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="flex items-baseline">
                    <h4 className="font-medium text-blue-900 mr-2">
                      {comment.author}
                    </h4>
                    <span className="text-xs text-gray-500">
                      {comment.date}
                    </span>
                  </div>
                  <p className="text-gray-700 mt-1">{comment.text}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Formulaire de commentaire */}
      <form onSubmit={handleSubmit} className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-3">
          Laisser un commentaire
        </h4>
        <div className="mb-4">
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows="3"
            placeholder="Votre commentaire..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors"
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin mr-2">⟳</span>
                Envoi...
              </>
            ) : (
              <>
                <span>Commenter</span>
                <Send size={16} className="ml-2" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentSection;

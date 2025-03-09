// src/pages/NotFoundPage.jsx
// Page d'erreur 404

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Search, Phone } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 flex flex-col items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full text-center"
      >
        <div className="mb-8">
          <div className="relative inline-block">
            <span className="text-9xl font-bold text-blue-900">4</span>
            <motion.div
              className="absolute top-14 left-16"
              animate={{
                rotate: [0, 10, -10, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>
            <span className="text-9xl font-bold text-blue-900">4</span>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          Page introuvable
        </h1>
        <p className="text-gray-600 mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée. Nous vous
          invitons à revenir à la page d'accueil ou à utiliser notre moteur de
          recherche.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors"
          >
            <Home size={18} className="mr-2" />
            Retour à l'accueil
          </Link>

          <Link
            to="/search"
            className="bg-white border border-blue-700 text-blue-700 hover:bg-blue-50 py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors"
          >
            <Search size={18} className="mr-2" />
            Rechercher un voyage
          </Link>
        </div>

        <div className="mt-12 p-4 bg-blue-50 rounded-lg inline-block">
          <p className="text-blue-800 flex items-center">
            <Phone size={18} className="mr-2" />
            Besoin d'aide ?{" "}
            <a href="/contact" className="ml-1 font-medium underline">
              Contactez-nous
            </a>
          </p>
        </div>
      </motion.div>

      {/* Background elements */}
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-100 to-transparent opacity-50 pointer-events-none"></div>

      <motion.div
        className="absolute top-1/4 left-1/4 h-16 w-16 rounded-full bg-blue-200 opacity-20 pointer-events-none"
        animate={{
          y: [0, 30, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      ></motion.div>

      <motion.div
        className="absolute bottom-1/4 right-1/3 h-24 w-24 rounded-full bg-blue-300 opacity-20 pointer-events-none"
        animate={{
          y: [0, -40, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
      ></motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4 h-12 w-12 rounded-full bg-blue-400 opacity-10 pointer-events-none"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      ></motion.div>
    </div>
  );
};

export default NotFoundPage;

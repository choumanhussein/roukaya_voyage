// src/pages/LoginPage.jsx
// Page de connexion

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import LoginForm from "../components/account/LoginForm";
import { useAuth } from "../hooks/useAuth";
import { motion } from "framer-motion";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (credentials) => {
    try {
      await login(credentials);
      navigate("/account"); // Redirection vers le tableau de bord
    } catch (error) {
      console.error("Erreur de connexion:", error);
      // L'erreur est gérée dans le contexte d'authentification
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8"
      >
        <div className="text-center">
          <Link to="/">
            <img
              className="mx-auto h-14"
              src="/api/placeholder/150/60"
              alt="Roukaya Voyage"
            />
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-blue-900">
            Connexion à votre compte
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Accédez à vos réservations et préférences de voyage
          </p>
        </div>

        <LoginForm onSubmit={handleLogin} />

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Vous n'avez pas de compte ?
            <Link
              to="/register"
              className="ml-1 font-medium text-blue-600 hover:text-blue-500"
            >
              S'inscrire
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;

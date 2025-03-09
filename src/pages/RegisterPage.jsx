// src/pages/RegisterPage.jsx
// Page d'inscription

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import RegisterForm from "../components/account/RegisterForm";
import { useAuth } from "../hooks/useAuth";
import { motion } from "framer-motion";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleRegister = async (userData) => {
    try {
      await register(userData);
      navigate("/account"); // Redirection vers le tableau de bord
    } catch (error) {
      console.error("Erreur d'inscription:", error);
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
            Créer un compte
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Rejoignez-nous pour vivre des expériences de voyage uniques
          </p>
        </div>

        <RegisterForm onSubmit={handleRegister} />

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Vous avez déjà un compte ?
            <Link
              to="/login"
              className="ml-1 font-medium text-blue-600 hover:text-blue-500"
            >
              Se connecter
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;

// src/pages/ContactPage.jsx
// Page de contact

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { sendContactMessage } from "../services/contact";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Réinitialiser l'erreur pour ce champ
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "L'email n'est pas valide";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Le sujet est requis";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Le message doit comporter au moins 10 caractères";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus("submitting");

    try {
      // Simuler un envoi de formulaire (à remplacer par un appel API réel)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Appel API réel (à décommenter dans un environnement de production)
      // await sendContactMessage(formData);

      setFormStatus("success");

      // Réinitialiser le formulaire après 3 secondes
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setFormStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      setFormStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero section */}
      <div className="bg-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contactez-nous
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Notre équipe est disponible pour répondre à vos questions et vous
            accompagner dans la préparation de votre prochain voyage.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Informations de contact */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
              <div className="p-6 bg-blue-800 text-white">
                <h2 className="text-xl font-bold mb-2">Restons en contact</h2>
                <p className="text-blue-200">
                  N'hésitez pas à nous contacter par téléphone, email ou en
                  remplissant le formulaire ci-contre.
                </p>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      Téléphone
                    </h3>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Lun-Ven: 9h-19h | Sam: 10h-17h
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">contact@roukaya-voyage.com</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Nous répondons sous 24h
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      123 Avenue des Voyages
                      <br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <MessageCircle className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      Chat en direct
                    </h3>
                    <p className="text-gray-600">
                      Discutez avec nos conseillers en ligne
                    </p>
                    <button className="mt-2 text-sm text-blue-700 font-medium flex items-center">
                      Démarrer un chat
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-200">
                <h3 className="font-medium text-gray-900 mb-4">Suivez-nous</h3>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="bg-gray-100 hover:bg-blue-100 transition-colors w-10 h-10 rounded-full flex items-center justify-center"
                  >
                    <svg
                      className="h-5 w-5 text-blue-700"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 hover:bg-blue-100 transition-colors w-10 h-10 rounded-full flex items-center justify-center"
                  >
                    <svg
                      className="h-5 w-5 text-blue-700"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 hover:bg-blue-100 transition-colors w-10 h-10 rounded-full flex items-center justify-center"
                  >
                    <svg
                      className="h-5 w-5 text-blue-700"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 hover:bg-blue-100 transition-colors w-10 h-10 rounded-full flex items-center justify-center"
                  >
                    <svg
                      className="h-5 w-5 text-blue-700"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-xl font-bold text-blue-900">
                  Envoyez-nous un message
                </h2>
                <p className="text-gray-600">
                  Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>

              <div className="p-6">
                {formStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <CheckCircle size={48} className="text-green-500" />
                    </div>
                    <h3 className="text-lg font-medium text-green-800 mb-2">
                      Message envoyé avec succès !
                    </h3>
                    <p className="text-green-700">
                      Merci de nous avoir contactés. Notre équipe vous répondra
                      dans les plus brefs délais.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className={`w-full p-3 border ${
                            errors.name
                              ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                              : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                          } rounded-lg`}
                          placeholder="Votre nom"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className={`w-full p-3 border ${
                            errors.email
                              ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                              : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                          } rounded-lg`}
                          placeholder="Votre email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Téléphone{" "}
                          <span className="text-gray-400">(Optionnel)</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Votre numéro de téléphone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Sujet *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          className={`w-full p-3 border ${
                            errors.subject
                              ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                              : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                          } rounded-lg`}
                          value={formData.subject}
                          onChange={handleChange}
                        >
                          <option value="">Sélectionnez un sujet</option>
                          <option value="reservation">Réservation</option>
                          <option value="information">
                            Demande d'information
                          </option>
                          <option value="devis">Demande de devis</option>
                          <option value="reclamation">Réclamation</option>
                          <option value="autre">Autre</option>
                        </select>
                        {errors.subject && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.subject}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className={`w-full p-3 border ${
                          errors.message
                            ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                            : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        } rounded-lg`}
                        placeholder="Votre message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center space-x-2 mb-6"></div>
                    <div className="flex items-center space-x-2 mb-6">
                      <input
                        id="privacy"
                        name="privacy"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        required
                      />
                      <label
                        htmlFor="privacy"
                        className="text-sm text-gray-600"
                      >
                        J'accepte que mes données soient traitées conformément à
                        la{" "}
                        <a
                          href="/privacy"
                          className="text-blue-700 hover:underline"
                        >
                          politique de confidentialité
                        </a>
                        .
                      </label>
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors w-full md:w-auto"
                      >
                        {formStatus === "submitting" ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Envoi en cours...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Envoyer
                            <Send size={18} className="ml-2" />
                          </span>
                        )}
                      </button>

                      {formStatus === "error" && (
                        <p className="mt-2 text-sm text-red-600">
                          Une erreur s'est produite lors de l'envoi du message.
                          Veuillez réessayer ultérieurement.
                        </p>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Carte */}
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold text-blue-900">
                Où nous trouver
              </h2>
            </div>
            <div className="aspect-w-16 aspect-h-9 md:aspect-h-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.832815435505!2d-3.9840872241552137!3d5.288767736277314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ef62fc72b493%3A0xcef9345d2d9c8ec9!2sRoukaya%20Voyage%20and%20Touisme!5e0!3m2!1sfr!2sjp!4v1741534178861!5m2!1sfr!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Carte Google Maps de
                Roukaya Voyage"
              ></iframe>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold text-blue-900">
                Questions fréquentes
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>Comment puis-je réserver un voyage ?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Vous pouvez réserver un voyage directement sur notre site
                    web en utilisant notre moteur de recherche, ou en contactant
                    notre service client par téléphone ou email. Nous vous
                    accompagnerons tout au long du processus de réservation.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>
                      Quelles sont les modalités de paiement acceptées ?
                    </span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Nous acceptons les paiements par carte bancaire (Visa,
                    Mastercard, American Express), par virement bancaire et par
                    PayPal. Vous avez également la possibilité de payer en
                    plusieurs fois sans frais pour certaines destinations.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>Quelle est la politique d'annulation ?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Notre politique d'annulation varie selon les destinations et
                    les prestataires. En général, une annulation gratuite est
                    possible jusqu'à 30 jours avant le départ. Pour plus de
                    détails, veuillez consulter les conditions spécifiques de
                    chaque voyage ou contacter notre service client.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>Proposez-vous des assurances voyage ?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Oui, nous proposons différentes formules d'assurance voyage
                    : assurance annulation, assurance multirisque et assurance
                    assistance rapatriement. Nous vous recommandons vivement de
                    souscrire à une assurance pour voyager en toute sérénité.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>Comment obtenir un devis personnalisé ?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Pour obtenir un devis personnalisé, vous pouvez remplir
                    notre formulaire de demande de devis en ligne, ou contacter
                    directement notre équipe par téléphone ou email. Précisez
                    vos dates de voyage, le nombre de voyageurs et vos
                    préférences pour que nous puissions vous proposer une offre
                    sur mesure.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

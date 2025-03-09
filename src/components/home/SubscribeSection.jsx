import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simuler un appel API
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail("");

      // Réinitialiser après 5 secondes
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-20 bg-blue-700 relative overflow-hidden">
      {/* Éléments de design en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-blue-600 opacity-50"></div>
          <div className="absolute top-40 right-10 w-64 h-64 rounded-full bg-blue-500 opacity-30"></div>
          <div className="absolute -bottom-40 -right-20 w-80 h-80 rounded-full bg-blue-800 opacity-40"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-blue-900 opacity-10 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Restez informé de nos meilleures offres
          </h2>
          <p className="text-blue-100 mb-8 md:text-lg">
            Abonnez-vous à notre newsletter et recevez en avant-première nos
            offres exclusives, conseils de voyage et inspirations pour vos
            prochaines aventures.
          </p>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-4">
                <CheckCircle size={48} className="text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Merci pour votre inscription !
                </h3>
                <p className="text-blue-100">
                  Vous recevrez bientôt nos plus belles offres directement dans
                  votre boîte mail.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row gap-4"
              >
                <div className="flex-grow">
                  <label htmlFor="email-subscribe" className="sr-only">
                    Adresse email
                  </label>
                  <input
                    id="email-subscribe"
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-blue-300 border-opacity-30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="Votre adresse email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {error && (
                    <p className="mt-2 text-red-300 text-sm">{error}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-700"
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
                      Traitement...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      S'abonner
                      <Send size={18} className="ml-2" />
                    </span>
                  )}
                </button>
              </form>
            )}

            <p className="text-blue-100 text-sm mt-4 text-center">
              En vous inscrivant, vous acceptez de recevoir nos newsletters et
              offres commerciales. Vous pouvez vous désinscrire à tout moment.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { count: "50+", label: "Destinations" },
              { count: "15+", label: "Années d'expérience" },
              { count: "4.8/5", label: "Note moyenne" },
              { count: "10K+", label: "Clients satisfaits" },
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-2xl md:text-3xl font-bold mb-1">
                  {stat.count}
                </div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;

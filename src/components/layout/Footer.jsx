import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Send,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traiter l'inscription à la newsletter
    console.log("Newsletter subscription:", email);
    setEmail("");
    // Afficher une notification de confirmation
  };

  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Colonne 1: À propos */}
          <div>
            <img
              src="/api/placeholder/160/60"
              alt="Roukaya Voyage"
              className="h-10 mb-6"
            />
            <p className="text-blue-200 mb-6">
              Roukaya Voyage vous accompagne dans la découverte des plus belles
              destinations à travers le monde avec des offres personnalisées et
              un service de qualité.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-blue-800 hover:bg-blue-700 flex items-center justify-center transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-blue-800 hover:bg-blue-700 flex items-center justify-center transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-blue-800 hover:bg-blue-700 flex items-center justify-center transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-blue-800 hover:bg-blue-700 flex items-center justify-center transition-all"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Colonne 2: Liens rapides */}
          <div>
            <h3 className="text-lg font-bold mb-6">Liens rapides</h3>
            <ul className="space-y-3">
              {[
                { text: "Destinations populaires", href: "/destinations" },
                { text: "Offres spéciales", href: "/offers" },
                { text: "Dernière minute", href: "/last-minute" },
                { text: "À propos de nous", href: "/about" },
                { text: "Blog de voyage", href: "/blog" },
                { text: "Nous contacter", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-blue-200 hover:text-white transition-colors flex items-center"
                  >
                    <span className="mr-2">›</span>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contactez-nous</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 text-blue-300" size={18} />
                <span className="text-blue-200">
                  123 Avenue des Voyages
                  <br />
                  75001 Paris, France
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-blue-300" size={18} />
                <a
                  href="tel:+33123456789"
                  className="text-blue-200 hover:text-white"
                >
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-blue-300" size={18} />
                <a
                  href="mailto:contact@roukaya-voyage.com"
                  className="text-blue-200 hover:text-white"
                >
                  contact@roukaya-voyage.com
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4: Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-blue-200 mb-4">
              Abonnez-vous pour recevoir nos meilleures offres et conseils de
              voyage.
            </p>
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                required
                placeholder="Votre email"
                className="w-full py-3 px-4 pr-12 rounded-lg bg-blue-800 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-300 hover:text-white"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Bandeau de paiement */}
        <div className="border-t border-blue-800 pt-8 pb-6 mb-6">
          <div className="flex flex-wrap justify-center space-x-4">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_FrTaaaGEk9eULQpb355SxtAFizG5jleBqp_1q8j2dgMxqfHT"
              alt="Visa"
              className="h-8"
            />
            <img
              src="https://www.reussir-mon-ecommerce.fr/wp-content/uploads/2016/03/MasterCard-Logo-1-768x576.png"
              alt="Mastercard"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg"
              alt="American Express"
              className="h-8"
            />
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAOAMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABBgMFCAcABP/EADYQAAEDAwIDAwcNAAAAAAAAAAEAAgMEBREGEhMhMUFRYQcUcYGRodIXIiMyVHOCk6KxwcLR/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAECAwUGBP/EACkRAAICAgECBAYDAAAAAAAAAAABAgMEERIxUQUTIWFBcYGR0fAUFSL/2gAMAwEAAhEDEQA/AOyqREKACgAoGFIAoAKAIkxBQMT9R+Uazaeu0ltq4K2aeJrS8wMYWjIyBzcOeMe1eurDstjyWimd8YPTKz5YdP8A2G6/lx/GrP663uv36Ef5UBj0zrax6klNPb6lzaoN3cCdmx5Hh2H1Fee7FsqW5L0LYWRn0GQBecmFAESYBAQBmnXdWK3WV4nByPOnRj8HzP6rocaPGmK9jMue5sXuMO73qfmC4FppWuNJqa1VDXOZw6uNznN5kN3Dd+nKhY/Mg4a6jTVX+5P0RqSGWOeFksLw+N7Q5rh0IK56ScXpmlGSklKPRkiQyJMASSNhjfK84axpcT4Dmjq9AZRqJn1U8s7geJM9zyBz5uOf5XTpcY6XwMmT3LbIWUNY84bSVBP3Tv8AFRxfYHfUltyX3QxaesklNKKusAbIB9HHnO3PaVfXW09syc7NjZHy6+nxZoPS0L4NPUEcuQ7gg4PZnmP3XP5UlK+TXc6LBi440E+xbLznqIkAUutqo0WkLxUNO1zaSQNPc5w2j3lXY8eVsV7kZvUWZ1sMe+6wdzcu9gXSLqYGZLVEjodis897rHU1O9jC1he5z84A6dnpUMjIjRHlIycTEllT4RehwtGgYoKhs1yqRO1pyIWNw0+knqPBZl3iblHVa0beP4LGEuVst+w6gLLNwKQEaYHx3i10l6t01vuEbpKabG9rXlpOCCOY59QFOuyVcuUeopJSWmJV38nFuoYI5dN29/nZfteX1LjhmDn6zsdcLRxc98350vT5fgy/EsSVtSjTH12WuhLDXWqarmuEIic9rWMG8OyMknp6lHPya7VFQeyvwrDtx3KVi1scFmmyeSAKBkaYgoAKACgApAeQMKAP/9k="
              alt="PayPal"
              className="h-8"
            />
            {/* <img src="/api/placeholder/40/25" alt="Apple Pay" className="h-8" /> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-blue-300 text-sm border-t border-blue-800 pt-6">
          <p>
            © {new Date().getFullYear()} Roukaya Voyage. Tous droits réservés.
          </p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="hover:text-white">
              Conditions générales
            </a>
            <a href="#" className="hover:text-white">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-white">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

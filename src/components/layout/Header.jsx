import React, { useState, useEffect } from "react";
import { Menu, X, Globe, User, ChevronDown, Sun, Moon } from "lucide-react";
import logo from "../../image/roukaya.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Updated navigation items based on your router and offers page component.
  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "Destinations", href: "/destinations", hasSubmenu: true },
    { label: "Offres", href: "/offers" },
    { label: "Services", href: "/services" }, // Placeholder route for future update.
    { label: "Blog", href: "/blog" },
    { label: "À propos", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <img
                src={logo}
                alt="Roukaya Voyage"
                className="h-12 transition-all duration-300"
              />
            </a>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <a
                  href={item.href}
                  className={`font-medium text-sm flex items-center transition-colors ${
                    isScrolled
                      ? "text-blue-900 hover:text-blue-600"
                      : "text-white hover:text-blue-300"
                  }`}
                >
                  {item.label}
                  {item.hasSubmenu && (
                    <ChevronDown size={16} className="ml-1" />
                  )}
                </a>

                {/* Submenu for Destinations */}
                {item.hasSubmenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left group-hover:translate-y-0 translate-y-2">
                    <div className="py-2">
                      {["Europe", "Asie", "Afrique", "Amérique", "Océanie"].map(
                        (subItem, subIdx) => (
                          <a
                            key={subIdx}
                            href={`/destinations/${subItem.toLowerCase()}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                          >
                            {subItem}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions on the right */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="hidden md:flex items-center cursor-pointer">
              <Globe
                size={20}
                className={isScrolled ? "text-blue-700" : "text-white"}
              />
              <span
                className={`ml-1 text-sm font-medium ${
                  isScrolled ? "text-blue-900" : "text-white"
                }`}
              >
                FR
              </span>
              <ChevronDown
                size={16}
                className={`ml-1 ${
                  isScrolled ? "text-blue-700" : "text-white"
                }`}
              />
            </div>

            {/* Day/Night Mode Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${
                isScrolled
                  ? "text-blue-700 hover:bg-blue-100"
                  : "text-white hover:bg-white hover:bg-opacity-10"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Profile/Login Button */}
            <a
              href="/login"
              className={`hidden md:flex items-center space-x-2 py-2 px-4 rounded-full transition-all duration-300 ${
                isScrolled
                  ? "bg-blue-700 text-white hover:bg-blue-800"
                  : "bg-white bg-opacity-10 text-white hover:bg-opacity-20"
              }`}
            >
              <User size={18} />
              <span className="text-sm font-medium">Mon compte</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu
                size={24}
                className={isScrolled ? "text-blue-900" : "text-white"}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Semi-transparent background */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Mobile Menu Panel */}
          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-lg overflow-auto animate-slide-in-right">
            <div className="p-4 flex justify-between items-center border-b">
              <a href="/">
                <img src={logo} alt="Roukaya Voyage" className="h-10" />
              </a>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            <nav className="p-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block py-3 border-b border-gray-100 text-blue-900 font-medium"
                >
                  {item.label}
                  {item.hasSubmenu && (
                    <ChevronDown size={18} className="ml-1 inline-block" />
                  )}
                </a>
              ))}

              <div className="mt-4 pt-4 border-t border-gray-200">
                <button className="flex items-center space-x-2 text-blue-700 font-medium">
                  <User size={18} />
                  <span>Se connecter</span>
                </button>

                <div className="mt-4 flex items-center space-x-2 text-gray-600">
                  <Globe size={18} />
                  <span className="text-sm font-medium">Changer de langue</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

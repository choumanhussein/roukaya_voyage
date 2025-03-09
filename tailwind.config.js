/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#E6F0FF',
          100: '#CCDEFF',
          200: '#99BDFF',
          300: '#669CFF',
          400: '#337BFF',
          500: '#005AFF',  // Couleur principale du logo
          600: '#0048CC',
          700: '#003699',  // Bleu profond du logo
          800: '#002466',
          900: '#001233',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'slide-in-right': 'slideInRight 0.3s forwards',
        'slide-in-bottom': 'slideInBottom 0.5s forwards',
        'fade-in': 'fadeIn 0.5s forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInBottom: {
          '0%': { transform: 'translateY(50px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/images/banners/hero-bg.jpg')",
        'footer-texture': "url('/assets/images/banners/footer-bg.jpg')",
      },
    },
  },
  plugins: [],
}
@echo off
echo Creating project structure for roukaya-voyage...

:: Create main directories
mkdir public
mkdir src

:: Create public structure
mkdir public\assets
mkdir public\assets\images
mkdir public\assets\fonts
mkdir public\assets\images\destinations
mkdir public\assets\images\banners
mkdir public\assets\images\icons
type nul > public\favicon.ico
type nul > public\index.html
type nul > public\assets\images\logo.png

:: Create src directories
mkdir src\components
mkdir src\pages
mkdir src\contexts
mkdir src\hooks
mkdir src\services
mkdir src\utils
mkdir src\data
mkdir src\styles

:: Create component subdirectories
mkdir src\components\layout
mkdir src\components\ui
mkdir src\components\home
mkdir src\components\search
mkdir src\components\destination
mkdir src\components\booking
mkdir src\components\account
mkdir src\components\blog

:: Layout components
type nul > src\components\layout\Header.jsx
type nul > src\components\layout\Footer.jsx
type nul > src\components\layout\Layout.jsx

:: UI components
type nul > src\components\ui\Button.jsx
type nul > src\components\ui\Card.jsx
type nul > src\components\ui\Modal.jsx
type nul > src\components\ui\Dropdown.jsx
type nul > src\components\ui\Tabs.jsx
type nul > src\components\ui\Input.jsx
type nul > src\components\ui\Loader.jsx
type nul > src\components\ui\Notification.jsx

:: Home components
type nul > src\components\home\HeroSection.jsx
type nul > src\components\home\OffersSection.jsx
type nul > src\components\home\DestinationsSection.jsx
type nul > src\components\home\TestimonialsSection.jsx
type nul > src\components\home\BlogPreviewSection.jsx
type nul > src\components\home\SubscribeSection.jsx

:: Search components
type nul > src\components\search\SearchForm.jsx
type nul > src\components\search\SearchFilters.jsx
type nul > src\components\search\SearchResults.jsx
type nul > src\components\search\ResultCard.jsx

:: Destination components
type nul > src\components\destination\DestinationHero.jsx
type nul > src\components\destination\DestinationOverview.jsx
type nul > src\components\destination\DestinationGallery.jsx
type nul > src\components\destination\DestinationActivities.jsx
type nul > src\components\destination\DestinationMap.jsx

:: Booking components
type nul > src\components\booking\BookingForm.jsx
type nul > src\components\booking\BookingSummary.jsx
type nul > src\components\booking\PaymentForm.jsx
type nul > src\components\booking\BookingConfirmation.jsx

:: Account components
type nul > src\components\account\LoginForm.jsx
type nul > src\components\account\RegisterForm.jsx
type nul > src\components\account\UserDashboard.jsx
type nul > src\components\account\UserProfile.jsx
type nul > src\components\account\BookingHistory.jsx
type nul > src\components\account\FavoriteList.jsx

:: Blog components
type nul > src\components\blog\BlogList.jsx
type nul > src\components\blog\BlogCard.jsx
type nul > src\components\blog\BlogPost.jsx
type nul > src\components\blog\CommentSection.jsx

:: Pages
type nul > src\pages\HomePage.jsx
type nul > src\pages\SearchPage.jsx
type nul > src\pages\DestinationPage.jsx
type nul > src\pages\BookingPage.jsx
type nul > src\pages\CheckoutPage.jsx
type nul > src\pages\ConfirmationPage.jsx
type nul > src\pages\LoginPage.jsx
type nul > src\pages\RegisterPage.jsx
type nul > src\pages\AccountPage.jsx
type nul > src\pages\BlogPage.jsx
type nul > src\pages\BlogPostPage.jsx
type nul > src\pages\AboutPage.jsx
type nul > src\pages\ContactPage.jsx
type nul > src\pages\NotFoundPage.jsx

:: Contexts
type nul > src\contexts\AuthContext.jsx
type nul > src\contexts\CartContext.jsx
type nul > src\contexts\ThemeContext.jsx
type nul > src\contexts\SearchContext.jsx

:: Hooks
type nul > src\hooks\useAuth.js
type nul > src\hooks\useCart.js
type nul > src\hooks\useSearch.js
type nul > src\hooks\useForm.js
type nul > src\hooks\useMediaQuery.js
type nul > src\hooks\useScrollPosition.js

:: Services
type nul > src\services\api.js
type nul > src\services\auth.js
type nul > src\services\destinations.js
type nul > src\services\bookings.js
type nul > src\services\blog.js
type nul > src\services\payments.js

:: Utils
type nul > src\utils\animations.js
type nul > src\utils\formatters.js
type nul > src\utils\validators.js
type nul > src\utils\helpers.js

:: Data
type nul > src\data\destinations.js
type nul > src\data\offers.js
type nul > src\data\testimonials.js
type nul > src\data\blog-posts.js

:: Styles
type nul > src\styles\index.css
type nul > src\styles\animations.css

:: Root src files
type nul > src\App.jsx
type nul > src\index.jsx
type nul > src\routes.jsx

:: Root project files
type nul > package.json
type nul > tailwind.config.js
type nul > postcss.config.js
type nul > vite.config.js
type nul > README.md

echo Project structure created successfully!
pause
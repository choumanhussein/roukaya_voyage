import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import DestinationPage from "./pages/DestinationPage";
import DestinationPostPage from "./pages/DestinationPostPage";
import BookingPage from "./pages/BookingPage";
import CheckoutPage from "./pages/CheckoutPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AccountPage from "./pages/AccountPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import OffersSection from "./components/home/OffersSection";
import AllDestinationsPage from "./pages/AllDestinationsPage";
import ContinentPage from "./pages/ContinentPage"; // Importez la nouvelle page

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "search", element: <SearchPage /> },
      { path: "destinations", element: <AllDestinationsPage /> },
      // Route pour les destinations par continent
      { path: "destinations/:continent", element: <ContinentPage /> },
      // Route pour une destination spécifique (doit être après la route par continent)
      { path: "destinations/detail/:id", element: <DestinationPage /> },
      { path: "booking/:id", element: <BookingPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "confirmation", element: <ConfirmationPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "account", element: <AccountPage /> },
      { path: "blog", element: <BlogPage /> },
      { path: "blog/:id", element: <BlogPostPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "offers", element: <OffersSection /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;

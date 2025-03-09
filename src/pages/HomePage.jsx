import React from "react";
import HeroSection from "../components/home/HeroSection";
import OffersSection from "../components/home/OffersSection";
import DestinationsSection from "../components/home/DestinationsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import BlogPreviewSection from "../components/home/BlogPreviewSection";
import SubscribeSection from "../components/home/SubscribeSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <OffersSection />
      <DestinationsSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <SubscribeSection />
    </div>
  );
};

export default HomePage;

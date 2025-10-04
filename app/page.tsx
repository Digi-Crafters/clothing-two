import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewArrivals from "./components/NewArrivals";
import Collection from "./components/Collection";
import Product from "./components/Product";
import BrandStory from "./components/BrandStory";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <NewArrivals />
      <Collection />
      <Product />
      <BrandStory />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default page;

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Fashion Influencer",
      image:
        "https://images.unsplash.com/photo-1560087637-bf797bc7796a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      review:
        "The quality is exceptional! Every piece feels luxurious and gets so many compliments. I've never been more confident in my style choices.",
      category: "fashion",
      featured: true,
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      review:
        "Finally found a brand that understands modern elegance. The fit is perfect every time and the attention to detail is remarkable.",
      category: "quality",
      featured: true,
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "Architect",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4,
      review:
        "Love the sustainable approach and timeless designs. My go-to for professional wear that actually feels comfortable.",
      category: "sustainability",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      review:
        "The comfort and style balance is unmatched. Worth every penny for the quality and durability of each piece.",
      category: "comfort",
    },
    {
      id: 5,
      name: "Jessica Williams",
      role: "Marketing Manager",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      review:
        "Customer service is outstanding and the pieces are even better in person. Obsessed with my entire wardrobe now!",
      category: "service",
      featured: true,
    },
    {
      id: 6,
      name: "Alex Thompson",
      role: "Photographer",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4,
      review:
        "The attention to detail is incredible. These pieces have become staples in my wardrobe for both work and casual outings.",
      category: "design",
    },
  ];

  const categories = [
    { id: "all", label: "All Reviews" },
    { id: "fashion", label: "Fashion" },
    { id: "quality", label: "Quality" },
    { id: "comfort", label: "Comfort" },
    { id: "service", label: "Service" },
  ];

  const filteredTestimonials =
    activeCategory === "all"
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  const featuredTestimonials = testimonials.filter((t) => t.featured);

  const nextFeatured = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredTestimonials.length);
  };

  const prevFeatured = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length
    );
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-rose-50 to-orange-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 mb-3 sm:mb-4">
            Voices of Style
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
            Discover why thousands choose Reflect for their fashion journey
          </p>
        </motion.div>

        {/* Featured Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 lg:mb-16"
        >
          <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col lg:flex-row"
              >
                {/* Image Side */}
                <div className="w-full lg:w-2/5 relative aspect-square lg:aspect-auto">
                  <Image
                    src={featuredTestimonials[currentIndex].image}
                    alt={featuredTestimonials[currentIndex].name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-3/5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < featuredTestimonials[currentIndex].rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 leading-relaxed mb-6">
                    &quot;{featuredTestimonials[currentIndex].review}&quot;
                  </p>

                  <div>
                    <div className="font-bold text-slate-800 text-xl mb-1">
                      {featuredTestimonials[currentIndex].name}
                    </div>
                    <div className="text-slate-600 text-lg">
                      {featuredTestimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevFeatured}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-200 z-10"
            >
              <ChevronLeft className="w-5 h-5 text-slate-700" />
            </button>

            <button
              onClick={nextFeatured}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-200 z-10"
            >
              <ChevronRight className="w-5 h-5 text-slate-700" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-rose-500 w-6" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-8 lg:mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-lg"
                  : "bg-white text-slate-700 hover:bg-rose-50 border border-rose-100"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg border border-rose-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-slate-800">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-slate-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-slate-700 leading-relaxed text-sm">
                    &quot;{testimonial.review}&quot;
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 lg:mt-16 text-center"
        >
          {[
            { number: "10K+", label: "Happy Customers" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "50+", label: "Countries Served" },
            { number: "98%", label: "Would Recommend" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              className="p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-rose-100 shadow-lg"
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-black bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1 sm:mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

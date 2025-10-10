"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import data from "../data/newArrivals.json"

// Import your JSON data
const newArrivalsData = data;
const NewArrivals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false); // Changed to false

  const products = newArrivalsData.products;

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  }, [products.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality - REMOVED/COMMENTED OUT
  // useEffect(() => {
  //   if (!isAutoPlaying) return;

  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, [currentIndex, isAutoPlaying, nextSlide]);

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-rose-50 to-orange-50 overflow-hidden" id="newarrivals">
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
            New Arrivals
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto px-4">
            Discover our latest collection featuring premium fabrics and contemporary designs
          </p>
        </motion.div>

        {/* Main Slider Container - Fixed height for all screens */}
        <div 
          className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden max-w-6xl mx-auto"
          // Removed mouse enter/leave handlers since auto-play is disabled
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="flex flex-col lg:flex-row min-h-[500px] sm:min-h-[550px] lg:min-h-[600px]">
                
                {/* Product Image - Responsive sizing */}
                <div className="relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-auto">
                  <Image
                    src={products[currentIndex].image}
                    alt={products[currentIndex].name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  
                  {/* New Badge */}
                  {products[currentIndex].isNew && (
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-gradient-to-r from-rose-500 to-orange-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                      NEW
                    </div>
                  )}
                </div>

                {/* Product Details - Responsive padding */}
                <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="w-full"
                  >
                    {/* Category */}
                    <span className="text-rose-500 font-semibold text-xs sm:text-sm uppercase tracking-wide">
                      {products[currentIndex].category}
                    </span>

                    {/* Product Name - Responsive text */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 mt-2 mb-3 sm:mb-4">
                      {products[currentIndex].name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4 sm:mb-6">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                        ))}
                      </div>
                      <span className="text-slate-600 text-xs sm:text-sm">(128 reviews)</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <span className="text-2xl sm:text-3xl font-black text-slate-800">
                        ${products[currentIndex].price}
                      </span>
                      {products[currentIndex].originalPrice && (
                        <span className="text-lg sm:text-xl text-slate-400 line-through">
                          ${products[currentIndex].originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Color Options */}
                    <div className="mb-6 sm:mb-8">
                      <p className="text-slate-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">Colors</p>
                      <div className="flex gap-2 sm:gap-3">
                        {products[currentIndex].colors.map((color, index) => (
                          <button
                            key={index}
                            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-slate-200 hover:border-rose-400 transition-colors"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows - Responsive positioning */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg hover:bg-white transition-all duration-200 z-10"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-slate-700" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg hover:bg-white transition-all duration-200 z-10"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-slate-700" />
          </button>
        </div>

        {/* Slide Indicators - SEPARATE container below the slider */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-rose-500 w-6 sm:w-8 h-2 sm:h-3' 
                  : 'bg-slate-300 hover:bg-slate-400 w-2 sm:w-3 h-2 sm:h-3'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
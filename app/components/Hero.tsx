"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-rose-50">
      {/* Brick Wall Background */}
      <div className="absolute inset-0 z-0">
        <Image
          alt="Cream Brick Wall"
          src="/assets/herBg.jpg"
          fill
          className="object-cover"
          priority
        />
        {/* Lighter Rose/Orange overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/60 to-orange-50/50" />
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full flex flex-col lg:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 py-4 sm:py-6 md:py-8">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full flex flex-col justify-center order-1 lg:order-1"
          >
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative text-center lg:text-left"
            >
              {/* "Reflect" - First line */}
              <h1 className="text-5xl mb-4 xs:text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl font-black text-rose-400 leading-[0.85] tracking-tight mb-0 sm:mb-5 md:mb-5 lg:mb-15">
                Reflect
              </h1>

              {/* "Fashion" - Second line */}
              <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl font-black bg-gradient-to-r from-rose-300 to-orange-300 bg-clip-text text-transparent leading-[0.85] tracking-tight -mt-2 sm:-mt-3 md:-mt-4">
                Fashion
              </h1>

              {/* Call to Action line */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-base sm:text-lg md:text-xl lg:text-xl text-slate-600 font-medium mt-3 sm:mt-4 md:mt-5 lg:mt-6 max-w-md mx-auto lg:mx-0"
              >
                Express Your Unique Style Story
              </motion.p>

              {/* Shop Now Button */}
              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 py-2.5 sm:px-8 sm:py-3 bg-gradient-to-r from-rose-300 to-orange-300 text-slate-800 rounded-full font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto lg:mx-0 w-fit mt-4 sm:mt-5 hover:from-rose-400 hover:to-orange-400"
              >
                Shop Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full flex items-center justify-center order-2 lg:order-2"
          >
            <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[480px] xl:max-w-[520px]">
              {/* Main Product Image */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-20"
              >
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src="/assets/Gemini_Generated_Image_9q4whh9q4whh9q4w.png"
                    alt="Fashion Collection"
                    fill
                    className="object-contain drop-shadow-2xl -mt-2 sm:-mt-3 md:-mt-3 lg:mt-6 xl:mt-8"
                    priority
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 380px, (max-width: 1024px) 420px, 480px"
                  />
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-20 h-20 sm:w-24 sm:h-24 bg-rose-100/50 rounded-full blur-2xl z-10"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-20 h-20 sm:w-24 sm:h-24 bg-orange-100/40 rounded-full blur-2xl z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-rose-50 min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-5.5rem)] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          alt="Cream Brick Wall"
          src="/assets/herBg2.jpg"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/60 to-orange-50/50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full text-center lg:text-left"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-rose-400 leading-[0.9] tracking-tight">
              Reflect
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-rose-300 to-orange-300 bg-clip-text text-transparent leading-[0.9] -mt-1 sm:-mt-2">
              Fashion
            </h1>

            <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-slate-600 font-medium max-w-md mx-auto lg:mx-0">
              Express Your Unique Style Story
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group mt-6 sm:mt-8 px-6 py-3 sm:px-8 bg-gradient-to-r from-rose-300 to-orange-300 text-slate-800 rounded-full font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto lg:mx-0"
            >
              Shop Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full flex justify-center"
          >
            <div className="relative w-full max-w-[220px] sm:max-w-[300px] md:max-w-[380px] lg:max-w-[440px] xl:max-w-[480px]">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20"
              >
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src="/assets/Gemini_Generated_Image_9q4whh9q4whh9q4w.png"
                    alt="Fashion Collection"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </motion.div>

              {/* Decorative Blurs */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute -bottom-3 -left-3 w-16 h-16 sm:w-20 sm:h-20 bg-rose-100/50 rounded-full blur-2xl z-10"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute -top-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 bg-orange-100/40 rounded-full blur-2xl z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "New Arrivals", href: "#newarrivals" },
    { name: "Collections", href: "#collections" },
    { name: "Products", href: "#products" },
    { name: "Our Story", href: "#ourstory" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Left - Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-rose-50 transition-colors"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

            {/* Center - Logo */}
            <div className="flex flex-1 justify-center lg:justify-start">
              <Link href="/" className="flex items-center min-w-0">
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center min-w-0"
                >
                  <Image
                    src="/assets/Gemini_Generated_Image_iusbo5iusbo5iusb.png" // use new tightly cropped version
                    alt="Reflect Logo"
                    width={140}
                    height={60}
                    priority
                    className="w-auto"
                  />
                </motion.div>
              </Link>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex flex-1 justify-center">
              <div className="flex items-center space-x-6 xl:space-x-8">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="truncate text-slate-700 hover:text-rose-500 font-medium text-sm xl:text-base transition-colors duration-200 relative group px-1"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-orange-400 group-hover:w-full transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Spacer for symmetry on mobile */}
            <div className="lg:hidden w-10" />
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 lg:hidden z-40"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Slide-in Panel */}
              <motion.div
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="fixed left-0 top-0 bottom-0 w-72 bg-white border-r border-rose-100 z-50 shadow-xl"
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-lg font-black bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                      REFLECT
                    </div>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 rounded-lg text-slate-700 hover:bg-rose-50"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  {/* Links */}
                  <nav className="flex-1">
                    <div className="space-y-2">
                      {navigationItems.map((item, index) => (
                        <motion.a
                          key={item.name}
                          href={item.href}
                          initial={{ x: -15, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 px-3 text-base font-medium text-slate-700 hover:bg-rose-50 hover:text-rose-500 rounded-lg transition-all duration-200"
                        >
                          {item.name}
                        </motion.a>
                      ))}
                    </div>
                  </nav>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer for fixed navbar height */}
      <div className="h-16 lg:h-20" />
    </>
  );
};

export default Navbar;

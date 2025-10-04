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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 lg:h-16">
            {/* Left - Mobile Menu Button (visible on mobile) */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-rose-50 transition-colors"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
            {/* Center - Logo */}
            <div className="flex-1 flex justify-center lg:justify-start">
              <Link href="/">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl lg:text-2xl font-black"
                >
                  <Image
                    src="/assets/Gemini_Generated_Image_iusbo5iusbo5iusb.png"
                    alt="Reflect Logo"
                    width={300}
                    height={200}
                    className="inline-block mr-2 align-middle"
                  />
                </motion.div>
              </Link>
            </div>
            {/* Center - Navigation Items (visible on desktop) */}
            <div className="hidden lg:flex flex-1 justify-center">
              <div className="flex items-center space-x-6">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-slate-700 hover:text-rose-500 font-medium transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-orange-400 group-hover:w-full transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>
            {/* Right - Empty space for balance */}
            <div className="lg:hidden w-10" /> {/* Balance the mobile layout */}
          </div>
        </div>

        {/* Mobile Menu Overlay */}
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

              {/* Mobile Menu Panel */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ type: "spring", damping: 30 }}
                className="fixed left-0 top-0 bottom-0 w-80 max-w-full bg-white border-r border-rose-100 z-50 lg:hidden shadow-xl"
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Mobile Menu Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-xl font-black bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                      REFLECT
                    </div>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 rounded-lg text-slate-700 hover:bg-rose-50"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Mobile Navigation Items */}
                  <nav className="flex-1">
                    <div className="space-y-2">
                      {navigationItems.map((item, index) => (
                        <motion.a
                          key={item.name}
                          href={item.href}
                          initial={{ x: -20, opacity: 0 }}
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

      {/* Spacer for fixed navbar */}
      <div className="h-14 lg:h-16" />
    </>
  );
};

export default Navbar;

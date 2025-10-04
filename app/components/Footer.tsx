"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  ArrowRight,
  CreditCard,
  Truck,
  Shield,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Shop",
      links: [
        { name: "New Arrivals", href: "#new" },
        { name: "Collections", href: "#collections" },
        { name: "Best Sellers", href: "#bestsellers" },
        { name: "Sale", href: "#sale" }
      ]
    },
    {
      title: "Help",
      links: [
        { name: "Shipping", href: "#shipping" },
        { name: "Returns", href: "#returns" },
        { name: "Size Guide", href: "#sizeguide" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "About",
      links: [
        { name: "Our Story", href: "#story" },
        { name: "Sustainability", href: "#sustainability" },
        { name: "Careers", href: "#careers" },
        { name: "Blog", href: "#blog" }
      ]
    }
  ];

  const features = [
    { icon: Truck, text: "Free Shipping" },
    { icon: CreditCard, text: "Secure Payment" },
    { icon: Shield, text: "2-Year Warranty" },
    { icon: Heart, text: "Ethically Made" }
  ];

  return (
    <footer className="bg-white border-t border-rose-100">
      
      {/* Compact Features Bar */}
      <div className="border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 py-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-xs"
              >
                <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-4 h-4 text-rose-600" />
                </div>
                <span className="text-slate-700 leading-tight">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Compact Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {/* Logo */}
            <div className="text-2xl font-black mb-4">
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                REFLECT
              </span>
            </div>

            {/* Compact Brand Description */}
            <p className="text-slate-600 text-sm leading-relaxed mb-4 max-w-md">
              Timeless pieces that empower your individuality through fashion.
            </p>

            {/* Compact Contact Info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-slate-600 text-sm">
                <Mail className="w-4 h-4 text-rose-500 flex-shrink-0" />
                <span className="truncate">hello@reflectfashion.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-sm">
                <Phone className="w-4 h-4 text-rose-500 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </motion.div>

          {/* Links Columns - 3 columns on mobile */}
          <div className="grid grid-cols-3 gap-4 lg:gap-8 col-span-1 lg:col-span-3">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bold text-slate-800 text-sm mb-3">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-slate-600 hover:text-rose-500 transition-colors duration-200 text-xs flex items-center gap-1 group"
                      >
                        <ArrowRight className="w-2 h-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-rose-500 flex-shrink-0" />
                        <span className="truncate">{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Compact Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-rose-100"
        >
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex-1">
              <h3 className="font-bold text-slate-800 text-sm mb-1">Stay Updated</h3>
              <p className="text-slate-600 text-xs">
                New collections, offers, and style tips.
              </p>
            </div>
            
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-rose-50 border border-rose-200 rounded-lg text-slate-800 placeholder-slate-500 text-sm focus:outline-none focus:border-rose-500 transition-colors duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Compact Bottom Bar */}
      <div className="border-t border-rose-100 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-slate-600 text-xs">
            <div>
              © {currentYear} Reflect Fashion. All rights reserved.
            </div>
            <div className="flex gap-4">
              <a href="#privacy" className="hover:text-rose-500 transition-colors duration-200">
                Privacy
              </a>
              <a href="#terms" className="hover:text-rose-500 transition-colors duration-200">
                Terms
              </a>
              <a href="#cookies" className="hover:text-rose-500 transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
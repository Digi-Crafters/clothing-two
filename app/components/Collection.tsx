"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import data from "../data/collections.json";

const Collections = () => {
  const router = useRouter();
  const collections = data.collections;

  const handleCollectionClick = (collectionId: number) => {
    router.push(`/collection/${collectionId}`);
  };

  return (
    <section className="py-20 bg-white" id="collections">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-slate-800 mb-4">
            Our Collections
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
            Curated selections for every style and occasion
          </p>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => handleCollectionClick(collection.id)}
            >
              {/* Collection Card */}
              <div className="bg-rose-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                
                {/* Collection Image - Using first item's image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={collection.items[0].image}
                    alt={collection.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Collection Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-black mb-2">{collection.name}</h3>
                    <p className="text-rose-100 text-sm mb-3">{collection.items.length} items</p>
                    
                    {/* Quick Preview of Items */}
                    <div className="flex -space-x-3 mb-4">
                      {collection.items.slice(0, 3).map((item, itemIndex) => (
                        <div key={itemIndex} className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-white">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                      {collection.items.length > 3 && (
                        <div className="w-10 h-10 rounded-full bg-rose-500 border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                          +{collection.items.length - 3}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Collection Details */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="inline-block px-3 py-1 bg-rose-500 text-white text-xs font-semibold rounded-full mb-2">
                        {collection.category}
                      </span>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {collection.description}
                      </p>
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-slate-700">
                      <span className="text-sm font-medium">From </span>
                      <span className="text-xl font-black text-rose-600">
                        ${Math.min(...collection.items.map(item => item.price))}
                      </span>
                    </div>
                    
                    {/* View Collection Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group flex items-center gap-2 px-4 py-2 bg-white border border-rose-200 text-rose-600 rounded-full font-semibold text-sm hover:bg-rose-50 transition-all duration-300"
                    >
                      View
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>

                  {/* Featured Items Preview */}
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Featured items:</span>
                    <div className="flex gap-1">
                      {collection.items.slice(0, 2).map((item, idx) => (
                        <span key={idx} className="truncate max-w-20">
                          {item.name}
                          {idx < 1 && ','}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Collections CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button 
            onClick={() => router.push('/collection')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <ShoppingBag className="w-5 h-5" />
            Explore All Collections
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Collections;
"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRight, Home, ShoppingBag, Star } from "lucide-react";
import Image from "next/image";
import data from "../../data/collections.json";
import Link from "next/link";

const CollectionsPage = () => {
  const router = useRouter();
  const collections = data.collections;

  const handleCollectionClick = (collectionId: number) => {
    router.push(`/collection/${collectionId}`);
  };

  const navigateToHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-orange-50 py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-12"
        >
          {/* Navigation Button - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 mb-6 sm:mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={navigateToHome}
              className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white border border-rose-200 text-rose-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-rose-50 w-full sm:w-auto"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </motion.button>

            <div className="text-center flex-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-800 mb-2 sm:mb-4">
                All Collections
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto px-2">
                Discover our carefully curated fashion collections for every
                style and occasion
              </p>
            </div>

            {/* Spacer for balance - Hidden on mobile */}
            <div className="hidden sm:block sm:w-32"></div>
          </div>

          {/* Stats - Mobile Optimized */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-lg border border-rose-100">
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-rose-600 mb-1 sm:mb-2">
                {collections.length}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">
                Collections
              </div>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-lg border border-rose-100">
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-rose-600 mb-1 sm:mb-2">
                {collections.reduce(
                  (total, collection) => total + collection.items.length,
                  0
                )}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">
                Total Items
              </div>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-lg border border-rose-100">
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-rose-600 mb-1 sm:mb-2">
                5
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">
                Categories
              </div>
            </div>
          </div>
        </motion.div>

        {/* Collections Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-16">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => handleCollectionClick(collection.id)}
            >
              {/* Collection Card */}
              <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] border border-rose-100 h-full flex flex-col">
                {/* Collection Image */}
                <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                  <Image
                    src={collection.items[0].image}
                    alt={collection.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    priority={index < 3}
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Badges */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-wrap gap-2">
                    <span className="px-2 sm:px-3 py-1 bg-rose-500 text-white text-xs font-bold rounded-full">
                      {collection.category}
                    </span>
                    {collection.items.some((item) => item.isNew) && (
                      <span className="px-2 sm:px-3 py-1 bg-white text-rose-600 text-xs font-bold rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3 fill-rose-600" />
                        <span className="hidden sm:inline">New Items</span>
                        <span className="sm:hidden">New</span>
                      </span>
                    )}
                  </div>

                  {/* Collection Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl sm:text-2xl font-black mb-1 sm:mb-2">
                      {collection.name}
                    </h3>
                    <p className="text-rose-100 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                      {collection.description}
                    </p>

                    {/* Quick Preview of Items */}
                    <div className="flex -space-x-2 sm:-space-x-3 mb-4">
                      {collection.items.slice(0, 4).map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white overflow-hidden bg-white shadow-lg"
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                          {item.isNew && (
                            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-rose-500 rounded-full border-2 border-white" />
                          )}
                        </div>
                      ))}
                      {collection.items.length > 4 && (
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-rose-500 border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-lg">
                          +{collection.items.length - 4}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Collection Details */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <div className="mb-3 sm:mb-4">
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                      {collection.description}
                    </p>
                  </div>

                  {/* Price Range & Items Info */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2">
                      <div className="text-slate-700 flex-1 min-w-0">
                        <span className="text-xs sm:text-sm font-medium block sm:inline">
                          Price range:{" "}
                        </span>
                        <span className="text-base sm:text-lg lg:text-xl font-black text-rose-600 block sm:inline">
                          $
                          {Math.min(
                            ...collection.items.map((item) => item.price)
                          )}{" "}
                          - $
                          {Math.max(
                            ...collection.items.map((item) => item.price)
                          )}
                        </span>
                      </div>

                      {/* Items Count */}
                      <div className="text-right flex-shrink-0">
                        <div className="text-xl sm:text-2xl font-black text-slate-800">
                          {collection.items.length}
                        </div>
                        <div className="text-xs text-slate-500 font-medium">
                          items
                        </div>
                      </div>
                    </div>

                    {/* View Collection Button */}
                    <Link href={`/collection/${collection.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 group text-sm sm:text-base"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span className="hidden sm:inline">Explore Collection</span>
                        <span className="sm:hidden">View Collection</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>
                    {/* Featured Items */}
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-rose-100">
                      <div className="text-xs text-slate-500 font-medium mb-2">
                        Featured items:
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {collection.items.slice(0, 3).map((item, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-rose-50 text-rose-700 rounded-lg text-xs font-medium truncate max-w-full"
                          >
                            {item.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-rose-100"
        >
          <h3 className="text-2xl sm:text-3xl font-black text-slate-800 mb-3 sm:mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h3>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto">
            Our collections are constantly updated with new arrivals and
            seasonal pieces. Check back often for the latest trends and styles.
          </p>
          <div className="flex gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={navigateToHome}
              className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-rose-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5" />
              Back to Homepage
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CollectionsPage;
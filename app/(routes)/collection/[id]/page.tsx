"use client";
import React from "react";
import { use } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, ShoppingBag, Star, Heart, Share2 } from "lucide-react";
import Image from "next/image";
import data from "../../../data/collections.json";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

const CollectionDetailPage = ({ params }: PageProps) => {
  const router = useRouter();
  const { id } = use(params);
  const collectionId = parseInt(id);

  const collection = data.collections.find((col) => col.id === collectionId);

  if (!collection) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-orange-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-800 mb-4">
            Collection Not Found
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mb-6 sm:mb-8">
            The collection you{"'"}re looking for doesn{"'"}t exist.
          </p>
          <button
            onClick={() => router.push("/collection")}
            className="px-6 py-3 bg-rose-500 text-white rounded-xl font-semibold hover:bg-rose-600 transition-colors text-sm sm:text-base"
          >
            Back to Collections
          </button>
        </div>
      </div>
    );
  }

  const navigateBack = () => {
    router.push("/collection");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-orange-50 py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Navigation - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-0 mb-6 sm:mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={navigateBack}
            className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white border border-rose-200 text-rose-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-rose-50 text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Collections
          </motion.button>

          <div className="text-center order-first sm:order-none mb-2 sm:mb-0">
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-rose-500 text-white text-xs sm:text-sm font-bold rounded-full inline-block">
              {collection.category}
            </span>
          </div>

          <div className="flex gap-2 sm:gap-3 justify-center sm:justify-end">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 sm:p-3 bg-white border border-rose-200 text-rose-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 sm:p-3 bg-white border border-rose-200 text-rose-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Collection Hero - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-rose-100 overflow-hidden mb-8 sm:mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Hero Image */}
            <div className="relative h-64 sm:h-80 lg:h-auto">
              <Image
                src={collection.items[0].image}
                alt={collection.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

              {/* New Items Badge */}
              {collection.items.some((item) => item.isNew) && (
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-rose-600 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-rose-600" />
                    <span className="hidden sm:inline">New Arrivals</span>
                    <span className="sm:hidden">New</span>
                  </span>
                </div>
              )}
            </div>

            {/* Hero Content */}
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 mb-3 sm:mb-4">
                {collection.name}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                {collection.description}
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="text-center bg-rose-50 rounded-xl p-3 sm:p-4">
                  <div className="text-2xl sm:text-3xl font-black text-rose-600 mb-1">
                    {collection.items.length}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">
                    Total Items
                  </div>
                </div>
                <div className="text-center bg-rose-50 rounded-xl p-3 sm:p-4">
                  <div className="text-2xl sm:text-3xl font-black text-rose-600 mb-1">
                    ${Math.min(...collection.items.map((item) => item.price))}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">
                    Starting From
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                Shop The Collection
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Items Grid - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800 mb-6 sm:mb-8 text-center">
            Collection Items ({collection.items.length})
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {collection.items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 group cursor-pointer"
              >
                {/* Item Image */}
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <Link
                    href={`/collection/${collection.id}/product/${item.id}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </Link>

                  {/* Item Badges */}
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-col gap-1 sm:gap-2">
                    {item.isNew && (
                      <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-rose-500 text-white text-[10px] sm:text-xs font-bold rounded-full">
                        NEW
                      </span>
                    )}
                    {item.originalPrice > item.price && (
                      <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-500 text-white text-[10px] sm:text-xs font-bold rounded-full">
                        SALE
                      </span>
                    )}
                  </div>

                  {/* Color Options */}
                  <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 flex gap-1">
                    {item.colors.slice(0, 3).map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-white shadow-md"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                    {item.colors.length > 3 && (
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[8px] sm:text-[10px] font-bold text-slate-600">
                        +{item.colors.length - 3}
                      </div>
                    )}
                  </div>
                </div>

                {/* Item Details */}
                <div className="p-3 sm:p-4">
                  <h3 className="font-bold text-xs sm:text-sm lg:text-base text-slate-800 mb-1 sm:mb-2 group-hover:text-rose-600 transition-colors line-clamp-2">
                    {item.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
                    <span className="text-base sm:text-lg font-black text-rose-600">
                      ${item.price}
                    </span>
                    {item.originalPrice > item.price && (
                      <span className="text-xs sm:text-sm text-slate-500 line-through">
                        ${item.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Sizes */}
                  <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
                    {item.sizes.slice(0, 4).map((size, sizeIndex) => (
                      <span
                        key={sizeIndex}
                        className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs bg-rose-50 text-rose-700 rounded-md font-medium"
                      >
                        {size}
                      </span>
                    ))}
                    {item.sizes.length > 4 && (
                      <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs bg-rose-50 text-rose-700 rounded-md font-medium">
                        +{item.sizes.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CollectionDetailPage;
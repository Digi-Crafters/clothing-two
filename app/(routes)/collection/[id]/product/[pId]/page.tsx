"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ShoppingBag, Heart, Share2, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import Image from 'next/image';
import data from "../../../../../data/collections.json"

interface CollectionItem {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  colors: string[];
  sizes: string[];
  isNew: boolean;
  description?: string;
}

interface Collection {
  id: number;
  name: string;
  description: string;
  category: string;
  items: CollectionItem[];
}

interface PageProps {
  params: { id: string; pId: string };
}

const ProductDetailPage = ({ params }: PageProps) => {
  const router = useRouter();
  const { pId } = params;
  const productId = parseInt(pId);

  // Find the product and its collection
  let product: CollectionItem | null = null;
  let collection: Collection | null = null;

  for (const col of data.collections) {
    const foundProduct = col.items.find(item => item.id === productId);
    if (foundProduct) {
      product = foundProduct;
      collection = col;
      break;
    }
  }

  if (!product || !collection) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-orange-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-800 mb-4">Product Not Found</h1>
          <p className="text-sm sm:text-base text-slate-600 mb-6 sm:mb-8">The product you{"'"}re looking for doesn{"'"}t exist.</p>
          <button
            onClick={() => router.push('/collection')}
            className="px-6 py-3 bg-rose-500 text-white rounded-xl font-semibold hover:bg-rose-600 transition-colors text-sm sm:text-base"
          >
            Back to Collections
          </button>
        </div>
      </div>
    );
  }

  const navigateBack = () => {
    router.push(`/collection/${collection.id}`);
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-orange-50 py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation - Mobile Optimized */}
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
            <span className="truncate">Back to {collection.name}</span>
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

        {/* Product Details - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-rose-100 overflow-hidden mb-8 sm:mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">
            
            {/* Product Images */}
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl sm:rounded-2xl overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Product Badges */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-col gap-1.5 sm:gap-2">
                  {product.isNew && (
                    <span className="px-2.5 sm:px-4 py-1 sm:py-2 bg-rose-500 text-white text-xs sm:text-sm font-bold rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-white" />
                      NEW
                    </span>
                  )}
                  {product.originalPrice > product.price && (
                    <span className="px-2.5 sm:px-4 py-1 sm:py-2 bg-green-500 text-white text-xs sm:text-sm font-bold rounded-full">
                      {discount}% OFF
                    </span>
                  )}
                </div>
              </div>

              {/* Color Options */}
              <div className="mb-4 sm:mb-6">
                <h3 className="font-semibold text-sm sm:text-base text-slate-800 mb-2 sm:mb-3">Available Colors</h3>
                <div className="flex gap-2 sm:gap-3 flex-wrap">
                  {product.colors.map((color: string, index: number) => (
                    <div
                      key={index}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl border-2 border-rose-200 shadow-md cursor-pointer hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4 sm:p-6 lg:p-12 flex flex-col justify-center">
              <div className="mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm text-rose-600 font-semibold">{collection.name}</span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-slate-800 mb-2 sm:mb-4">
                  {product.name}
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
                  {product.description || `Premium quality ${product.name.toLowerCase()} from our ${collection.name} collection. Designed for comfort and style.`}
                </p>
              </div>

              {/* Price Section */}
              <div className="mb-4 sm:mb-6">
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2">
                  <span className="text-3xl sm:text-4xl font-black text-rose-600">
                    ${product.price}
                  </span>
                  {product.originalPrice > product.price && (
                    <>
                      <span className="text-xl sm:text-2xl text-slate-500 line-through">
                        ${product.originalPrice}
                      </span>
                      <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 font-bold rounded-full text-xs sm:text-sm">
                        Save ${(product.originalPrice - product.price).toFixed(2)}
                      </span>
                    </>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-slate-500">Including all taxes</p>
              </div>

              {/* Size Selection */}
              <div className="mb-6 sm:mb-8">
                <h3 className="font-semibold text-sm sm:text-base text-slate-800 mb-2 sm:mb-3">Select Size</h3>
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {product.sizes.map((size: string, index: number) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="py-2 sm:py-3 bg-rose-50 text-rose-700 font-semibold rounded-lg sm:rounded-xl hover:bg-rose-100 transition-colors border-2 border-transparent hover:border-rose-300 text-sm sm:text-base"
                    >
                      {size}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                  Add to Cart
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 sm:flex-initial px-6 sm:px-8 py-3 sm:py-4 bg-slate-800 text-white rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-900"
                >
                  Buy Now
                </motion.button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 py-4 sm:py-6 border-t border-rose-100">
                <div className="flex items-start sm:items-center gap-2 sm:gap-3 text-slate-600">
                  <Truck className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5 sm:mt-0" />
                  <div>
                    <div className="font-semibold text-sm sm:text-base">Free Shipping</div>
                    <div className="text-xs sm:text-sm">On orders over $100</div>
                  </div>
                </div>
                <div className="flex items-start sm:items-center gap-2 sm:gap-3 text-slate-600">
                  <RotateCcw className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5 sm:mt-0" />
                  <div>
                    <div className="font-semibold text-sm sm:text-base">Easy Returns</div>
                    <div className="text-xs sm:text-sm">30-day return policy</div>
                  </div>
                </div>
                <div className="flex items-start sm:items-center gap-2 sm:gap-3 text-slate-600">
                  <Shield className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5 sm:mt-0" />
                  <div>
                    <div className="font-semibold text-sm sm:text-base">2-Year Warranty</div>
                    <div className="text-xs sm:text-sm">Quality guaranteed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Products - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800 mb-6 sm:mb-8">More from {collection.name}</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {collection.items
              .filter((item: CollectionItem) => item.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct: CollectionItem, index: number) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 group cursor-pointer"
                  onClick={() => router.push(`/collection/${collection.id}/product/${relatedProduct.id}`)}
                >
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="font-bold text-xs sm:text-sm lg:text-base text-slate-800 mb-1 sm:mb-2 group-hover:text-rose-600 transition-colors line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
                      <span className="text-base sm:text-lg font-black text-rose-600">
                        ${relatedProduct.price}
                      </span>
                      {relatedProduct.originalPrice > relatedProduct.price && (
                        <span className="text-xs sm:text-sm text-slate-500 line-through">
                          ${relatedProduct.originalPrice}
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

export default ProductDetailPage;
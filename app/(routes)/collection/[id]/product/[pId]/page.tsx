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
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-slate-800 mb-4">Product Not Found</h1>
          <p className="text-slate-600 mb-8">The product you{"'"}re looking for doesn{"'"}t exist.</p>
          <button
            onClick={() => router.push('/collection')}
            className="px-6 py-3 bg-rose-500 text-white rounded-xl font-semibold hover:bg-rose-600 transition-colors"
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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-orange-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={navigateBack}
            className="flex items-center gap-2 px-6 py-3 bg-white border border-rose-200 text-rose-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-rose-50"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {collection.name}
          </motion.button>

          <div className="text-center">
            <span className="px-4 py-2 bg-rose-500 text-white text-sm font-bold rounded-full">
              {collection.category}
            </span>
          </div>

          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white border border-rose-200 text-rose-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Share2 className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white border border-rose-200 text-rose-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Heart className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl border border-rose-100 overflow-hidden mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Product Images */}
            <div className="p-8">
              <div className="relative h-96 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Product Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="px-4 py-2 bg-rose-500 text-white text-sm font-bold rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4 fill-white" />
                      NEW
                    </span>
                  )}
                  {product.originalPrice > product.price && (
                    <span className="px-4 py-2 bg-green-500 text-white text-sm font-bold rounded-full">
                      {discount}% OFF
                    </span>
                  )}
                </div>
              </div>

              {/* Color Options */}
              <div className="mb-6">
                <h3 className="font-semibold text-slate-800 mb-3">Available Colors</h3>
                <div className="flex gap-3">
                  {product.colors.map((color: string, index: number) => (
                    <div
                      key={index}
                      className="w-12 h-12 rounded-xl border-2 border-rose-200 shadow-md cursor-pointer hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-4">
                <span className="text-rose-600 font-semibold">{collection.name}</span>
                <h1 className="text-4xl lg:text-5xl font-black text-slate-800 mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {product.description || `Premium quality ${product.name.toLowerCase()} from our ${collection.name} collection. Designed for comfort and style.`}
                </p>
              </div>

              {/* Price Section */}
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-4xl font-black text-rose-600">
                    ${product.price}
                  </span>
                  {product.originalPrice > product.price && (
                    <>
                      <span className="text-2xl text-slate-500 line-through">
                        ${product.originalPrice}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 font-bold rounded-full text-sm">
                        Save ${(product.originalPrice - product.price).toFixed(2)}
                      </span>
                    </>
                  )}
                </div>
                <p className="text-sm text-slate-500">Including all taxes</p>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <h3 className="font-semibold text-slate-800 mb-3">Select Size</h3>
                <div className="grid grid-cols-4 gap-3">
                  {product.sizes.map((size: string, index: number) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="py-3 bg-rose-50 text-rose-700 font-semibold rounded-xl hover:bg-rose-100 transition-colors border-2 border-transparent hover:border-rose-300"
                    >
                      {size}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-slate-800 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-900"
                >
                  Buy Now
                </motion.button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-t border-rose-100">
                <div className="flex items-center gap-3 text-slate-600">
                  <Truck className="w-5 h-5 text-rose-500" />
                  <div>
                    <div className="font-semibold">Free Shipping</div>
                    <div className="text-sm">On orders over $100</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <RotateCcw className="w-5 h-5 text-rose-500" />
                  <div>
                    <div className="font-semibold">Easy Returns</div>
                    <div className="text-sm">30-day return policy</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Shield className="w-5 h-5 text-rose-500" />
                  <div>
                    <div className="font-semibold">2-Year Warranty</div>
                    <div className="text-sm">Quality guaranteed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Products */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-black text-slate-800 mb-8">More from {collection.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collection.items
              .filter((item: CollectionItem) => item.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct: CollectionItem, index: number) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 group cursor-pointer"
                  onClick={() => router.push(`/collection/${collection.id}/product/${relatedProduct.id}`)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-slate-800 mb-2 group-hover:text-rose-600 transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-black text-rose-600">
                        ${relatedProduct.price}
                      </span>
                      {relatedProduct.originalPrice > relatedProduct.price && (
                        <span className="text-sm text-slate-500 line-through">
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
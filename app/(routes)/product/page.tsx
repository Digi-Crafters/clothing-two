"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRight, Star, ShoppingBag, Home } from "lucide-react";
import Image from "next/image";
import productData from "../../data/products.json";

interface PageProps {
  params: Promise<{ [key: string]: string }>;
}

const ProductsPage = ({  }: PageProps) => {
  const router = useRouter();
  const products = productData.products;

  const navigateToHome = () => {
    router.push("/");
  };

  const navigateToProduct = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  const getCollectionName = (collectionId: number) => {
    const collections: { [key: number]: string } = {
      1: "Summer Essentials",
      2: "Urban Streetwear", 
      3: "Evening Elegance",
      4: "Athleisure Wear",
      5: "Winter Warmers"
    };
    return collections[collectionId] || "Collection";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-orange-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* Navigation */}
          <div className="flex justify-between items-center mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={navigateToHome}
              className="flex items-center gap-2 px-6 py-3 bg-white border border-rose-200 text-rose-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-rose-50"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </motion.button>
            
            <div className="text-center flex-1">
              <h1 className="text-5xl lg:text-6xl font-black text-slate-800 mb-4">
                All Products
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Discover our complete range of premium fashion items
              </p>
            </div>
            
            <div className="w-32"></div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-rose-100">
              <div className="text-3xl font-black text-rose-600 mb-2">{products.length}</div>
              <div className="text-slate-600 font-medium">Total Products</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-rose-100">
              <div className="text-3xl font-black text-rose-600 mb-2">
                {new Set(products.map(p => p.category)).size}
              </div>
              <div className="text-slate-600 font-medium">Categories</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-rose-100">
              <div className="text-3xl font-black text-rose-600 mb-2">
                {products.filter(p => p.isNew).length}
              </div>
              <div className="text-slate-600 font-medium">New Arrivals</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-rose-100">
              <div className="text-3xl font-black text-rose-600 mb-2">
                {products.filter(p => p.originalPrice > p.price).length}
              </div>
              <div className="text-slate-600 font-medium">On Sale</div>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => navigateToProduct(product.id)}
            >
              {/* Product Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] border border-rose-100 h-full flex flex-col">
                
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Product Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="px-3 py-1 bg-rose-500 text-white text-xs font-bold rounded-full">
                        NEW
                      </span>
                    )}
                    {product.originalPrice > product.price && (
                      <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                        SALE
                      </span>
                    )}
                    {!product.inStock && (
                      <span className="px-3 py-1 bg-slate-500 text-white text-xs font-bold rounded-full">
                        OUT OF STOCK
                      </span>
                    )}
                  </div>

                  {/* Collection Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-white/90 text-slate-700 text-xs font-semibold rounded-full backdrop-blur-sm">
                      {getCollectionName(product.collectionId)}
                    </span>
                  </div>

                  {/* Quick View Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ArrowRight className="w-6 h-6 text-rose-600" />
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-4 flex-1 flex flex-col">
                  <div className="mb-3">
                    <span className="text-rose-600 text-sm font-semibold">{product.category}</span>
                    <h3 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-rose-600 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-3">
                      {product.description}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-slate-700">{product.rating}</span>
                    </div>
                    <span className="text-slate-500 text-sm">({product.reviewCount})</span>
                  </div>

                  {/* Price & Action */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-black text-rose-600">
                          ${product.price}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-slate-500 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      
                      {/* Color Dots */}
                      <div className="flex gap-1">
                        {product.colors.slice(0, 3).map((color, colorIndex) => (
                          <div
                            key={colorIndex}
                            className="w-3 h-3 rounded-full border border-slate-300"
                            style={{ backgroundColor: color.value }}
                          />
                        ))}
                        {product.colors.length > 3 && (
                          <div className="w-3 h-3 rounded-full bg-slate-200 flex items-center justify-center text-xs text-slate-600">
                            +{product.colors.length - 3}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Sizes */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.sizes.slice(0, 4).map((size, sizeIndex) => (
                        <span
                          key={sizeIndex}
                          className="px-2 py-1 text-xs bg-rose-50 text-rose-700 rounded-md font-medium"
                        >
                          {size}
                        </span>
                      ))}
                      {product.sizes.length > 4 && (
                        <span className="px-2 py-1 text-xs bg-slate-100 text-slate-600 rounded-md font-medium">
                          +{product.sizes.length - 4}
                        </span>
                      )}
                    </div>

                    {/* View Product Button - UPDATED TO MATCH THEME */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      View Product
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-white rounded-3xl p-8 shadow-xl border border-rose-100"
        >
          <h3 className="text-3xl font-black text-slate-800 mb-4">
            Can&#39;t Find What You&#39;re Looking For?
          </h3>
          <p className="text-slate-600 text-lg mb-6 max-w-2xl mx-auto">
            Explore our curated collections or contact our style experts for personalized recommendations.
          </p>
          <div className="flex gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={navigateToHome}
              className="flex items-center gap-2 px-8 py-4 bg-rose-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              Back to Homepage
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsPage;
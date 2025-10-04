"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {  Star } from "lucide-react";
import Image from "next/image";
import productsData from "../data/products.json";

const FeaturedProducts = () => {
  const router = useRouter();
  const [visibleCount] = useState(4);
  const products = productsData.products.slice(0, 8); // Show max 8 products

  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  const isEven = (index: number) => index % 2 === 0;

  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-rose-50"
      id="products"
    >
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
            Featured Products
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
            Handpicked selections that define modern style and comfort
          </p>
        </motion.div>

        {/* Products Grid - Alternating Layout */}
        <div className="space-y-12 lg:space-y-20">
          {products.slice(0, visibleCount).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`flex flex-col ${
                isEven(index) ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 items-center`}
            >
              {/* Product Image */}
              <div className="flex-1 w-full">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl cursor-pointer bg-white"
                  onClick={() => handleProductClick(product.id)}
                >
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  />
                </motion.div>

                {/* Product Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      NEW
                    </span>
                  )}
                  {product.originalPrice > product.price && (
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      SALE
                    </span>
                  )}
                </div>
              </div>

              {/* Product Details */}
              <div className="flex-1 w-full">
                <motion.div
                  initial={{ opacity: 0, x: isEven(index) ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`text-center lg:text-left ${
                    isEven(index) ? "lg:pl-8" : "lg:pr-8"
                  }`}
                >
                  {/* Category */}
                  <span className="text-rose-500 font-semibold text-sm uppercase tracking-wide">
                    {product.category}
                  </span>

                  {/* Product Name */}
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-black text-slate-800 mt-2 mb-4">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-base lg:text-lg leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "fill-current" : ""
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-slate-600 text-sm">
                      {product.rating} ({product.reviewCount} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                    <span className="text-2xl lg:text-3xl font-black text-slate-800">
                      ${product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-lg lg:text-xl text-slate-400 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Color Options */}
                  <div className="mb-8">
                    <p className="text-slate-700 font-medium mb-3">
                      Available Colors
                    </p>
                    <div className="flex justify-center lg:justify-start gap-3 flex-wrap">
                      {product.colors.map((color, colorIndex) => (
                        <button
                          key={colorIndex}
                          className="w-8 h-8 rounded-full border-2 border-slate-200 hover:border-rose-400 transition-colors shadow-sm"
                          style={{ backgroundColor: color.value }}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <p className="text-slate-700 font-medium mb-3">Features</p>
                    <div className="flex justify-center lg:justify-start gap-3 flex-wrap">
                      {product.features
                        .slice(0, 3)
                        .map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < products.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              onClick={() => router.push("/product")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white border-2 border-rose-300 text-rose-600 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:bg-rose-50 transition-all duration-300"
            >
              View More Products
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;

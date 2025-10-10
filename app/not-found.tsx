import React from 'react'
import Link from 'next/link'
import { Home, ShoppingBag, Star, ChevronRight } from 'lucide-react'

const NotFound = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-rose-50 to-orange-50 font-mono relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 mb-3 sm:mb-4">
            404 - Page Not Found
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto px-4">
            The page you&#39;re looking for seems to have wandered off. Let&#39;s find something amazing instead.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
            
            {/* Error Image Section */}
            <div className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto bg-gradient-to-br from-rose-100 to-orange-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl sm:text-9xl font-black text-rose-500 mb-4">404</div>
                <div className="inline-flex items-center space-x-2 bg-rose-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-rose-200">
                  <Star className="w-4 h-4 text-rose-500" />
                  <span className="text-rose-600 text-sm font-light tracking-wide">
                    PREMIUM COLLECTION 2025
                  </span>
                </div>
              </div>
            </div>

            {/* Error Details Section */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-center">
              <div className="w-full">
                {/* Error Message */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-800 mt-2 mb-3 sm:mb-4">
                  Lost in Style
                </h3>

                <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                  Don&#39;t worry, even the best collections have hidden gems. While we find that page, 
                  why not explore our latest arrivals?
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/"
                    className="group bg-rose-500 text-white px-6 py-3 font-bold tracking-wide hover:bg-rose-600 transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden rounded-lg"
                  >
                    <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>BACK TO HOME</span>
                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    <span className="absolute inset-0 flex items-center justify-center text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="flex items-center space-x-2">
                        <Home className="w-5 h-5" />
                        <span>BACK TO HOME</span>
                      </span>
                    </span>
                  </Link>

                  <Link 
                    href="/collection"
                    className="group border-2 border-slate-800 text-slate-800 px-6 py-3 font-bold tracking-wide hover:bg-slate-800 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden rounded-lg"
                  >
                    <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>SHOP NOW</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="flex justify-center gap-6 sm:gap-8 mt-8 pt-6 border-t border-slate-200">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-black text-slate-800">500K+</div>
                    <div className="text-xs text-slate-600">CUSTOMERS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-black text-slate-800">50+</div>
                    <div className="text-xs text-slate-600">COUNTRIES</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-black text-slate-800">15</div>
                    <div className="text-xs text-slate-600">YEARS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Help Section */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-slate-600 text-sm">
            Need help?{' '}
            <Link href="/contact" className="text-rose-500 hover:text-rose-600 font-medium underline">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default NotFound
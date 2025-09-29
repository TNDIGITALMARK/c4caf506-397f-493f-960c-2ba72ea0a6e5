'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { Zap, Shield, Star } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="hero-banner min-h-[70vh] flex items-center justify-center relative">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              UNLEASH YOUR
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              INNER HERO!
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover the greatest collection of action figures featuring your favorite superheroes and legendary characters
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/products">
              <Button
                size="lg"
                className="hero-blue-gradient text-white font-semibold px-8 py-3 text-lg hover:scale-105 transition-transform"
              >
                SHOP NOW
              </Button>
            </Link>
            <Link href="/collections">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-3 text-lg transition-all"
              >
                VIEW COLLECTIONS
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="flex flex-col items-center space-y-4 text-center group hover:scale-105 transition-all duration-300">
              <div className="p-4 rounded-2xl bg-blue-600/30 border-2 border-blue-400 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/50 transition-all duration-300">
                <Shield className="h-8 w-8 text-blue-300 group-hover:text-blue-200 transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-xl text-white group-hover:text-blue-200 transition-colors duration-300">Authenticity Guaranteed</h3>
              <p className="text-base text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Every figure verified for quality and authenticity
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 text-center group hover:scale-105 transition-all duration-300">
              <div className="p-4 rounded-2xl bg-orange-600/30 border-2 border-orange-400 shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/50 transition-all duration-300">
                <Star className="h-8 w-8 text-orange-300 group-hover:text-orange-200 transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-xl text-white group-hover:text-orange-200 transition-colors duration-300">Premium Quality</h3>
              <p className="text-base text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                High-end collectibles from trusted manufacturers
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 text-center group hover:scale-105 transition-all duration-300">
              <div className="p-4 rounded-2xl bg-purple-600/30 border-2 border-purple-400 shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/50 transition-all duration-300">
                <Zap className="h-8 w-8 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-xl text-white group-hover:text-purple-200 transition-colors duration-300">Fast Shipping</h3>
              <p className="text-base text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Quick and secure delivery to your doorstep
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-orange-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 border-2 border-purple-400 rounded-full animate-pulse"></div>
      </div>
    </section>
  );
}
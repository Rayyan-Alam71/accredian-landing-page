"use client"
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/4">
        <div className="w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 -translate-x-1/2 translate-y-1/4">
        <div className="w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="text-center w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-medium text-sm border border-blue-100"
        >
          Transform Your Workforce
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-tight mb-6"
        >
          Next-Gen Expertise <br/><span className="text-blue-600">For Your Enterprise</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Cultivate high-performance teams through expert learning. Tailored solutions, industry insights, and expert guidance designed for modern enterprises.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5">
            Enquire Now
          </button>
          <button className="bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all shadow-sm">
            Explore Programs
          </button>
        </motion.div>
      </div>
    </section>
  );
}

"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, ChevronRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-blue-600 rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-600/20 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>

          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10 text-center md:text-left">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-inner flex-shrink-0">
              <Headphones className="w-12 h-12 text-white" />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-2 leading-tight">
                Want to Learn More About Our Training Solutions?
              </h2>
              <p className="text-blue-100 text-lg font-medium">
                Get Expert Guidance for Your Team's Success!
              </p>
            </div>
          </div>
          
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 whitespace-nowrap z-10 flex-shrink-0">
            Contact Us <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

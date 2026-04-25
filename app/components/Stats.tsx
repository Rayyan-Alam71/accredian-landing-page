"use client"
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '10K+', label: 'Professionals Trained' },
  { value: '200+', label: 'Sessions Delivered' },
  { value: '5K+', label: 'Active Learners' }
];

export default function Stats() {
  return (
    <section id="stats" className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-blue-50/50 hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">{stat.value}</div>
              <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

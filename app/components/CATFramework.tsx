"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Layers, Wrench } from 'lucide-react';

const steps = [
  { icon: BookOpen, title: "Concept", desc: "Foundational knowledge for deep subject understanding." },
  { icon: Layers, title: "Application", desc: "Practical implementation through real-world scenarios." },
  { icon: Wrench, title: "Tools", desc: "Resources and techniques for effective skill mastery." }
];

export default function CATFramework() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-medium text-sm border border-blue-100 mb-6">
              Our Methodology
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The CAT Framework</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Our Competency Assessment Tool (CAT) framework is engineered to ensure holistic learning and tangible skill acquisition, moving beyond theory into practical mastery.
            </p>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 mt-1">
                    <step.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-[2rem] bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 p-12 overflow-hidden shadow-2xl shadow-blue-500/20 min-h-[500px] flex items-center justify-center"
            >
              {/* Decorative background circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
              
              {/* Graphic Representation of CAT */}
              <div className="relative z-10 w-full max-w-sm aspect-square rounded-full border-[1px] border-white/20 flex items-center justify-center p-8">
                <div className="w-full h-full rounded-full border-[1px] border-white/30 flex items-center justify-center p-8">
                   <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-2xl">
                      <div className="text-center">
                        <span className="text-white font-bold text-4xl tracking-widest block mb-2">CAT</span>
                        <span className="text-blue-100 text-sm tracking-wider font-medium uppercase">Framework</span>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

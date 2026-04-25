"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Star } from 'lucide-react';

const faqs = [
  { q: "Do you offer placement assistance?", a: "Yes, we provide comprehensive placement assistance including resume building, mock interviews, and direct referrals to our hiring partners." },
  { q: "What is the mode of training?", a: "Our training is delivered through a blend of live online sessions, recorded lectures, and interactive workshops." },
  { q: "Will I get alumni status?", a: "Yes, upon successful completion, you become part of our prestigious alumni network with exclusive benefits." },
  { q: "What is the duration of the program?", a: "The duration varies depending on the specific program, ranging from 3 to 12 months." },
  { q: "Who are the faculties?", a: "Our faculty consists of industry experts and seasoned professionals from top tier companies." }
];

export default function Testimonials() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Featured success stories from professionals and organizations.</p>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-12 mb-12 snap-x hide-scrollbar">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="min-w-[350px] md:min-w-[450px] bg-white p-8 rounded-xl border border-gray-200 shadow-sm snap-center hover:shadow-md transition-shadow flex-shrink-0">
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                "Accredian's programs completely transformed our team's approach to product innovation. The tailored curriculum and expert guidance resulted in a measurable increase in our operational efficiency."
              </p>
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold text-xl">
                  {index === 0 ? 'S' : 'M'}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                  <p className="text-gray-500 text-sm">VP of Operations</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="text-center mb-16 pt-12 border-t border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently <span className="text-blue-600">Asked Questions</span></h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 flex flex-col gap-3">
            <button className="text-left px-6 py-5 rounded-lg font-bold transition-all border border-blue-600 bg-blue-600 text-white shadow-md flex justify-between items-center">
              Eligibility <ChevronRight className="w-5 h-5" />
            </button>
            <button className="text-left px-6 py-5 rounded-lg font-bold transition-all border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 flex justify-between items-center">
              How To Apply? <ChevronRight className="w-5 h-5" />
            </button>
            <button className="text-left px-6 py-5 rounded-lg font-bold transition-all border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 flex justify-between items-center">
              Terms & Conditions <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="md:w-2/3">
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-blue-200 transition-colors">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full text-left px-6 py-5 font-bold text-gray-900 flex justify-between items-center bg-white"
                  >
                    {faq.q}
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 text-blue-600 flex-shrink-0 ml-4 ${activeFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 text-gray-600"
                      >
                        <div className="pb-5 pt-1">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

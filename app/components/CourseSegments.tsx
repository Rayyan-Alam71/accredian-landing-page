"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const categories = ['Program Specific', 'Industry Specific', 'Skills Specific'];
const courses = {
  'Program Specific': ['Certificate', 'Executive', 'Post Graduate Certificate'],
  'Industry Specific': ['IT', 'Healthcare', 'Retail', 'Finance', 'Education', 'Manufacturing'],
  'Skills Specific': ['Leadership', 'Tech', 'Operations', 'Marketing', 'HR']
};

export default function CourseSegments() {
  const [activeTab, setActiveTab] = useState('Program Specific');

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tailored Course Segmentation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Discover programs customized to your specific career goals and industry needs.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4 flex flex-col gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`text-left px-6 py-4 rounded-xl font-bold transition-all duration-300 ${
                  activeTab === cat 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="md:w-3/4 bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm min-h-[300px]">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">{activeTab} Programs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses[activeTab as keyof typeof courses].map((course, index) => (
                <motion.div
                  key={course}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-6 py-5 rounded-xl bg-gray-50 border border-gray-100 hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-sm transition-all text-gray-800 font-semibold cursor-pointer"
                >
                  {course}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

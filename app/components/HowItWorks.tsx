"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Map, Briefcase } from 'lucide-react';

const steps = [
  { num: "1", title: "Skill Gap Analysis", desc: "Comprehensive assessment of team capabilities and developmental needs.", icon: CheckCircle },
  { num: "2", title: "Customized Training Plan", desc: "Creation of a tailored roadmap addressing specific organizational goals.", icon: Map },
  { num: "3", title: "Flexible Program Delivery", desc: "Execution of adaptable programs aligned with industry requirements.", icon: Briefcase }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We <span className="text-blue-600">Deliver Results</span> That Matter?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-8 border-l-8 border-blue-600 relative hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute top-4 left-4 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                {step.num}
              </div>
              <div className="flex flex-col items-center text-center mt-6">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

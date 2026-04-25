"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Award, MonitorPlay, TrendingUp, Lightbulb, Bot, GraduationCap, LineChart, Settings, LayoutDashboard } from 'lucide-react';

const features = [
  { icon: Award, title: "Expert Guidance", desc: "Learn from industry leaders with real-world success and proven methodologies." },
  { icon: MonitorPlay, title: "Advanced Technology", desc: "State-of-the-art LMS designed for seamless, interactive learning experiences." },
  { icon: TrendingUp, title: "Proven Impact", desc: "Trusted by leading organizations for delivering measurable, scalable ROI." }
];

const programs = [
  { icon: Lightbulb, title: "Product & Innovation Hub", desc: "Strategies for product-led growth and continuous innovation." },
  { icon: Bot, title: "Gen-AI Mastery", desc: "Future-proofing teams with advanced Generative AI skills." },
  { icon: GraduationCap, title: "Leadership Elevation", desc: "Building next-gen leaders for enduring organizational success." },
  { icon: LineChart, title: "Tech & Data Insights", desc: "Harnessing data and technology for intelligent decision-making." },
  { icon: Settings, title: "Operations Excellence", desc: "Streamlining processes for maximum operational efficiency." },
  { icon: LayoutDashboard, title: "Digital Enterprise", desc: "Navigating and leading the digital transformation journey." }
];

export default function AccredianEdge() {
  return (
    <section id="edge" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Edge Features */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Accredian Edge</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Why leading enterprises consistently choose us for their transformation journey.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Specialized Programs */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Domain Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Specialized, high-impact programs tailored for modern enterprise challenges.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-6 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all cursor-pointer shadow-sm hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-50 group-hover:bg-white border border-transparent group-hover:border-blue-100 shadow-sm flex items-center justify-center text-gray-500 group-hover:text-blue-600 transition-all flex-shrink-0">
                  <program.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{program.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{program.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

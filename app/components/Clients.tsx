"use client"
import React from 'react';

const clients = ['Reliance Industries Limited', 'HCL', 'IBM', 'CRIF', 'ADP', 'Bayer'];

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Empowering the world's most innovative organizations to achieve excellence.</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-70">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="text-xl md:text-2xl font-bold text-gray-400 hover:text-blue-600 transition-colors duration-300 cursor-default"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

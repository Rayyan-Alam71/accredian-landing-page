import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-8">
          <div>
            <Link href="/" className="text-3xl font-bold tracking-tight text-white mb-1 block">
              accredian
            </Link>
            <span className="text-gray-400 text-xs tracking-widest uppercase">Credentials That Matter</span>
          </div>
          <div className="mt-6 md:mt-0">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-lg shadow-blue-600/20">
              Enquire Now
            </button>
          </div>
        </div>
        
        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Programs</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Data Science & AI</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Product Management</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Business Analytics</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Digital Transformation</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Business Management</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Accredian</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors font-medium">About</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Career</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Blog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Admission Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Terms Of Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <p>Email: enterprise@accredian.com</p>
              <p>Phone: +1 800 123 4567</p>
              <p>Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana.</p>
              <div className="pt-4">
                <p className="font-bold text-white mb-3">Follow Us</p>
                <div className="flex space-x-4">
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-xs font-bold text-white">FB</a>
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-xs font-bold text-white">LI</a>
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-xs font-bold text-white">TW</a>
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-xs font-bold text-white">IG</a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // To simulate active scroll states
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 500) setActiveSection('home');
      else if (scrollY >= 500 && scrollY < 1200) setActiveSection('stats');
      else if (scrollY >= 1200 && scrollY < 1800) setActiveSection('clients');
      else if (scrollY >= 1800 && scrollY < 2400) setActiveSection('edge');
      else if (scrollY >= 2400 && scrollY < 3000) setActiveSection('cat');
      else if (scrollY >= 3000 && scrollY < 3600) setActiveSection('how');
      else if (scrollY >= 3600 && scrollY < 4200) setActiveSection('faq');
      else setActiveSection('testimonials');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Stats', href: '#stats', id: 'stats' },
    { name: 'Clients', href: '#clients', id: 'clients' },
    { name: 'Accredian Edge', href: '#edge', id: 'edge' },
    { name: 'How it Works', href: '#how', id: 'how' },
    { name: 'FAQs', href: '#faq', id: 'faq' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">

          {/* Left side: Logo */}
          <div className="flex items-center gap-8">
            <div className="flex-shrink-0 flex flex-col justify-center">
              <Link href="/" className="text-[28px] font-bold text-[#1A73E8] tracking-tight leading-none mb-1">
                accredian
              </Link>
              <span className="text-[10px] text-[#6B7280] font-medium tracking-wide">credentials that matter</span>
            </div>
          </div>

          {/* Right side: Links */}
          <div className="hidden xl:flex items-center">
            <div className="flex space-x-5 h-full gap-3 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`text-base font-medium transition-all duration-300 relative py-2 ${activeSection === link.id
                    ? 'text-[#1A73E8]'
                    : 'text-[#4B5563] hover:text-[#1A73E8]'
                    }`}
                >
                  {link.name}
                  {/* Active Blue Underline */}
                  <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[3px] bg-[#1A73E8] transition-all duration-300 rounded-t-sm ${activeSection === link.id ? 'w-full opacity-100' : 'w-0 opacity-0'
                    }`}></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 px-4 pt-4 pb-6 shadow-lg absolute w-full left-0">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`text-lg font-medium px-2 py-1 ${activeSection === link.id ? 'text-[#1A73E8]' : 'text-[#4B5563]'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

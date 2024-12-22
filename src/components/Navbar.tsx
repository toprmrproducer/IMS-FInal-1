import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const navItems = [
  { label: 'About', path: '/about' },
  { label: 'AI & KOLs', path: '/ai-kols' },
  { label: 'Services', path: '/#services' },
  { label: 'Case Studies', path: '/#case-studies' },
  { label: 'Blog', path: '/#blog' },
  { label: 'Contact', path: '/#contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'h-16 bg-black/95 backdrop-blur-sm' : 'h-20 bg-transparent'
      }`}
    >
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`text-white/90 hover:text-[#FF0000] transition-colors text-sm font-medium tracking-wide ${
                  location.pathname === item.path ? 'text-[#FF0000]' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm py-4">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`text-white/90 hover:text-[#FF0000] transition-colors text-sm font-medium tracking-wide ${
                    location.pathname === item.path ? 'text-[#FF0000]' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
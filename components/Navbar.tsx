
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, ShoppingCart, BarChart3, BookOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Ecosystem', path: '/', icon: <Cpu className="w-4 h-4" /> },
    { name: 'Marketplace', path: '/marketplace', icon: <ShoppingCart className="w-4 h-4" /> },
    { name: 'Operations', path: '/console', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Agent Research', path: '/blog', icon: <BookOpen className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold tracking-tighter">PRODUCTIVITY PROTOCOL</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                  location.pathname === link.path ? 'text-black' : 'text-gray-500 hover:text-black'
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
            <Link
              to="/marketplace"
              className="bg-black text-white px-4 py-2 rounded-sm text-sm font-bold hover:bg-gray-800 transition-all"
            >
              GET THE EBOOK
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4 px-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-gray-800"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/marketplace"
            onClick={() => setIsOpen(false)}
            className="block w-full bg-black text-white text-center py-3 rounded-sm font-bold"
          >
            GET THE EBOOK
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

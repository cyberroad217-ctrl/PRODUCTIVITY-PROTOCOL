import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cpu, ShoppingCart, BarChart3, Search, FileText } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Ecosystem', path: '/', icon: <Cpu className="w-4 h-4" /> },
    { name: 'Marketplace', path: '/marketplace', icon: <ShoppingCart className="w-4 h-4" /> },
    { name: 'Operations', path: '/console', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Agent Web Search', path: '/search', icon: <Search className="w-4 h-4" /> },
    { name: 'Blog', path: '/blog', icon: <FileText className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          
          {/* Top row on mobile, left side on desktop */}
          <div className="flex justify-between items-center h-16 flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold tracking-tighter hidden sm:block">PRODUCTIVITY PROTOCOL</span>
              <span className="text-xl font-bold tracking-tighter sm:hidden">PROTOCOL</span>
            </Link>

            <Link
              to="/marketplace"
              className="md:hidden bg-black text-white px-4 py-1.5 text-xs font-bold hover:bg-gray-800 transition-all rounded-sm"
            >
              GET EBOOK
            </Link>
          </div>

          {/* Scrollable Nav Items Row */}
          <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border-t border-gray-100 md:border-none py-3 md:py-0 w-full md:w-auto">
            <div className="flex items-center space-x-6 w-max px-2 md:px-0">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center space-x-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
                      isActive ? 'text-black font-bold' : 'text-gray-500 hover:text-black'
                    }`}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                );
              })}
              
              <Link
                to="/marketplace"
                className="hidden md:flex bg-black text-white px-4 py-2 rounded-sm text-sm font-bold hover:bg-gray-800 transition-all ml-4"
              >
                GET THE EBOOK
              </Link>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
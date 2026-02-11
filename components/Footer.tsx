import React from 'react';
import { EXTERNAL_RESOURCES, CURRENT_YEAR, FUTURE_YEAR } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 tracking-tighter">PRODUCTIVITY PROTOCOL</h3>
            <p className="text-gray-500 max-w-sm mb-6">
              {`Empowering the world with quantum-grade digital assets. Built for high-demand, scalable digital products and AI-integrated workflows in ${FUTURE_YEAR}.`}
            </p>
            <div className="flex space-x-4">
              <span className="text-xs font-mono text-gray-400">v4.0.2 Quantum-Ready</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-widest">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {EXTERNAL_RESOURCES.map((res) => (
                <li key={res.name}>
                  <a href={res.url} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                    {res.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-widest">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black">Terms of Service</a></li>
              <li><a href="#" className="hover:text-black">Licensing</a></li>
              <li><a href="#" className="hover:text-black">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© {CURRENT_YEAR} <a href="https://productivityprotocol.netlify.app" className="hover:text-gray-800 transition-colors underline decoration-gray-300 hover:decoration-gray-800">Productivity Protocol</a>. All rights reserved. Powered by Trillions of Quantum Agents.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <span>DNA Server: SECURE</span>
            <span>Quantum Storage: ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
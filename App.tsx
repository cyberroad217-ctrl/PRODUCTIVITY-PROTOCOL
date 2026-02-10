import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Console from './pages/Console';
import Blog from './pages/Blog';
import AgentSearch from './pages/AgentSearch';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-black selection:text-white relative">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/console" element={<Console />} />
            <Route path="/search" element={<AgentSearch />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
        {/* Global AGI Copilot Assistant */}
        <Chatbot />
      </div>
    </Router>
  );
};

export default App;
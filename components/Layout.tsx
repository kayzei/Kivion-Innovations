import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Cpu, ChevronRight, Github, Twitter, Linkedin } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Innovations', path: '/innovations' },
    { label: 'Partnerships', path: '/zambia' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-kvi-950 text-slate-100 font-sans selection:bg-kvi-500 selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-kvi-950/80 backdrop-blur-md border-b border-kvi-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-kvi-500 to-blue-600 flex items-center justify-center shadow-lg shadow-kvi-500/20 group-hover:shadow-kvi-500/40 transition-all">
                <Globe className="text-white w-6 h-6 animate-pulse-slow" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tighter text-white">KVI</span>
                <span className="text-[0.6rem] uppercase tracking-widest text-kvi-400">Knowledge • Vision • Innovations</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive(item.path)
                      ? 'text-kvi-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/contact" className="px-5 py-2 rounded-full bg-kvi-500/10 border border-kvi-500/50 text-kvi-400 text-sm hover:bg-kvi-500 hover:text-white transition-all duration-300">
                Client Portal
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-kvi-900 border-b border-kvi-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.path)
                      ? 'bg-kvi-800 text-kvi-400'
                      : 'text-slate-300 hover:bg-kvi-800 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-kvi-900 border-t border-kvi-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Cpu className="text-kvi-500 w-6 h-6" />
                <span className="font-bold text-2xl text-white">KVI</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
                Engineering Tomorrow's Intelligence. We are a multinational visionary technology services company building digital transformation solutions for Africa and global emerging markets.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-500 hover:text-kvi-400 transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-slate-500 hover:text-kvi-400 transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-slate-500 hover:text-kvi-400 transition-colors"><Github size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Solutions</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link to="/innovations" className="hover:text-kvi-400 transition-colors">KVI Cloud Suite</Link></li>
                <li><Link to="/innovations" className="hover:text-kvi-400 transition-colors">Smart IoT Systems</Link></li>
                <li><Link to="/innovations" className="hover:text-kvi-400 transition-colors">Cybersecurity</Link></li>
                <li><Link to="/innovations" className="hover:text-kvi-400 transition-colors">Media Platforms</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link to="/services" className="hover:text-kvi-400 transition-colors">About Us</Link></li>
                <li><Link to="/zambia" className="hover:text-kvi-400 transition-colors">Global Expansion</Link></li>
                <li><Link to="/contact" className="hover:text-kvi-400 transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-kvi-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-kvi-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
            <p>&copy; {new Date().getFullYear()} Kiprojects Innovations. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-400">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
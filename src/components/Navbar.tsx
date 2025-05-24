import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User as User3D, Briefcase as Briefcase3D, Award as Award3D, FileText } from 'lucide-react';

const navItems = [
  { name: 'About Me', path: '/', icon: <User3D size={18} /> },
  { name: 'Projects', path: '/projects', icon: <Briefcase3D size={18} /> },
  { name: 'Certifications', path: '/certifications', icon: <Award3D size={18} /> },
  { name: 'Resume', path: '/resume', icon: <FileText size={18} /> },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 glass shadow-md' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between">
          <NavLink to="/" className="font-display text-xl font-bold text-primary-800">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Portfolio
            </motion.div>
          </NavLink>

          <ul className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    `relative px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-all duration-200 ${
                      isActive 
                        ? 'text-primary-700 bg-primary-100/50' 
                        : 'text-secondary-700 hover:text-primary-700 hover:bg-primary-100/50'
                    }`
                  }
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <button 
            className="md:hidden text-secondary-700 p-1" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {isMenuOpen && (
        <motion.div 
          className="md:hidden glass-card m-4 rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <ul className="py-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    `block px-6 py-3 font-medium flex items-center gap-3 ${
                      isActive 
                        ? 'text-primary-700 bg-primary-100/50' 
                        : 'text-secondary-700 hover:text-primary-700 hover:bg-primary-100/50'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
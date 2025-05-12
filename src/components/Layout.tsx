import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, Eye, Ear, Info, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Layout: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const routes = [
    { path: '/', name: 'Home', icon: <Home className="w-5 h-5" /> },
    { path: '/hearing-game', name: 'Hearing Game', icon: <Ear className="w-5 h-5" /> },
    { path: '/vision-game', name: 'Vision Game', icon: <Eye className="w-5 h-5" /> },
    { path: '/about', name: 'About', icon: <Info className="w-5 h-5" /> }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Eye className="w-6 h-6" />
              </motion.div>
              <span>Accessibility Awareness</span>
            </Link>
            
            {/* Desktop menu */}
            <nav className="hidden md:flex items-center space-x-8">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  className={`flex items-center gap-1.5 px-2 py-1 rounded hover:text-indigo-600 transition-colors ${
                    location.pathname === route.path
                      ? 'text-indigo-600 font-medium'
                      : 'text-gray-600'
                  }`}
                >
                  {route.icon}
                  {route.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden flex items-center text-gray-500"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-md"
          >
            <nav className="flex flex-col px-4 py-2 space-y-4">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    location.pathname === route.path
                      ? 'bg-indigo-50 text-indigo-600 font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {route.icon}
                  <span>{route.name}</span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 py-10 bg-gray-50">
        <div className="container-custom">
          <Outlet />
        </div>
      </main>

    </div>
  );
};

export default Layout;
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Skills", "Projects", "Certifications", "Contact"];

  return (
    <nav style={{
      ...navStyle, 
      backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.9)' : 'transparent',
      borderBottom: scrolled ? '1px solid #333' : 'none',
      padding: scrolled ? '15px 10%' : '25px 10%'
    }}>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="logo" 
        style={logoStyle}
      >
        GP.
      </motion.div>

      {/* Desktop Menu */}
      <ul style={desktopMenu}>
        {navLinks.map((link, i) => (
          <motion.li 
            key={link}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            style={{ position: 'relative' }}
          >
            <motion.a 
              href={`#${link.toLowerCase()}`} 
              onClick={() => setActiveTab(link)}
              style={{
                ...linkStyle,
                color: activeTab === link ? '#fff' : '#888', // White when active
              }}
              whileHover={{ color: '#fff' }} // Hover effect: turns white
            >
              {link}
            </motion.a>

            {/* Active Underline Animation */}
            {activeTab === link && (
              <motion.div 
                layoutId="underline"
                style={underlineStyle}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.li>
        ))}
      </ul>

      {/* Mobile Toggle icon would be handled here as before */}
    </nav>
  );
};

// Styles
const navStyle = { 
  position: 'fixed', width: '100%', top: 0, display: 'flex', 
  justifyContent: 'space-between', zIndex: 2000, 
  backdropFilter: 'blur(12px)', transition: 'all 0.4s ease' 
};

const logoStyle = { 
  fontSize: '1.8rem', fontWeight: '900', color: '#fff', 
  letterSpacing: '-1px', cursor: 'pointer' 
};

const desktopMenu = { 
  display: 'flex', gap: '35px', listStyle: 'none', alignItems: 'center' 
};

const linkStyle = { 
  textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600', 
  letterSpacing: '1px', textTransform: 'uppercase', transition: 'color 0.3s ease' 
};

const underlineStyle = {
  position: 'absolute',
  bottom: '-8px',
  left: 0,
  right: 0,
  height: '2px',
  background: '#fff',
  borderRadius: '2px'
};

export default Navbar;
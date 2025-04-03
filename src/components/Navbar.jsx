
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-club-dark shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-club-orange">
            VITKULT
          </h1>
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks />
          <Button variant="outline" className="border-club-orange text-club-orange hover:bg-club-orange hover:text-white">
            Sign In
          </Button>
        </div>
        
        <button 
          className="md:hidden text-club-orange"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-club-dark-accent py-4 px-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <NavLinks mobile />
            <Button variant="outline" className="border-club-orange text-club-orange hover:bg-club-orange hover:text-white w-full">
              Sign In
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ mobile = false }) => {
  const baseClasses = "text-white hover:text-club-orange transition-colors";
  const classes = mobile ? `${baseClasses} block py-2` : baseClasses;
  
  return (
    <>
      <a href="#home" className={classes}>Home</a>
      <a href="#about" className={classes}>About</a>
      <a href="#events" className={classes}>Events</a>
      <a href="#timeline" className={classes}>Timeline</a>
      <a href="#team" className={classes}>Team</a>
      <a href="#join" className={classes}>Join Us</a>
    </>
  );
};

export default Navbar;

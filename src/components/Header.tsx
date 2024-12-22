import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { Button } from './Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-600">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-primary-600">Services</Link>
            <Link to="/blog" className="text-gray-700 hover:text-primary-600">Blog</Link>
            <Button onClick={() => navigate('/contact')}>Contact Us</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-primary-600">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-primary-600">About</Link>
              <Link to="/services" className="text-gray-700 hover:text-primary-600">Services</Link>
              <Link to="/blog" className="text-gray-700 hover:text-primary-600">Blog</Link>
              <Button onClick={() => navigate('/contact')}>Contact Us</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
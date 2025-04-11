
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Newspaper, Calendar, Image, Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="relative bg-cream/90 backdrop-blur-sm border-b border-stone/10 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 z-20">
          <span className="text-xl md:text-2xl text-forest font-serif">Hearthside Village</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLinks />
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden text-forest z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation - Fullscreen overlay */}
      {isMenuOpen && (
        <nav className="md:hidden bg-cream/98 fixed inset-0 z-10 pt-20 pb-28">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-6">
            <NavLinks isMobile onClick={() => setIsMenuOpen(false)} />
          </div>
        </nav>
      )}

      {/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-cream/95 backdrop-blur-sm border-t border-stone/10 shadow-md z-20">
        <div className="flex justify-around items-center py-2">
          <Link 
            to="/" 
            className={`flex flex-col items-center p-2 ${location.pathname === '/' ? 'text-sage' : 'text-forest'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <Home size={20} />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link 
            to="/news" 
            className={`flex flex-col items-center p-2 ${location.pathname === '/news' ? 'text-sage' : 'text-forest'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <Newspaper size={20} />
            <span className="text-xs mt-1">News</span>
          </Link>
          <Link 
            to="/events" 
            className={`flex flex-col items-center p-2 ${location.pathname === '/events' ? 'text-sage' : 'text-forest'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <Calendar size={20} />
            <span className="text-xs mt-1">Events</span>
          </Link>
          <Link 
            to="/gallery" 
            className={`flex flex-col items-center p-2 ${location.pathname === '/gallery' ? 'text-sage' : 'text-forest'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <Image size={20} />
            <span className="text-xs mt-1">Gallery</span>
          </Link>
          <Link 
            to="/contact" 
            className={`flex flex-col items-center p-2 ${location.pathname === '/contact' ? 'text-sage' : 'text-forest'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <Mail size={20} />
            <span className="text-xs mt-1">Contact</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

const NavLinks = ({ isMobile = false, onClick }: { isMobile?: boolean; onClick?: () => void }) => {
  const links = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'News', path: '/news', icon: Newspaper },
    { name: 'Events', path: '/events', icon: Calendar },
    { name: 'Directory', path: '/directory', icon: User },
    { name: 'Resources', path: '/resources', icon: User },
    { name: 'Gallery', path: '/gallery', icon: Image },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className={`font-medium text-forest hover:text-sage transition-colors ${
            isMobile ? 'text-xl py-4 flex items-center gap-3' : ''
          }`}
          onClick={onClick}
        >
          {isMobile && <link.icon size={20} />}
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Header;

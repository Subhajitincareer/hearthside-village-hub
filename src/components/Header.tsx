
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-cream/90 backdrop-blur-sm border-b border-stone/10 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl text-forest font-serif">Hearthside Village</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLinks />
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden text-forest"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-cream/95 border-t border-stone/10 absolute w-full z-50">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLinks isMobile onClick={() => setIsMenuOpen(false)} />
          </div>
        </nav>
      )}
    </header>
  );
};

const NavLinks = ({ isMobile = false, onClick }: { isMobile?: boolean; onClick?: () => void }) => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'News', path: '/news' },
    { name: 'Events', path: '/events' },
    { name: 'Directory', path: '/directory' },
    { name: 'Resources', path: '/resources' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className={`font-medium text-forest hover:text-sage transition-colors ${
            isMobile ? 'text-lg py-2' : ''
          }`}
          onClick={onClick}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Header;

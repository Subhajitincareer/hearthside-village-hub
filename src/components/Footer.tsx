
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Mail, 
  MapPin, 
  Phone 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-forest text-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-serif mb-4">Hearthside Village</h3>
            <p className="mb-4 text-cream/90 max-w-md">
              A peaceful rural community nestled among rolling hills, lush forests, and open fields.
              We cherish our close-knit connections and natural surroundings.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream hover:text-sky transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-cream hover:text-sky transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:info@hearthsidevillage.com" className="text-cream hover:text-sky transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-sky transition-colors">Home</Link></li>
              <li><Link to="/news" className="hover:text-sky transition-colors">News</Link></li>
              <li><Link to="/events" className="hover:text-sky transition-colors">Events</Link></li>
              <li><Link to="/gallery" className="hover:text-sky transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-sky transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>123 Country Road, Rural County</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@hearthsidevillage.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cream/20 mt-8 pt-6 text-center text-cream/80">
          <p>&copy; {currentYear} Hearthside Village Community. All rights reserved.</p>
          <p className="text-sm mt-2">
            <Link to="/privacy" className="hover:text-sky transition-colors">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-sky transition-colors ml-2">Terms of Use</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

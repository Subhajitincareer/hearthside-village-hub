
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  Facebook, 
  Instagram, 
  Twitter,
  Mail, 
  MapPin, 
  Phone,
  Send,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, you would call an API to subscribe the user
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
      variant: "default"
    });
    
    setEmail('');
  };
  
  return (
    <footer className="bg-forest text-cream">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Sign-up */}
        <div className="mb-12 bg-forest-dark/20 backdrop-blur-sm p-6 rounded-lg border border-cream/10">
          <div className="text-center max-w-lg mx-auto">
            <h3 className="text-xl font-serif mb-2">Stay Connected</h3>
            <p className="mb-4 text-cream/80 text-sm sm:text-base">
              Subscribe to our newsletter for community updates, event notifications, and local news.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/50 h-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="bg-sage hover:bg-sage/80">
                <Send size={16} className="mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-serif mb-4">Hearthside Village</h3>
            <p className="mb-4 text-cream/90 max-w-md text-sm sm:text-base">
              A peaceful rural community nestled among rolling hills, lush forests, and open fields.
              We cherish our close-knit connections and natural surroundings.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-cream hover:text-sky transition-colors bg-cream/10 p-2 rounded-full">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-cream hover:text-sky transition-colors bg-cream/10 p-2 rounded-full">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-cream hover:text-sky transition-colors bg-cream/10 p-2 rounded-full">
                <Twitter size={18} />
              </a>
              <a href="mailto:info@hearthsidevillage.com" className="text-cream hover:text-sky transition-colors bg-cream/10 p-2 rounded-full">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link to="/" className="hover:text-sky transition-colors flex items-center group">
                  <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-sky transition-colors flex items-center group">
                  <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                  News
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-sky transition-colors flex items-center group">
                  <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                  Events
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-sky transition-colors flex items-center group">
                  <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky transition-colors flex items-center group">
                  <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="flex-shrink-0 mt-1 text-sage" />
                <span>123 Country Road, Rural County, RC 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="flex-shrink-0 text-sage" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="flex-shrink-0 text-sage" />
                <span>info@hearthsidevillage.com</span>
              </li>
              <li className="pt-3 mt-3 border-t border-cream/10">
                <Link to="/contact" className="inline-flex items-center hover:text-sky transition-colors">
                  <span className="mr-1">Visit our contact page</span>
                  <ExternalLink size={14} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cream/20 mt-10 pt-6 text-center text-cream/80 text-sm">
          <p>&copy; {currentYear} Hearthside Village Community. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy" className="hover:text-sky transition-colors">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-sky transition-colors ml-2">Terms of Use</Link> |
            <Link to="/accessibility" className="hover:text-sky transition-colors ml-2">Accessibility</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

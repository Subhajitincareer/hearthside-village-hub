
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionContainer from '@/components/SectionContainer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Mail, 
  Phone, 
  Search, 
  User, 
  MapPin, 
  ExternalLink, 
  Lock
} from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog';

// Sample resident data
const residents = [
  {
    id: '1',
    name: 'John & Sarah Williams',
    email: 'williams@example.com',
    phone: '(555) 123-4567',
    address: '123 Maple Lane',
    skills: ['Carpentry', 'Gardening'],
    image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-4.0.3&w=200&h=200&fit=crop'
  },
  {
    id: '2',
    name: 'Emily Thompson',
    email: 'emily@example.com',
    phone: '(555) 234-5678',
    address: '456 Oak Road',
    skills: ['Teaching', 'First Aid'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&w=200&h=200&fit=crop'
  },
  {
    id: '3',
    name: 'Robert Chen',
    email: 'robert@example.com',
    phone: '(555) 345-6789',
    address: '789 Pine Drive',
    skills: ['Plumbing', 'Electrical'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=200&h=200&fit=crop'
  },
  {
    id: '4',
    name: 'Maria Rodriguez',
    email: 'maria@example.com',
    phone: '(555) 456-7890',
    address: '101 Cedar Court',
    skills: ['Cooking', 'Childcare'],
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&w=200&h=200&fit=crop'
  },
  {
    id: '5',
    name: 'David & Lisa Johnson',
    email: 'johnson@example.com',
    phone: '(555) 567-8901',
    address: '202 Birch Avenue',
    skills: ['Farming', 'Equipment Repair'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&w=200&h=200&fit=crop'
  },
  {
    id: '6',
    name: 'James Wilson',
    email: 'james@example.com',
    phone: '(555) 678-9012',
    address: '303 Spruce Street',
    skills: ['Beekeeping', 'Woodworking'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&w=200&h=200&fit=crop'
  }
];

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  
  const filteredResidents = residents.filter(resident => 
    resident.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resident.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login (in a real app, this would call an API)
    setIsLoggedIn(true);
    setIsLoginDialogOpen(false);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection 
          title="Resident Directory"
          subtitle="Connect with your neighbors in the Hearthside community"
          imagePath="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3"
        />
        
        <SectionContainer
          title="Find Your Neighbors"
          subtitle="Browse through our community members or search for specific skills and services"
        >
          {!isLoggedIn ? (
            <div className="bg-cream/50 border border-stone/20 p-8 rounded-lg mb-8 text-center">
              <Lock size={48} className="mx-auto mb-4 text-stone/60" />
              <h3 className="text-xl font-serif text-forest mb-2">Login Required</h3>
              <p className="text-stone mb-6 max-w-lg mx-auto">
                The resident directory is available to community members only. 
                Please log in to access contact information.
              </p>
              <Button 
                onClick={() => setIsLoginDialogOpen(true)}
                className="bg-sage hover:bg-sage/90 text-white"
              >
                Log In
              </Button>
            </div>
          ) : (
            <>
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative flex-grow">
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone/60" />
                  <Input
                    placeholder="Search by name or skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-stone/30 focus:border-sage focus:ring-sage"
                  />
                </div>
                <Button 
                  variant="outline" 
                  className="border-stone/30 text-stone hover:border-sage hover:text-sage"
                  onClick={() => setSearchTerm('')}
                >
                  Clear
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResidents.map(resident => (
                  <Card key={resident.id} className="rustic-card overflow-hidden">
                    <div className="flex p-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                        <img 
                          src={resident.image} 
                          alt={resident.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-serif text-forest">{resident.name}</h3>
                        <div className="flex flex-wrap mt-2 gap-1">
                          {resident.skills.map((skill, idx) => (
                            <span 
                              key={idx}
                              className="text-xs bg-sage/10 text-sage px-2 py-1 rounded"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-stone/20 p-6 space-y-3 bg-cream/50">
                      <div className="flex items-start">
                        <Mail size={16} className="mr-3 text-sage mt-1 flex-shrink-0" />
                        <span>{resident.email}</span>
                      </div>
                      <div className="flex items-start">
                        <Phone size={16} className="mr-3 text-sage mt-1 flex-shrink-0" />
                        <span>{resident.phone}</span>
                      </div>
                      <div className="flex items-start">
                        <MapPin size={16} className="mr-3 text-sage mt-1 flex-shrink-0" />
                        <span>{resident.address}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              {filteredResidents.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-stone mb-2">No residents found matching "{searchTerm}"</p>
                  <Button 
                    variant="outline" 
                    className="border-stone/30 text-stone hover:border-sage hover:text-sage"
                    onClick={() => setSearchTerm('')}
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </>
          )}
          
          {/* Additional Information Section */}
          <div className="mt-16 bg-cream/50 border border-stone/20 p-8 rounded-lg">
            <h3 className="text-2xl font-serif text-forest mb-4">Community Directory Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-serif text-forest mb-2">Adding Your Information</h4>
                <p className="text-stone mb-4">
                  To be added to the community directory, please submit your information using the form linked below.
                  You can include your contact details, skills, and any services you offer to neighbors.
                </p>
                <Button asChild variant="outline" className="border-sage text-sage hover:bg-sage hover:text-white">
                  <a href="#" className="flex items-center">
                    Update Directory Information
                    <ExternalLink size={14} className="ml-2" />
                  </a>
                </Button>
              </div>
              
              <div>
                <h4 className="text-lg font-serif text-forest mb-2">Directory Privacy</h4>
                <p className="text-stone">
                  This directory is only accessible to verified community members. Your information will not be
                  shared with third parties or used for marketing purposes. You can update or remove your
                  information at any time by contacting the community administrators.
                </p>
              </div>
            </div>
          </div>
        </SectionContainer>
      </main>
      
      <Footer />
      
      {/* Login Dialog */}
      <Dialog open={isLoginDialogOpen} onOpenChange={setIsLoginDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Log in to Hearthside Community</DialogTitle>
            <DialogDescription>
              Access the resident directory and other member features
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleLogin} className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input
                id="email"
                type="email"
                value={loginForm.email}
                onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                placeholder="your@email.com"
                required
                className="border-stone/30 focus:border-sage focus:ring-sage"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">Password</label>
              <Input
                id="password"
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                placeholder="••••••••"
                required
                className="border-stone/30 focus:border-sage focus:ring-sage"
              />
            </div>
            
            <div className="text-sm text-right">
              <a href="#" className="text-sage hover:text-forest">Forgot password?</a>
            </div>
            
            <DialogFooter className="px-0 pt-4">
              <Button type="submit" className="w-full bg-sage hover:bg-sage/90 text-white">
                Log In
              </Button>
            </DialogFooter>
          </form>
          
          <div className="text-center pt-4 border-t border-stone/20 text-sm text-stone">
            <p>
              Don't have an account? Contact community administrators to request access.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Directory;

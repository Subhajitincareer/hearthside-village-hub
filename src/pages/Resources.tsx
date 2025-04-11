
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionContainer from '@/components/SectionContainer';
import ResourceCard from '@/components/ResourceCard';
import { resourceItems } from '@/data/sampleData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';
import { useState } from 'react';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredResources = resourceItems.filter(resource => 
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection 
          title="Services & Resources"
          subtitle="Useful information and resources for our community members"
          imagePath="https://images.unsplash.com/photo-1565033862631-03318c5b33a0?ixlib=rb-4.0.3"
        />
        
        <SectionContainer
          title="Community Resources"
          subtitle="Find information about local services, healthcare, education, and more"
        >
          <div className="flex items-center space-x-4 mb-8">
            <div className="relative flex-grow">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone/60" />
              <Input
                placeholder="Search resources..."
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
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="bg-cream/50">
              <TabsTrigger value="all">All Resources</TabsTrigger>
              <TabsTrigger value="health">Health</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="agriculture">Agriculture</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map(resource => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
              
              {filteredResources.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-stone mb-2">No resources found matching "{searchTerm}"</p>
                  <Button 
                    variant="outline" 
                    className="border-stone/30 text-stone hover:border-sage hover:text-sage"
                    onClick={() => setSearchTerm('')}
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="health" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources
                  .filter(item => item.title.includes('Healthcare'))
                  .map(resource => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="education" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources
                  .filter(item => item.title.includes('Schools'))
                  .map(resource => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="agriculture" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources
                  .filter(item => 
                    item.title.includes('Agricultural') || 
                    item.title.includes('Land Management')
                  )
                  .map(resource => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="community" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources
                  .filter(item => 
                    item.title.includes('Community') || 
                    item.title.includes('Financial')
                  )
                  .map(resource => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Emergency Resources */}
          <div className="mt-12 bg-rust/10 border border-rust/20 p-6 rounded-lg">
            <div className="flex items-start mb-4">
              <div className="mr-4 bg-white p-2 rounded-full">
                <ShieldCheck size={32} className="text-rust" />
              </div>
              <div>
                <h3 className="text-xl font-serif text-rust mb-1">Emergency Resources</h3>
                <p className="text-stone">Important contact information for emergencies</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-medium text-forest mb-2">Medical Emergency</h4>
                <p className="text-sm text-stone mb-1"><strong>Emergency:</strong> 911</p>
                <p className="text-sm text-stone mb-1"><strong>County Hospital:</strong> (555) 888-9999</p>
                <p className="text-sm text-stone"><strong>Local Clinic:</strong> (555) 777-8888</p>
              </div>
              
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-medium text-forest mb-2">Fire & Rescue</h4>
                <p className="text-sm text-stone mb-1"><strong>Emergency:</strong> 911</p>
                <p className="text-sm text-stone mb-1"><strong>Fire Station:</strong> (555) 666-7777</p>
                <p className="text-sm text-stone"><strong>Forest Service:</strong> (555) 555-6666</p>
              </div>
              
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-medium text-forest mb-2">Law Enforcement</h4>
                <p className="text-sm text-stone mb-1"><strong>Emergency:</strong> 911</p>
                <p className="text-sm text-stone mb-1"><strong>Sheriff:</strong> (555) 444-5555</p>
                <p className="text-sm text-stone"><strong>Non-Emergency:</strong> (555) 333-4444</p>
              </div>
            </div>
          </div>
        </SectionContainer>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;

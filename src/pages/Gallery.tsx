
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionContainer from '@/components/SectionContainer';
import PhotoGallery from '@/components/PhotoGallery';
import { galleryImages } from '@/data/sampleData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  // For a real app, these would be fetched from a database
  const seasons = {
    spring: galleryImages.slice(0, 3),
    summer: galleryImages.slice(2, 5),
    autumn: galleryImages.slice(4, 7),
    winter: galleryImages.slice(1, 4)
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection 
          title="Community Photo Gallery"
          subtitle="Capturing the beauty and life of our rural community"
          imagePath="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3"
        />
        
        <SectionContainer
          title="Browse Photos"
          subtitle="Explore beautiful moments from our community life and scenic surroundings"
        >
          <div className="flex justify-end mb-6">
            <Link to="/submit">
              <Button className="bg-sage hover:bg-sage/90 text-white">
                <Upload size={18} className="mr-2" />
                Submit Photos
              </Button>
            </Link>
          </div>
          
          <Tabs 
            defaultValue="all" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="mb-8"
          >
            <TabsList className="bg-cream/50">
              <TabsTrigger value="all">All Photos</TabsTrigger>
              <TabsTrigger value="spring">Spring</TabsTrigger>
              <TabsTrigger value="summer">Summer</TabsTrigger>
              <TabsTrigger value="autumn">Autumn</TabsTrigger>
              <TabsTrigger value="winter">Winter</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <PhotoGallery images={galleryImages} />
            </TabsContent>
            
            <TabsContent value="spring" className="mt-6">
              <PhotoGallery images={seasons.spring} />
            </TabsContent>
            
            <TabsContent value="summer" className="mt-6">
              <PhotoGallery images={seasons.summer} />
            </TabsContent>
            
            <TabsContent value="autumn" className="mt-6">
              <PhotoGallery images={seasons.autumn} />
            </TabsContent>
            
            <TabsContent value="winter" className="mt-6">
              <PhotoGallery images={seasons.winter} />
            </TabsContent>
          </Tabs>
          
          {/* Gallery Guidelines */}
          <div className="mt-12 bg-cream border border-stone/20 p-6 rounded-lg">
            <h3 className="text-xl font-serif text-forest mb-4">Gallery Guidelines</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-forest mb-2">Submitting Photos</h4>
                <p className="text-stone mb-4">
                  We welcome photos from community members! To submit your images:
                </p>
                <ul className="list-disc pl-5 text-stone space-y-1">
                  <li>Use the "Submit Photos" button above</li>
                  <li>Include a brief caption or description</li>
                  <li>Photos should be at least 1200px wide</li>
                  <li>Maximum of 5 photos per submission</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-forest mb-2">Content Guidelines</h4>
                <p className="text-stone mb-4">
                  To maintain our community standards, please ensure your submissions:
                </p>
                <ul className="list-disc pl-5 text-stone space-y-1">
                  <li>Feature local scenery, events, or community life</li>
                  <li>Respect the privacy of community members</li>
                  <li>Are family-friendly and appropriate</li>
                  <li>Don't include sensitive or private information</li>
                </ul>
              </div>
            </div>
          </div>
        </SectionContainer>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;


import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionContainer from '@/components/SectionContainer';
import NewsCard from '@/components/NewsCard';
import { newsItems } from '@/data/sampleData';
import { Button } from '@/components/ui/button';
import { PlusCircle, Filter } from 'lucide-react';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter
} from '@/components/ui/drawer';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from 'react';

const News = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pb-16 md:pb-0">
        <HeroSection 
          title="Community News"
          subtitle="Stay updated with the latest happenings in our community"
          imagePath="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3"
        />
        
        <SectionContainer
          title="Latest Updates"
          subtitle="Find out what's happening in and around Hearthside Village"
        >
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
            <div className="order-2 md:order-1">
              <Collapsible
                open={isFiltersOpen}
                onOpenChange={setIsFiltersOpen}
                className="w-full md:w-auto"
              >
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full md:w-auto border-stone/30 text-stone flex gap-2">
                    <Filter size={16} />
                    <span>Filters</span>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="bg-white shadow-md rounded-md mt-2 p-4 border border-stone/20 w-full">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-forest mb-2">Categories</h4>
                      <div className="flex flex-wrap gap-2">
                        <Button variant="outline" size="sm" className="border-sage/30 text-sage bg-sage/5">Community</Button>
                        <Button variant="outline" size="sm" className="border-stone/30 text-stone">Events</Button>
                        <Button variant="outline" size="sm" className="border-stone/30 text-stone">Infrastructure</Button>
                        <Button variant="outline" size="sm" className="border-stone/30 text-stone">Agriculture</Button>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-forest mb-2">Date Range</h4>
                      <div className="flex flex-wrap gap-2">
                        <Button variant="outline" size="sm" className="border-sage/30 text-sage bg-sage/5">This Month</Button>
                        <Button variant="outline" size="sm" className="border-stone/30 text-stone">Last 3 Months</Button>
                        <Button variant="outline" size="sm" className="border-stone/30 text-stone">This Year</Button>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
            
            {/* Desktop Submit News Button */}
            <div className="order-1 md:order-2">
              <Button className="bg-sage hover:bg-sage/90 text-white hidden md:flex">
                <PlusCircle size={18} className="mr-2" />
                Submit News
              </Button>
            </div>
            
            {/* Mobile Add News Button - Fixed Floating */}
            <div className="md:hidden fixed bottom-20 right-4 z-10 order-3">
              <Drawer>
                <DrawerTrigger asChild>
                  <Button size="icon" className="h-14 w-14 rounded-full bg-sage hover:bg-sage/90 text-white shadow-lg">
                    <PlusCircle size={24} />
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Submit News</DrawerTitle>
                  </DrawerHeader>
                  <div className="px-4 py-2">
                    <p className="text-sm text-stone mb-4">
                      Have community news to share? Submit your news article for review.
                      All submissions will be reviewed before publishing.
                    </p>
                    <Button className="w-full bg-sage hover:bg-sage/90 text-white">
                      Go to News Submission Form
                    </Button>
                  </div>
                  <DrawerFooter className="pt-2">
                    <Button variant="outline">Cancel</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Duplicate some news items to fill the page */}
            {[...newsItems, ...newsItems, ...newsItems].map((news, index) => (
              <NewsCard 
                key={`${news.id}-${index}`} 
                news={{...news, id: `${news.id}-${index}`}} 
              />
            ))}
          </div>
          
          <div className="mt-10 flex justify-center">
            <div className="flex space-x-1 md:space-x-2">
              <Button variant="outline" className="border-stone/30 text-stone h-10 w-10 md:w-auto p-0 md:px-4" disabled>
                <span className="hidden md:inline">Previous</span>
                <span className="md:hidden">&lt;</span>
              </Button>
              <Button variant="outline" className="border-sage bg-sage/10 text-sage h-10 w-10 md:w-auto p-0 md:px-4">
                1
              </Button>
              <Button variant="outline" className="border-stone/30 text-stone h-10 w-10 md:w-auto p-0 md:px-4">
                2
              </Button>
              <Button variant="outline" className="border-stone/30 text-stone h-10 w-10 md:w-auto p-0 md:px-4">
                3
              </Button>
              <Button variant="outline" className="border-stone/30 text-stone h-10 w-10 md:w-auto p-0 md:px-4">
                <span className="hidden md:inline">Next</span>
                <span className="md:hidden">&gt;</span>
              </Button>
            </div>
          </div>
        </SectionContainer>
      </main>
      
      <Footer />
    </div>
  );
};

export default News;

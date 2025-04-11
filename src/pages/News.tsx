
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionContainer from '@/components/SectionContainer';
import NewsCard from '@/components/NewsCard';
import { newsItems } from '@/data/sampleData';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

const News = () => {
  // For a real implementation, we would fetch news from an API
  // and implement filtering, pagination, etc.
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection 
          title="Community News"
          subtitle="Stay updated with the latest happenings in our community"
          imagePath="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3"
        />
        
        <SectionContainer
          title="Latest Updates"
          subtitle="Find out what's happening in and around Hearthside Village"
        >
          <div className="flex justify-end mb-6">
            <Button className="bg-sage hover:bg-sage/90 text-white">
              <PlusCircle size={18} className="mr-2" />
              Submit News
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Duplicate some news items to fill the page */}
            {[...newsItems, ...newsItems, ...newsItems].map((news, index) => (
              <NewsCard 
                key={`${news.id}-${index}`} 
                news={{...news, id: `${news.id}-${index}`}} 
              />
            ))}
          </div>
          
          <div className="mt-10 flex justify-center">
            <div className="flex space-x-2">
              <Button variant="outline" className="border-stone/30 text-stone" disabled>
                Previous
              </Button>
              <Button variant="outline" className="border-sage bg-sage/10 text-sage">
                1
              </Button>
              <Button variant="outline" className="border-stone/30 text-stone">
                2
              </Button>
              <Button variant="outline" className="border-stone/30 text-stone">
                3
              </Button>
              <Button variant="outline" className="border-stone/30 text-stone">
                Next
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

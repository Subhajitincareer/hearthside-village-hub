
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionContainer from '@/components/SectionContainer';
import EventCard from '@/components/EventCard';
import { eventItems } from '@/data/sampleData';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, List, PlusCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';

const Events = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection 
          title="Community Events"
          subtitle="Find out what's happening in our community and get involved"
          imagePath="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3"
        />
        
        <SectionContainer
          title="Upcoming Events"
          subtitle="Join us for these upcoming community gatherings and activities"
        >
          <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <Tabs 
              defaultValue="list" 
              value={viewMode} 
              onValueChange={(value) => setViewMode(value as 'list' | 'calendar')}
              className="w-full md:w-auto"
            >
              <TabsList className="grid w-full md:w-auto grid-cols-2">
                <TabsTrigger value="list" className="flex items-center gap-2">
                  <List size={16} />
                  <span>List View</span>
                </TabsTrigger>
                <TabsTrigger value="calendar" className="flex items-center gap-2">
                  <CalendarIcon size={16} />
                  <span>Calendar View</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
            
            <Button className="bg-sage hover:bg-sage/90 text-white">
              <PlusCircle size={18} className="mr-2" />
              Submit Event
            </Button>
          </div>
          
          <TabsContent value="list" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Duplicate some event items to fill the page */}
              {[...eventItems, ...eventItems].map((event, index) => (
                <EventCard 
                  key={`${event.id}-${index}`} 
                  event={{...event, id: `${event.id}-${index}`}} 
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="calendar" className="mt-0">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 lg:w-1/3">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border border-stone/20 shadow bg-white"
                />
              </div>
              
              <div className="md:w-1/2 lg:w-2/3">
                <h3 className="text-xl font-serif text-forest mb-4">
                  Events on {date?.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </h3>
                
                <div className="space-y-4">
                  {/* Show some sample events for the selected date */}
                  <div className="p-4 border border-stone/20 rounded-md bg-white shadow-sm">
                    <h4 className="font-medium text-forest">Community Garden Work Day</h4>
                    <p className="text-sm text-stone mb-2">10:00 AM - 2:00 PM • Community Garden</p>
                    <p className="text-stone">Join us to prepare the garden beds for spring planting. Bring gloves and tools if you have them!</p>
                  </div>
                  
                  <div className="p-4 border border-stone/20 rounded-md bg-white shadow-sm">
                    <h4 className="font-medium text-forest">Town Council Meeting</h4>
                    <p className="text-sm text-stone mb-2">7:00 PM - 9:00 PM • Town Hall</p>
                    <p className="text-stone">Monthly town council meeting to discuss community matters. Open to all residents.</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </SectionContainer>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;

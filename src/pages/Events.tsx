
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionContainer from '@/components/SectionContainer';
import EventCard from '@/components/EventCard';
import { eventItems } from '@/data/sampleData';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, List, PlusCircle, Filter } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { 
  Drawer, 
  DrawerContent, 
  DrawerTrigger, 
  DrawerHeader,
  DrawerTitle,
  DrawerFooter
} from '@/components/ui/drawer';

const Events = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pb-16 md:pb-0">
        <HeroSection 
          title="Community Events"
          subtitle="Find out what's happening in our community and get involved"
          imagePath="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3"
        />
        
        <SectionContainer
          title="Upcoming Events"
          subtitle="Join us for these upcoming community gatherings and activities"
        >
          <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
            {/* Desktop View Switcher */}
            <div className="hidden md:block">
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
            </div>
            
            {/* Mobile View Switcher */}
            <div className="md:hidden flex space-x-2 w-full">
              <Button 
                variant={viewMode === 'list' ? 'default' : 'outline'} 
                className={`flex-1 ${viewMode === 'list' ? 'bg-sage text-white' : 'border-sage text-sage'}`}
                onClick={() => setViewMode('list')}
              >
                <List size={16} className="mr-2" />
                List
              </Button>
              <Button 
                variant={viewMode === 'calendar' ? 'default' : 'outline'} 
                className={`flex-1 ${viewMode === 'calendar' ? 'bg-sage text-white' : 'border-sage text-sage'}`}
                onClick={() => setViewMode('calendar')}
              >
                <CalendarIcon size={16} className="mr-2" />
                Calendar
              </Button>
            </div>
            
            {/* Desktop Add Event Button */}
            <Button className="bg-sage hover:bg-sage/90 text-white hidden md:flex">
              <PlusCircle size={18} className="mr-2" />
              Submit Event
            </Button>
            
            {/* Mobile Add Event Button - Fixed Floating */}
            <div className="md:hidden fixed bottom-20 right-4 z-10">
              <Drawer>
                <DrawerTrigger asChild>
                  <Button size="icon" className="h-14 w-14 rounded-full bg-sage hover:bg-sage/90 text-white shadow-lg">
                    <PlusCircle size={24} />
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Submit New Event</DrawerTitle>
                  </DrawerHeader>
                  <div className="px-4 py-2">
                    <p className="text-sm text-stone mb-4">
                      To submit a new community event, please fill out our event submission form. 
                      All events will be reviewed before posting.
                    </p>
                    <Button className="w-full bg-sage hover:bg-sage/90 text-white">
                      Go to Event Form
                    </Button>
                  </div>
                  <DrawerFooter className="pt-2">
                    <Button variant="outline">Cancel</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
          
          <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as 'list' | 'calendar')}>
            <TabsContent value="list" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2 lg:w-1/3">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border border-stone/20 shadow bg-white max-w-full mx-auto"
                  />
                </div>
                
                <div className="w-full md:w-1/2 lg:w-2/3">
                  <h3 className="text-xl font-serif text-forest mb-4">
                    Events on {date?.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Show some sample events for the selected date */}
                    <div className="p-4 border border-stone/20 rounded-md bg-white shadow-sm">
                      <h4 className="font-medium text-forest">Community Garden Work Day</h4>
                      <p className="text-sm text-stone mb-2">10:00 AM - 2:00 PM • Community Garden</p>
                      <p className="text-stone">Join us to prepare the garden beds for spring planting. Bring gloves and tools if you have them!</p>
                      <Button variant="outline" className="mt-3 border-sage text-sage hover:bg-sage/10 text-sm py-1 px-3 h-auto">
                        View Details
                      </Button>
                    </div>
                    
                    <div className="p-4 border border-stone/20 rounded-md bg-white shadow-sm">
                      <h4 className="font-medium text-forest">Town Council Meeting</h4>
                      <p className="text-sm text-stone mb-2">7:00 PM - 9:00 PM • Town Hall</p>
                      <p className="text-stone">Monthly town council meeting to discuss community matters. Open to all residents.</p>
                      <Button variant="outline" className="mt-3 border-sage text-sage hover:bg-sage/10 text-sm py-1 px-3 h-auto">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </SectionContainer>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;

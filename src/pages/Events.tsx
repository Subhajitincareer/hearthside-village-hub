
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionContainer from '@/components/SectionContainer';
import EventCard from '@/components/EventCard';
import { eventItems } from '@/data/sampleData';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, List, PlusCircle, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { format, addMonths, subMonths, isSameDay } from 'date-fns';
import { Link } from 'react-router-dom';
import { 
  Drawer, 
  DrawerContent, 
  DrawerTrigger, 
  DrawerHeader,
  DrawerTitle,
  DrawerFooter
} from '@/components/ui/drawer';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Add some sample event dates
const eventDates = [
  new Date(2025, 3, 5),
  new Date(2025, 3, 12),
  new Date(2025, 3, 15),
  new Date(2025, 3, 22),
  new Date(2025, 3, 28),
  new Date(2025, 4, 3),
  new Date(2025, 4, 10),
];

const Events = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Function to handle date change in calendar
  const handleDateChange = (newDate: Date | undefined) => {
    setDate(newDate);
  };
  
  // Function to navigate to previous month
  const previousMonth = () => {
    setCurrentMonth(prev => subMonths(prev, 1));
  };
  
  // Function to navigate to next month
  const nextMonth = () => {
    setCurrentMonth(prev => addMonths(prev, 1));
  };
  
  // Filter events for the selected date
  const eventsForSelectedDate = eventItems.filter(event => {
    // In a real app, you would compare actual dates
    // This is a simplified version
    return date && date.getDate() % 5 === 0; // Simple mock for demo
  });
  
  // Filter events based on category
  const filteredEvents = selectedCategory 
    ? eventItems.filter(event => event.title.toLowerCase().includes(selectedCategory.toLowerCase()))
    : eventItems;
  
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
            
            {/* Category Filter */}
            <div className="w-full md:w-auto order-3 md:order-2">
              <Select onValueChange={(value) => setSelectedCategory(value)}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Events</SelectItem>
                  <SelectItem value="community">Community</SelectItem>
                  <SelectItem value="garden">Garden</SelectItem>
                  <SelectItem value="meeting">Meetings</SelectItem>
                  <SelectItem value="festival">Festivals</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Desktop Add Event Button */}
            <Button className="bg-sage hover:bg-sage/90 text-white hidden md:flex order-2 md:order-3">
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
                {filteredEvents.map((event, index) => (
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
                  <div className="bg-white rounded-lg shadow border border-stone/10 p-4">
                    <div className="flex items-center justify-between mb-4">
                      <Button variant="outline" size="icon" onClick={previousMonth} className="h-8 w-8 p-0">
                        <ChevronLeft size={16} />
                      </Button>
                      <h3 className="text-lg font-medium">
                        {format(currentMonth, 'MMMM yyyy')}
                      </h3>
                      <Button variant="outline" size="icon" onClick={nextMonth} className="h-8 w-8 p-0">
                        <ChevronRight size={16} />
                      </Button>
                    </div>
                    
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={handleDateChange}
                      month={currentMonth}
                      onMonthChange={setCurrentMonth}
                      className="rounded-md border-0 shadow-none p-0 pointer-events-auto"
                      modifiers={{
                        hasEvent: eventDates
                      }}
                      modifiersStyles={{
                        hasEvent: {
                          backgroundColor: "rgba(113, 128, 97, 0.1)",
                          fontWeight: "bold",
                          border: "1px solid rgba(113, 128, 97, 0.3)"
                        }
                      }}
                    />
                    
                    <div className="mt-4 pt-3 border-t border-stone/10 text-xs text-stone flex items-center">
                      <div className="flex items-center mr-4">
                        <div className="w-3 h-3 bg-sage/20 border border-sage/30 rounded-sm mr-1.5"></div>
                        <span>Events</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-forest/10 border border-forest/20 rounded-sm mr-1.5"></div>
                        <span>Today</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 lg:w-2/3">
                  <h3 className="text-xl font-serif text-forest mb-4">
                    Events on {date?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                  </h3>
                  
                  {eventsForSelectedDate.length > 0 ? (
                    <div className="space-y-4">
                      {eventsForSelectedDate.map((event, index) => (
                        <div key={index} className="p-4 border border-stone/20 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="font-medium text-forest">{event.title}</h4>
                          <p className="text-sm text-stone mb-2">{event.time} • {event.location}</p>
                          <p className="text-stone line-clamp-2">{event.description}</p>
                          <Link to={`/events/${event.id}`}>
                            <Button variant="outline" className="mt-3 border-sage text-sage hover:bg-sage/10 text-sm py-1 px-3 h-auto">
                              View Details
                            </Button>
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-6 border border-stone/20 rounded-md bg-white text-center">
                      <p className="text-stone mb-2">No events scheduled for this date.</p>
                      <Button variant="outline" className="mt-2 border-sage text-sage hover:bg-sage/10">
                        Choose Another Date
                      </Button>
                    </div>
                  )}
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

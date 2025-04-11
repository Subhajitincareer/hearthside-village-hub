
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { eventItems } from '@/data/sampleData';
import { Calendar, Clock, MapPin, ChevronLeft, Share2, Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { EventItem } from '@/components/EventCard';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<EventItem | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Find the event from the sample data
    const foundEvent = eventItems.find(item => item.id === id?.split('-')[0]);
    
    if (foundEvent) {
      setEvent(foundEvent);
      // Simulate loading
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [id]);
  
  // Generate calendar file data (iCal format)
  const generateCalendarFile = (event: EventItem) => {
    // This is a simplified version
    const eventDate = new Date(event.date);
    const formattedDate = eventDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    
    const icalData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.description}`,
      `LOCATION:${event.location}`,
      `DTSTART:${formattedDate}`,
      `DTEND:${formattedDate}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');
    
    const blob = new Blob([icalData], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `${event.title.replace(/\s+/g, '-')}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  // If event not found
  if (!event && isLoaded) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <h1 className="text-2xl font-serif text-forest mb-4">Event Not Found</h1>
            <p className="text-stone mb-6">The event you're looking for doesn't exist or has been removed.</p>
            <Link to="/events">
              <Button className="bg-sage hover:bg-sage/90 text-white">
                Return to Events
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className={`flex-grow transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {event && (
          <>
            {/* Hero Image */}
            {event.imagePath && (
              <div 
                className="w-full h-56 md:h-80 lg:h-96 bg-cover bg-center"
                style={{ backgroundImage: `url(${event.imagePath})` }}
              />
            )}
            
            <div className="container mx-auto px-4 py-6 md:py-10">
              {/* Breadcrumbs */}
              <div className="mb-6">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link to="/">Home</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link to="/events">Events</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>{event.title}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              
              <div className="md:max-w-3xl mx-auto">
                {/* Back Button for Mobile */}
                <div className="mb-4 md:hidden">
                  <Link to="/events">
                    <Button variant="outline" className="border-stone/30 text-stone flex items-center gap-2">
                      <ChevronLeft size={16} />
                      <span>Back to Events</span>
                    </Button>
                  </Link>
                </div>
                
                {/* Event Title */}
                <h1 className="text-2xl md:text-4xl font-serif text-forest mb-6 leading-tight">
                  {event.title}
                </h1>
                
                {/* Event Details Card */}
                <div className="bg-cream rounded-lg p-5 shadow-sm border border-stone/10 mb-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center text-forest">
                        <Calendar size={18} className="mr-3 text-sage" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-forest">
                        <Clock size={18} className="mr-3 text-sage" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-forest">
                        <MapPin size={18} className="mr-3 text-sage" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-3 md:items-end">
                      <Button 
                        onClick={() => event && generateCalendarFile(event)}
                        className="bg-sage hover:bg-sage/90 text-white w-full md:w-auto"
                      >
                        <Download size={16} className="mr-2" />
                        Add to Calendar
                      </Button>
                      
                      <Button variant="outline" className="border-sage text-sage hover:bg-sage/10 w-full md:w-auto">
                        <Share2 size={16} className="mr-2" />
                        Share Event
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Event Description */}
                <div className="prose max-w-none text-stone text-base md:text-lg leading-relaxed space-y-6">
                  <h2 className="text-xl md:text-2xl font-serif text-forest">About This Event</h2>
                  
                  <p>{event.description}</p>
                  
                  <p>
                    Join us for this special community event where neighbors can connect, share stories, and build stronger relationships. This event is open to all residents of Hearthside Village and surrounding areas.
                  </p>
                  
                  <p>
                    Activities will include local food tastings, live music from community members, and interactive workshops. Children are welcome, and there will be dedicated activities for younger participants.
                  </p>
                  
                  <h3 className="text-lg md:text-xl font-serif text-forest">What to Bring</h3>
                  <ul className="list-disc pl-6">
                    <li>A dish to share (if possible)</li>
                    <li>Lawn chairs or blankets for seating</li>
                    <li>Reusable water bottles</li>
                    <li>Musical instruments (if you'd like to participate in the jam session)</li>
                  </ul>
                  
                  <h3 className="text-lg md:text-xl font-serif text-forest">Contact Information</h3>
                  <p>
                    For any questions about this event, please contact the event organizer at events@hearthsidevillage.com or call (555) 123-4567.
                  </p>
                </div>
                
                {/* Back to Events */}
                <div className="mt-8 pt-6 border-t border-stone/20">
                  <Link to="/events">
                    <Button className="bg-sage hover:bg-sage/90 text-white">
                      <ChevronLeft size={16} className="mr-1" />
                      Back to Events
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default EventDetail;

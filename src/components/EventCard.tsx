import { Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  imagePath?: string;
}

interface EventCardProps {
  event: EventItem;
}

const EventCard = ({ event }: EventCardProps) => {
  const { id, title, description, date, time, location, imagePath } = event;
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate lazy loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={`rustic-card overflow-hidden hover:translate-y-[-5px] duration-300 transition-opacity ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {imagePath && (
        <div 
          className="h-48 bg-cover bg-center relative transition-transform hover:scale-105 duration-500"
          style={{ backgroundImage: `url(${imagePath})` }}
        >
          <div className="absolute bottom-0 left-0 right-0 bg-cream/80 backdrop-blur-sm p-2">
            <div className="flex items-center text-forest">
              <Calendar size={14} className="mr-1 text-sage flex-shrink-0" />
              <span className="text-xs truncate">{date}</span>
            </div>
          </div>
        </div>
      )}
      
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-serif text-forest mb-2 line-clamp-2">{title}</h3>
        <p className="text-stone mb-4 text-sm md:text-base line-clamp-3">{description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-stone text-sm">
            <Clock size={16} className="mr-2 text-sage flex-shrink-0" />
            <span className="truncate">{time}</span>
          </div>
          
          <div className="flex items-center text-stone text-sm">
            <MapPin size={16} className="mr-2 text-sage flex-shrink-0" />
            <span className="truncate">{location}</span>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button className="w-1/2 bg-sage hover:bg-sage/90 text-white text-sm py-2 h-auto">
            Add to Calendar
          </Button>
          <Link to={`/events/${id}`} className="w-1/2">
            <Button variant="outline" className="w-full border-sage text-sage hover:bg-sage/10 text-sm py-2 h-auto">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

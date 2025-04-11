
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  const { title, description, date, time, location, imagePath } = event;
  
  return (
    <div className="rustic-card overflow-hidden hover:translate-y-[-5px] duration-300">
      {imagePath && (
        <div 
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${imagePath})` }}
        />
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-serif text-forest mb-3">{title}</h3>
        <p className="text-stone mb-4">{description}</p>
        
        <div className="space-y-2 mb-5">
          <div className="flex items-center text-stone">
            <Calendar size={16} className="mr-2 text-sage" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center text-stone">
            <Clock size={16} className="mr-2 text-sage" />
            <span>{time}</span>
          </div>
          
          <div className="flex items-center text-stone">
            <MapPin size={16} className="mr-2 text-sage" />
            <span>{location}</span>
          </div>
        </div>
        
        <Button className="w-full bg-sage hover:bg-sage/90 text-white">
          Add to Calendar
        </Button>
      </div>
    </div>
  );
};

export default EventCard;

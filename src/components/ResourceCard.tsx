
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  isExternal?: boolean;
}

interface ResourceCardProps {
  resource: ResourceItem;
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  const { title, description, icon: Icon, link, isExternal } = resource;
  
  return (
    <div className="rustic-card p-6 h-full hover:translate-y-[-5px] duration-300">
      <div className="text-sage mb-4">
        <Icon size={32} />
      </div>
      
      <h3 className="text-xl font-serif text-forest mb-3">{title}</h3>
      <p className="text-stone mb-4">{description}</p>
      
      {isExternal ? (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-sage hover:text-forest font-medium"
        >
          Learn More
          <ExternalLink size={14} className="ml-1" />
        </a>
      ) : (
        <Link to={link} className="text-sage hover:text-forest font-medium">
          Learn More
        </Link>
      )}
    </div>
  );
};

export default ResourceCard;

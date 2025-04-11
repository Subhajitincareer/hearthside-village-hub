import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imagePath?: string;
}

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard = ({ news }: NewsCardProps) => {
  const { id, title, excerpt, date, author, category, imagePath } = news;
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate lazy loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={`rustic-card overflow-hidden flex flex-col h-full hover:translate-y-[-5px] duration-300 transition-opacity ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {imagePath && (
        <div className="relative w-full">
          <div 
            className="h-48 bg-cover bg-center w-full transition-transform hover:scale-105 duration-500"
            style={{ backgroundImage: `url(${imagePath})` }}
          />
          <div className="absolute top-2 right-2">
            <span className="bg-sage/80 backdrop-blur-sm text-white px-2 py-1 rounded text-xs">
              {category}
            </span>
          </div>
        </div>
      )}
      
      <div className="p-4 md:p-6 flex flex-col flex-grow">
        <div className="mb-3 text-sm flex items-center text-stone">
          <Calendar size={14} className="mr-1" />
          {date}
        </div>
        
        <h3 className="text-lg md:text-xl font-serif text-forest mb-3 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-stone mb-4 flex-grow text-sm md:text-base line-clamp-3">{excerpt}</p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xs md:text-sm text-stone">{author}</span>
          <Link 
            to={`/news/${id}`} 
            className="text-sage hover:text-forest font-medium text-sm md:text-base bg-sage/10 hover:bg-sage/20 px-3 py-1.5 rounded-md transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

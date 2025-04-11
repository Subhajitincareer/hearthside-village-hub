
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  
  return (
    <div className="rustic-card overflow-hidden flex flex-col h-full hover:translate-y-[-5px] duration-300">
      {imagePath && (
        <div 
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${imagePath})` }}
        />
      )}
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3 text-sm flex items-center justify-between text-stone">
          <span className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {date}
          </span>
          <span className="bg-sage/10 text-sage px-2 py-1 rounded text-xs">
            {category}
          </span>
        </div>
        
        <h3 className="text-xl font-serif text-forest mb-3">
          {title}
        </h3>
        
        <p className="text-stone mb-4 flex-grow">{excerpt}</p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-sm text-stone">{author}</span>
          <Link to={`/news/${id}`} className="text-sage hover:text-forest font-medium">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

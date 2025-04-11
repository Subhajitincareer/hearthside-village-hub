
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  imagePath: string;
  hasAction?: boolean;
  actionText?: string;
  actionLink?: string;
}

const HeroSection = ({
  title,
  subtitle,
  imagePath,
  hasAction = false,
  actionText = 'Learn More',
  actionLink = '#'
}: HeroSectionProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        // Move the background slightly to create parallax effect
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.15}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden parallax-container">
      {/* Hero Image with Parallax */}
      <div 
        ref={parallaxRef}
        className={`parallax-bg ${isLoaded ? 'animate-zoom-in' : ''}`}
        style={{ backgroundImage: `url(${imagePath})` }}
      >
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-2xl">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl text-white font-serif mb-4 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
          >
            {title}
          </h1>
          
          {subtitle && (
            <p 
              className={`text-lg md:text-xl text-white/90 mb-6 ${isLoaded ? 'animate-fade-in stagger-2' : 'opacity-0'}`}
            >
              {subtitle}
            </p>
          )}
          
          {hasAction && (
            <Button 
              asChild 
              className={`bg-sage hover:bg-sage/90 text-white btn-hover-effect ${isLoaded ? 'animate-fade-in stagger-3' : 'opacity-0'}`}
            >
              <a href={actionLink}>
                {actionText}
                <ArrowRight size={16} className="ml-2" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

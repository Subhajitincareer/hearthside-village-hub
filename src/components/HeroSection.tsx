
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { throttle } from 'lodash';

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

  // Throttle scroll handler for better performance
  const handleScroll = useCallback(
    throttle(() => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        // Use transform translate3d for hardware acceleration
        parallaxRef.current.style.transform = `translate3d(0, ${scrollPosition * 0.15}px, 0)`;
      }
    }, 16), // ~60fps
    []
  );

  useEffect(() => {
    // Optimize image loading
    const img = new Image();
    img.src = imagePath;
    img.onload = () => {
      setIsLoaded(true);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    };
  }, [imagePath, handleScroll]);

  return (
    <div className="relative h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden parallax-container">
      {/* Hero Image with Parallax - use will-change for GPU acceleration */}
      <div 
        ref={parallaxRef}
        className={`parallax-bg will-change-transform ${isLoaded ? 'animate-zoom-in' : ''}`}
        style={{ 
          backgroundImage: `url(${imagePath})`,
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in'
        }}
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

// Memoize the component to prevent unnecessary re-renders
export default React.memo(HeroSection);

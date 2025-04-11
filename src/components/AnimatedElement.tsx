
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedElementProps {
  children: React.ReactNode;
  animation: 'fade-in' | 'slide-up' | 'slide-down' | 'slide-right' | 'zoom-in';
  className?: string;
  delay?: 1 | 2 | 3 | 4 | 5;
  threshold?: number;
  rootMargin?: string;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation,
  className = '',
  delay,
  threshold = 0.1,
  rootMargin = '0px'
}) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold,
    rootMargin,
  });

  const delayClass = delay ? `stagger-${delay}` : '';
  const animationClass = `animate-${animation}`;

  return (
    <div
      ref={ref}
      className={`scroll-animate ${isVisible ? 'visible ' + animationClass + ' ' + delayClass : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;

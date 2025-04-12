import { useEffect, useRef, useState, useCallback } from 'react';
import { debounce } from 'lodash';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  debounceTime?: number;
}

export function useScrollAnimation<T extends HTMLElement>(
  options: ScrollAnimationOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px', debounceTime = 50 } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Create debounced callback for better performance
  const handleIntersection = useCallback(
    debounce(
      (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once element is visible, no need to keep observing
          const element = ref.current;
          if (element && observer.current) {
            observer.current.unobserve(element);
          }
        }
      },
      debounceTime
    ),
    [debounceTime]
  );

  // Store observer in ref to avoid recreating it
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Clean up previous observer
    if (observer.current) {
      observer.current.disconnect();
    }

    // Create new observer with current options
    observer.current = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin
    });

    observer.current.observe(element);

    return () => {
      handleIntersection.cancel();
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [threshold, rootMargin, handleIntersection]);

  return { ref, isVisible };
}

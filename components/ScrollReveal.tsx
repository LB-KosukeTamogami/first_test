"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'rotate';
  delay?: number;
  duration?: number;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  direction = 'up',
  delay = 0,
  duration = 800,
  threshold = 0.1
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold, rootMargin: '50px' }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [delay, threshold]);

  const getTransformClass = () => {
    const baseClass = 'transition-all ease-out';
    const durationClass = `duration-${duration}`;
    
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return `${baseClass} ${durationClass} opacity-0 translate-y-16`;
        case 'down':
          return `${baseClass} ${durationClass} opacity-0 -translate-y-16`;
        case 'left':
          return `${baseClass} ${durationClass} opacity-0 translate-x-16`;
        case 'right':
          return `${baseClass} ${durationClass} opacity-0 -translate-x-16`;
        case 'scale':
          return `${baseClass} ${durationClass} opacity-0 scale-75`;
        case 'rotate':
          return `${baseClass} ${durationClass} opacity-0 rotate-12 scale-90`;
        default:
          return `${baseClass} ${durationClass} opacity-0 translate-y-16`;
      }
    }
    
    return `${baseClass} ${durationClass} opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0`;
  };

  return (
    <div
      ref={elementRef}
      className={`${getTransformClass()} ${className}`}
    >
      {children}
    </div>
  );
}
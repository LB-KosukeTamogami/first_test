"use client";

import { useRef, useState } from "react";

interface HolographicCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export default function HolographicCard({
  children,
  className = "",
  intensity = 15
}: HolographicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState({ x: 0, y: 0, rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateX = ((e.clientY - centerY) / rect.height) * intensity;
    const rotateY = ((e.clientX - centerX) / rect.width) * intensity;
    
    const x = ((e.clientX - centerX) / rect.width) * 20;
    const y = ((e.clientY - centerY) / rect.height) * 20;

    setTransform({ x, y, rotateX: -rotateX, rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform({ x: 0, y: 0, rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`
        relative transform-gpu will-change-transform transition-all duration-300 ease-out
        before:absolute before:inset-0 before:rounded-3xl before:p-[1px]
        before:bg-gradient-to-r before:from-purple-500/50 before:via-cyan-500/50 before:to-pink-500/50
        before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
        ${className}
      `}
      style={{
        transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) translate3d(${transform.x}px, ${transform.y}px, ${isHovered ? '20px' : '0px'})`
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Holographic reflection effect */}
      <div 
        className={`
          absolute inset-0 rounded-3xl opacity-0 pointer-events-none transition-opacity duration-300
          ${isHovered ? 'opacity-30' : 'opacity-0'}
        `}
        style={{
          background: `linear-gradient(
            ${45 + transform.rotateY * 2}deg,
            transparent 30%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 70%
          )`
        }}
      />
      
      {/* Iridescent border */}
      <div 
        className={`
          absolute inset-0 rounded-3xl opacity-0 pointer-events-none transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          background: `conic-gradient(
            from ${transform.rotateY * 2}deg,
            #ff006e,
            #8338ec,
            #3a86ff,
            #06ffa5,
            #ffbe0b,
            #ff006e
          )`,
          padding: '2px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude'
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
      
      {/* Floating particles effect */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                animationDelay: `${i * 0.2}s`,
                animation: 'particleFloat 3s ease-in-out infinite'
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
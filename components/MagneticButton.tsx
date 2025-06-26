"use client";

import { useRef, useState } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  magnetic?: boolean;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  magnetic = true,
  strength = 0.3
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!magnetic || !buttonRef.current) return;

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    
    button.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${1 + strength * 0.1})`;
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    
    setIsHovered(false);
    buttonRef.current.style.transform = 'translate(0px, 0px) scale(1)';
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const baseClasses = `
    relative overflow-hidden transition-all duration-300 ease-out
    transform-gpu will-change-transform cursor-pointer
    before:absolute before:inset-0 before:bg-gradient-to-r 
    before:from-transparent before:via-white/20 before:to-transparent
    before:translate-x-[-100%] before:skew-x-12 before:transition-transform
    before:duration-700 hover:before:translate-x-[100%]
    ${isHovered ? 'shadow-2xl' : 'shadow-lg'}
    ${className}
  `;

  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={baseClasses}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      className={baseClasses}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
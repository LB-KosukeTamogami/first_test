"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedSVGProps {
  type: 'code' | 'ai' | 'rocket' | 'growth' | 'network' | 'trophy';
  size?: number;
  className?: string;
  animate?: boolean;
}

export default function AnimatedSVG({ type, size = 200, className = "", animate = true }: AnimatedSVGProps) {
  const [isVisible, setIsVisible] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [animate]);

  const renderCodeSVG = () => (
    <svg
      ref={svgRef}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`${className} ${isVisible ? 'animate-in' : ''}`}
    >
      <defs>
        <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="1">
            <animate attributeName="stop-color" values="#6366f1;#8b5cf6;#d946ef;#6366f1" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#d946ef" stopOpacity="1">
            <animate attributeName="stop-color" values="#d946ef;#6366f1;#8b5cf6;#d946ef" dur="3s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
        
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Monitor frame */}
      <rect x="20" y="40" width="160" height="100" rx="8" fill="url(#codeGradient)" opacity="0.1" />
      <rect x="25" y="45" width="150" height="90" rx="4" fill="#0f172a" stroke="url(#codeGradient)" strokeWidth="2" />
      
      {/* Screen content - animated code lines */}
      <g filter="url(#glow)">
        <rect x="30" y="55" width="60" height="3" fill="#10b981" rx="1.5">
          <animate attributeName="width" values="0;60;60" dur="2s" begin="0s" fill="freeze" />
        </rect>
        <rect x="35" y="65" width="40" height="3" fill="#f59e0b" rx="1.5">
          <animate attributeName="width" values="0;40;40" dur="2s" begin="0.3s" fill="freeze" />
        </rect>
        <rect x="35" y="75" width="80" height="3" fill="#06b6d4" rx="1.5">
          <animate attributeName="width" values="0;80;80" dur="2s" begin="0.6s" fill="freeze" />
        </rect>
        <rect x="30" y="85" width="70" height="3" fill="#8b5cf6" rx="1.5">
          <animate attributeName="width" values="0;70;70" dur="2s" begin="0.9s" fill="freeze" />
        </rect>
        <rect x="35" y="95" width="50" height="3" fill="#ec4899" rx="1.5">
          <animate attributeName="width" values="0;50;50" dur="2s" begin="1.2s" fill="freeze" />
        </rect>
        <rect x="30" y="105" width="65" height="3" fill="#10b981" rx="1.5">
          <animate attributeName="width" values="0;65;65" dur="2s" begin="1.5s" fill="freeze" />
        </rect>
      </g>
      
      {/* Cursor */}
      <rect x="95" y="105" width="2" height="3" fill="#ffffff">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" begin="1.8s" />
      </rect>
      
      {/* Monitor stand */}
      <rect x="90" y="140" width="20" height="30" fill="url(#codeGradient)" opacity="0.8" />
      <rect x="70" y="165" width="60" height="8" fill="url(#codeGradient)" rx="4" />
      
      {/* Floating code particles */}
      <circle cx="160" cy="30" r="3" fill="#10b981" opacity="0.7">
        <animateTransform attributeName="transform" type="translate" values="0,0; 10,-10; 0,0" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="40" cy="25" r="2" fill="#f59e0b" opacity="0.6">
        <animateTransform attributeName="transform" type="translate" values="0,0; -8,-12; 0,0" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="80" r="2.5" fill="#06b6d4" opacity="0.8">
        <animateTransform attributeName="transform" type="translate" values="0,0; 15,8; 0,0" dur="3.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );

  const renderAISVG = () => (
    <svg
      ref={svgRef}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`${className} ${isVisible ? 'animate-in' : ''}`}
    >
      <defs>
        <radialGradient id="aiGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="1" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
        </radialGradient>
        
        <filter id="aiGlow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Central AI brain */}
      <circle cx="100" cy="100" r="40" fill="url(#aiGradient)" filter="url(#aiGlow)">
        <animateTransform attributeName="transform" type="rotate" values="0 100 100;360 100 100" dur="10s" repeatCount="indefinite" />
      </circle>
      
      {/* Neural network nodes */}
      <g filter="url(#aiGlow)">
        {[...Array(8)].map((_, i) => {
          const angle = (i * 45) * Math.PI / 180;
          const x = 100 + Math.cos(angle) * 70;
          const y = 100 + Math.sin(angle) * 70;
          
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="8" fill="#06b6d4" opacity="0.8">
                <animate attributeName="r" values="6;12;6" dur="2s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
              </circle>
              
              {/* Connections to center */}
              <line x1="100" y1="100" x2={x} y2={y} stroke="#06b6d4" strokeWidth="2" opacity="0.6">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
              </line>
            </g>
          );
        })}
      </g>
      
      {/* Data streams */}
      <g>
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30) * Math.PI / 180;
          const startX = 100 + Math.cos(angle) * 45;
          const startY = 100 + Math.sin(angle) * 45;
          const endX = 100 + Math.cos(angle) * 75;
          const endY = 100 + Math.sin(angle) * 75;
          
          return (
            <circle key={i} cx={startX} cy={startY} r="2" fill="#10b981">
              <animateMotion dur="3s" repeatCount="indefinite" begin={`${i * 0.25}s`}>
                <mpath>
                  <path d={`M ${startX} ${startY} L ${endX} ${endY}`} />
                </mpath>
              </animateMotion>
              <animate attributeName="opacity" values="0;1;0" dur="3s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
            </circle>
          );
        })}
      </g>
    </svg>
  );

  const renderRocketSVG = () => (
    <svg
      ref={svgRef}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`${className} ${isVisible ? 'animate-in' : ''}`}
    >
      <defs>
        <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
        
        <linearGradient id="flameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
      </defs>
      
      {/* Rocket body */}
      <ellipse cx="100" cy="80" rx="25" ry="60" fill="url(#rocketGradient)">
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-5; 0,0" dur="2s" repeatCount="indefinite" />
      </ellipse>
      
      {/* Rocket nose */}
      <path d="M 75 40 L 100 10 L 125 40 Z" fill="#dc2626">
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-5; 0,0" dur="2s" repeatCount="indefinite" />
      </path>
      
      {/* Rocket fins */}
      <path d="M 75 120 L 60 140 L 75 135 Z" fill="#991b1b">
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-5; 0,0" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M 125 120 L 140 140 L 125 135 Z" fill="#991b1b">
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-5; 0,0" dur="2s" repeatCount="indefinite" />
      </path>
      
      {/* Rocket window */}
      <circle cx="100" cy="60" r="12" fill="#06b6d4" opacity="0.8">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-5; 0,0" dur="2s" repeatCount="indefinite" />
      </circle>
      
      {/* Flame trail */}
      <g>
        <ellipse cx="100" cy="150" rx="15" ry="25" fill="url(#flameGradient)" opacity="0.9">
          <animate attributeName="ry" values="20;35;20" dur="0.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;1;0.7" dur="0.5s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,0; 0,-5; 0,0" dur="2s" repeatCount="indefinite" />
        </ellipse>
        
        <ellipse cx="100" cy="170" rx="10" ry="20" fill="#fbbf24" opacity="0.7">
          <animate attributeName="ry" values="15;25;15" dur="0.6s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,0; 0,-5; 0,0" dur="2s" repeatCount="indefinite" />
        </ellipse>
        
        <ellipse cx="100" cy="185" rx="6" ry="12" fill="#f59e0b" opacity="0.5">
          <animate attributeName="ry" values="10;18;10" dur="0.7s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,0; 0,-5; 0,0" dur="2s" repeatCount="indefinite" />
        </ellipse>
      </g>
      
      {/* Stars */}
      {[...Array(8)].map((_, i) => {
        const x = 30 + (i % 4) * 40;
        const y = 20 + Math.floor(i / 4) * 30;
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="2" fill="#fbbf24">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </circle>
          </g>
        );
      })}
    </svg>
  );

  switch (type) {
    case 'code':
      return renderCodeSVG();
    case 'ai':
      return renderAISVG();
    case 'rocket':
      return renderRocketSVG();
    default:
      return renderCodeSVG();
  }
}
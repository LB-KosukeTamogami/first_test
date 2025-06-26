"use client";

import { useEffect, useRef, useState } from "react";
import MagneticButton from "./MagneticButton";
import ScrollReveal from "./ScrollReveal";

export default function PremiumHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
  };

  const floatingElements = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${3 + Math.random() * 4}s`
      }}
    />
  ));

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements}
        
        {/* Large morphing blobs */}
        <div 
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blob"
          style={parallaxStyle}
        />
        <div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-yellow-500/20 blob-reverse"
          style={{ ...parallaxStyle, transform: `${parallaxStyle.transform} scale(0.8)` }}
        />
        
        {/* 3D geometric elements */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 transform rotate-45 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 floating-animation" />
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 transform rotate-12 bg-gradient-to-r from-purple-400/10 to-pink-500/10 floating-animation" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          
          {/* Premium badge */}
          <ScrollReveal direction="scale" delay={200}>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-full border border-white/20 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/90 font-medium">
                ✨ 業界最高峰のAI開発体験
              </span>
            </div>
          </ScrollReveal>

          {/* Main title with holographic effect */}
          <ScrollReveal direction="up" delay={400}>
            <h1 
              ref={titleRef}
              className={`text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 leading-none transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <span className="block text-white mb-4">Claude Code</span>
              <span className="block text-holographic">Revolution</span>
            </h1>
          </ScrollReveal>

          {/* Animated subtitle */}
          <ScrollReveal direction="up" delay={600}>
            <div className="relative mb-12">
              <p className="text-2xl md:text-3xl lg:text-4xl text-white/80 leading-relaxed max-w-4xl mx-auto">
                AIと人間が協働する
                <span className="text-neon mx-3">次世代開発</span>
                の扉を開く
              </p>
              
              {/* Underline animation */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 animate-pulse" 
                   style={{ animationDelay: '1s', animationFillMode: 'forwards' }} />
            </div>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal direction="up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <MagneticButton 
                href="#apply"
                className="group px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white rounded-full font-bold text-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500"
                strength={0.4}
              >
                <span className="flex items-center gap-3">
                  <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  革命を始める
                </span>
              </MagneticButton>
              
              <MagneticButton 
                href="#curriculum"
                className="group px-12 py-6 bg-white/10 backdrop-blur-xl text-white rounded-full font-bold text-xl border border-white/30 hover:bg-white/20 transition-all duration-500"
                strength={0.3}
              >
                <span className="flex items-center gap-3">
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1M8 20l4-8 4 8M8 20H4m4 0h8m-8 0v-4m8 4v-4" />
                  </svg>
                  学習ロードマップ
                </span>
              </MagneticButton>
            </div>
          </ScrollReveal>

          {/* Stats section */}
          <ScrollReveal direction="scale" delay={1000}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { number: "10×", label: "開発効率向上", icon: "⚡" },
                { number: "97%", label: "満足度", icon: "💎" },
                { number: "8週間", label: "完全マスター", icon: "🎯" },
                { number: "∞", label: "可能性", icon: "🚀" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="group relative p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 card-tilt"
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:text-holographic transition-all duration-500">
                    {stat.number}
                  </div>
                  <div className="text-white/70 font-medium">
                    {stat.label}
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-500" />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <ScrollReveal direction="up" delay={1200}>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm font-medium">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
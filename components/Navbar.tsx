"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#features", label: "特徴" },
    { href: "#curriculum", label: "カリキュラム" },
    { href: "#pricing", label: "料金" },
    { href: "#faq", label: "FAQ" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-lg shadow-soft border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a 
            href="#hero" 
            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Claude Code講座
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-muted-foreground hover:text-foreground font-medium transition-colors text-sm"
              >
                {item.label}
              </a>
            ))}
            
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <a
                href="#apply"
                className="btn btn-primary px-6 py-2"
              >
                申し込む
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
          <div className="container py-4 space-y-3">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 px-4 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#apply"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn btn-primary w-full py-3"
              >
                申し込む
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
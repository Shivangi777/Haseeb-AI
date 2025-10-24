import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl md:text-3xl font-black">
              Haseeb AI
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('modes')} 
              className="text-sm font-medium hover:text-accent transition-all duration-300 hover:scale-110"
            >
              Modes
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-sm font-medium hover:text-accent transition-all duration-300 hover:scale-110"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('declarations')} 
              className="text-sm font-medium hover:text-accent transition-all duration-300 hover:scale-110"
            >
              Declarations
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-sm font-medium hover:text-accent transition-all duration-300 hover:scale-110"
            >
              FAQ
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button 
              size="sm" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => window.open('https://reality-check-sigma.vercel.app', '_blank')}
            >
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <button 
              onClick={() => {
                scrollToSection('modes');
                setIsOpen(false);
              }}
              className="block py-2 text-sm font-medium hover:text-accent transition-colors w-full text-left"
            >
              Modes
            </button>
            <button 
              onClick={() => {
                scrollToSection('pricing');
                setIsOpen(false);
              }}
              className="block py-2 text-sm font-medium hover:text-accent transition-colors w-full text-left"
            >
              Pricing
            </button>
            <button 
              onClick={() => {
                scrollToSection('declarations');
                setIsOpen(false);
              }}
              className="block py-2 text-sm font-medium hover:text-accent transition-colors w-full text-left"
            >
              Declarations
            </button>
            <button 
              onClick={() => {
                scrollToSection('faq');
                setIsOpen(false);
              }}
              className="block py-2 text-sm font-medium hover:text-accent transition-colors w-full text-left"
            >
              FAQ
            </button>
            <div className="pt-4">
              <Button 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => window.open('https://reality-check-sigma.vercel.app', '_blank')}
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

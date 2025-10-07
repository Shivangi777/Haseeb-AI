import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

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
            <a href="#features" className="text-sm font-medium hover:text-accent transition-all duration-300 hover:scale-110">Features</a>
            <a href="#pricing" className="text-sm font-medium hover:text-accent transition-all duration-300 hover:scale-110">Pricing</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-accent transition-all duration-300 hover:scale-110">Testimonials</a>
            <a href="#faq" className="text-sm font-medium hover:text-accent transition-all duration-300 hover:scale-110">FAQ</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
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
            <a 
              href="#features" 
              className="block py-2 text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="block py-2 text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#testimonials" 
              className="block py-2 text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              className="block py-2 text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <div className="pt-4">
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
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

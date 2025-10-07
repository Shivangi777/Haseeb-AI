import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import haseebCharacter from "@/assets/haseeb-character.png";

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Large Character */}
          <div className="w-64 h-64 md:w-72 md:h-72 mx-auto mb-8">
            <img 
              src={haseebCharacter} 
              alt="Haseeb - AI Accountant" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>

          <h2 className="text-4xl md:text-6xl font-black leading-tight animate-scale-in">
            Start Your Free Trial Today
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Join 10,000+ businesses transforming their accounting with AI. 
            No credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl hover:shadow-2xl transition-all group text-lg px-8 border-2 border-foreground hover:translate-x-1 hover:-translate-y-1"
              style={{ borderRadius: "20px 5px 20px 5px" }}
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 border-2 border-foreground hover:translate-x-1 hover:-translate-y-1 transition-all"
              style={{ borderRadius: "5px 20px 5px 20px" }}
            >
              Schedule a Demo
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">★★★★★</span>
              <span>4.9 from 120+ teams</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

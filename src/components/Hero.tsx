import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 py-10 md:py-18">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center">
          
          {/* ================= Left Content ================= */}
          <div className="space-y-8 text-center lg:text-left animate-fade-in">
            
            {/* Headline */}
            <div className="relative">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              Directed Intelligence
                <span className="block text-accent">Accounting System</span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
            Choose Your Mode of Financial Operations. Every founder operates in one of three modes. The mode you choose defines your leverage.
            </p>

            {/* Buttons + Info */}
            <div className="flex flex-col items-center gap-3 lg:items-start">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all group border-2 border-foreground hover:translate-x-1 hover:-translate-y-1"
                  style={{ borderRadius: "20px 5px 20px 5px" }}
                  onClick={() => window.open('https://reality-check-sigma.vercel.app', '_blank')}
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="group border-2 border-foreground hover:translate-x-1 hover:-translate-y-1 transition-all"
                  style={{ borderRadius: "5px 20px 5px 20px" }}
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Schedule Demo
                </Button>
              </div>

              {/* Info line centered under buttons */}
              <div className="pt-2 text-sm text-muted-foreground text-center">
                <span className="font-semibold">14-day guided setup </span> • No risk • Cancel anytime instantly

              </div>
            </div>
          </div>

          {/* ================= Right Content (Video) ================= */}
          <div className="relative animate-scale-in lg:-ml-2 xl:-ml-4">
            <div
              className="relative overflow-hidden shadow-2xl bg-card border-4 border-foreground"
              style={{ borderRadius: "30px 5px 30px 5px" }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              >
                <source src="/demo-video.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

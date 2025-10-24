import { useState } from "react";
import { Button } from "@/components/ui/button";

const LeadCapture = () => {
  const [submitted] = useState(false);

  return (
    <section className="py-20 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
         
          <h3 className="text-4xl md:text-5xl font-black leading-tight">
            Check Your CFO Health Score — Free in 2 Minutes
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Uncover cash‑flow risks, reporting gaps, and quick wins. 
          </p>

          {!submitted ? (
            <div className="space-y-6">
              <ul className="flex flex-col sm:flex-row justify-center gap-3 text-sm text-muted-foreground">
                <li className="px-3 py-1 bg-card border-3 border-foreground" style={{ borderRadius: "14px 4px 14px 4px" }}>Instant insight.</li>
                <li className="px-3 py-1 bg-card border-3 border-foreground" style={{ borderRadius: "4px 14px 4px 14px" }}>Actionable results immediately.</li>
                <li className="px-3 py-1 bg-card border-3 border-foreground" style={{ borderRadius: "14px 4px 14px 4px" }}>Takes under two minutes.
                </li>
              </ul>
              <div className="flex justify-center">
                <a href="https://reality-check-sigma.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-foreground text-base md:text-lg px-8" style={{ borderRadius: "20px 5px 20px 5px" }}>
                    Get My Free CFO Health Snapshot
                  </Button>
                </a>
              </div>
              <div className="text-sm text-muted-foreground"> Secure • ★★★★★ Rated 4.9 by 120+ founder teams
              </div>
            </div>
          ) : (
            <div className="p-6 bg-card border-3 border-foreground max-w-xl mx-auto" style={{ borderRadius: "25px 5px 25px 5px" }}>
              <div className="text-lg">Thanks! We’ll be in touch shortly.</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;



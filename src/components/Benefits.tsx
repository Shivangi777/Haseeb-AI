import { Brain, Zap, Shield, TrendingUp, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Smart algorithms that understand your business and provide actionable insights automatically.",
  },
  {
    icon: Zap,
    title: "Instant Processing",
    description: "Process invoices, receipts, and financial data in seconds, not hours.",
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Your data is encrypted and protected with enterprise-grade security measures.",
  },
  {
    icon: TrendingUp,
    title: "Growth Analytics",
    description: "Real-time dashboards showing exactly where your business is heading.",
  },
  {
    icon: Clock,
    title: "Save 20+ Hours/Week",
    description: "Automate repetitive tasks and focus on growing your business instead.",
  },
  {
    icon: DollarSign,
    title: "Cost Effective",
    description: "Replace expensive accountants with AI that works 24/7 for a fraction of the cost.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black">
            Why Choose Haseeb AI?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your finances smarter, faster, and better.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 bg-card border-3 border-foreground hover:border-accent hover:shadow-xl transition-all duration-300 animate-fade-in hover:translate-x-1 hover:-translate-y-1"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                borderRadius: index % 2 === 0 ? "30px 5px 30px 5px" : "5px 30px 5px 30px"
              }}
            >
              <div className="w-14 h-14 bg-accent/10 border-2 border-foreground flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ borderRadius: "15px 3px 15px 3px" }}>
                <benefit.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative mt-20 p-12 bg-gradient-to-br from-accent/5 to-accent/10 border-4 border-foreground" style={{ borderRadius: "40px 10px 40px 10px" }}>
          <div className="relative z-10 text-center space-y-6">
            <h3 className="text-3xl md:text-4xl font-black">
              Ready to transform your accounting?
            </h3>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Join thousands of businesses already saving time and money with AI.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg border-2 border-foreground hover:translate-x-1 hover:-translate-y-1 transition-all"
              style={{ borderRadius: "20px 5px 20px 5px" }}
            >
              Get Started Free
            </Button>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>★★★★★</span>
              <span>4.9 from 120+ teams</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

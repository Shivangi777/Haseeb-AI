import { Button } from "@/components/ui/button";

const plans = [
  { 
    name: "Bot Mode", 
    price: "79KD/Month", 
    features: [
      "Unlimited expense and revenue transactions per business", 
      "Instant processing", 
      "Built for founders and accountants who want speed without hiring"
    ],
    popular: false
  },
  { 
    name: "Hybrid Oversight", 
    price: "199KD/Month", 
    features: [
      "Unlimited transactions", 
      "Bot + Human review", 
      "Audit-ready books without manual follow-up"
    ],
    popular: true
  },
  { 
    name: "Deployment", 
    price: "Custom Pricing", 
    features: [
      "One-time Deployment Fee", 
      "Bot billing after", 
      "Hybrid oversight maintained forever post-deployment",
      "Request Deployment Call"
    ],
    popular: false,
    note: "After which becomes 79KD/Month"
  },
];

const Pricing = () => {
  return (
    <section className="py-24" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose a mode built for how you operate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((tier, index) => (
            <div
              key={tier.name}
              className={`p-8 bg-card border-3 border-foreground hover:shadow-xl transition-all duration-300 animate-fade-in hover:translate-x-1 hover:-translate-y-1 relative ${
                tier.popular ? 'border-accent shadow-lg' : ''
              }`}
              style={{ borderRadius: index % 2 === 0 ? "30px 5px 30px 5px" : "5px 30px 5px 30px" }}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 text-sm font-bold rounded-full">
                    Most Chosen
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="text-4xl font-black mb-2">
                {tier.price.includes('/Month') ? (
                  <>
                    {tier.price.replace('/Month', '')}
                    <span className="text-lg font-normal text-muted-foreground">/month</span>
                  </>
                ) : (
                  tier.price
                )}
              </div>
              {tier.note && (
                <div className="text-sm text-muted-foreground mb-4">{tier.note}</div>
              )}
              <ul className="space-y-2 mb-6 text-muted-foreground">
                {tier.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-foreground w-full">
                {tier.name === 'Deployment' ? 'Request Deployment Call' : `Choose ${tier.name}`}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;



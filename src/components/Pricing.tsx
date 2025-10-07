import { Button } from "@/components/ui/button";

const plans = [
  { name: "Starter", price: "$19/mo", features: ["Up to 1k txns", "Email support", "Basic analytics"] },
  { name: "Growth", price: "$49/mo", features: ["Up to 10k txns", "Priority support", "Advanced analytics"] },
  { name: "Scale", price: "$99/mo", features: ["Unlimited txns", "24/7 support", "Custom insights"] },
];

const Pricing = () => {
  return (
    <section className="py-24" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose a plan that grows with your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((tier, index) => (
            <div
              key={tier.name}
              className="p-8 bg-card border-3 border-foreground hover:shadow-xl transition-all duration-300 animate-fade-in hover:translate-x-1 hover:-translate-y-1"
              style={{ borderRadius: index % 2 === 0 ? "30px 5px 30px 5px" : "5px 30px 5px 30px" }}
            >
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="text-4xl font-black mb-6">{tier.price}</div>
              <ul className="space-y-2 mb-6 text-muted-foreground">
                {tier.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-foreground">
                Choose {tier.name}
              </Button>
              <div className="mt-3 text-sm text-muted-foreground">14-day free trial • Cancel anytime</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;



const SocialProof = () => {
  const companies = [
    "TechCorp",
    "InnovateLabs",
    "FutureWorks",
    "StartupHub",
    "DigitalVentures",
    "CloudNine",
  ];

  return (
    <section className="py-16 border-y border-border bg-secondary/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wider">
          Trusted by leading companies
        </p>
        <div className="relative overflow-hidden">
          <div className="flex items-center gap-12 whitespace-nowrap animate-marquee">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="text-2xl md:text-3xl font-bold text-foreground/40 hover:text-foreground/80 transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

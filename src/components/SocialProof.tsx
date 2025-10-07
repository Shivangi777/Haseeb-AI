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
        <p className="text-center text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wider animate-fade-in">
          Trusted by leading companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="text-2xl md:text-3xl font-bold text-foreground/40 hover:text-foreground/80 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

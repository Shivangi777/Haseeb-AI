import { Quote } from "lucide-react";

const modeDeclarations = [
  {
    mode: "Bot Mode Declaration",
    content: "I refuse to hire juniors when a bot can process thousands of entries instantly for me.",
  },
  {
    mode: "Hybrid Mode Declaration", 
    content: "I let Directed Intelligence handle volume, but I keep a human layer watching quietly so nothing slips through.",
  },
  {
    mode: "Deployment Mode Declaration",
    content: "I deploy once. After that, I pay Bot rates but operate with Hybrid power.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black">
            Choose Your Mode of Financial Operations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Declare your identity as a founder.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {modeDeclarations.map((declaration, index) => (
            <div
              key={index}
              className="p-8 bg-card border-3 border-foreground hover:shadow-xl transition-all duration-300 animate-fade-in hover:translate-x-1 hover:-translate-y-1"
              style={{ 
                animationDelay: `${index * 0.15}s`,
                borderRadius: "30px 5px 30px 5px"
              }}
            >
              {/* Quote Icon */}
              <div className="flex gap-1 mb-6">
                <Quote className="h-8 w-8 text-accent" />
              </div>

              {/* Mode Title */}
              <h3 className="text-lg font-bold mb-4 text-accent">
                {declaration.mode}
              </h3>

              {/* Content */}
              <p className="text-lg leading-relaxed">
                "{declaration.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

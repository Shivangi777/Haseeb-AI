import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "Haseeb AI cut our accounting time in half. The insights are incredible and the automation is a game-changer.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Michael Chen",
    role: "Founder, GrowthCo",
    content: "I was skeptical about AI accounting, but this is the real deal. Accurate, fast, and saves us thousands monthly.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Emily Rodriguez",
    role: "CFO, InnovateLabs",
    content: "The best investment we've made this year. Our team loves how simple and powerful it is.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=3",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black">
            Loved by Finance Teams
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-card border-3 border-foreground hover:shadow-xl transition-all duration-300 animate-fade-in hover:translate-x-1 hover:-translate-y-1"
              style={{ 
                animationDelay: `${index * 0.15}s`,
                borderRadius: "30px 5px 30px 5px"
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-lg mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 object-cover border-2 border-foreground"
                  style={{ borderRadius: "15px 3px 15px 3px" }}
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

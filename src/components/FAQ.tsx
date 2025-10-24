import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How accurate is the system?",
    answer: "Our Directed Intelligence system maintains 99.9% accuracy at scale. Thats the power of AI+Human expertise",
  },
  {
    question: "Is my data secure?",
    answer: "Yes. All financial information is encrypted with AES-256 and aligned with SOC 2 Type II and GDPR standards.",
  },
  {
    question: "Can it connect to my tools?",
    answer: "Seamless integration with Xero, QuickBooks, Stripe, PayPal, and over fifty tools founders already use.",
  },
  {
    question: "What if I need human input?",
    answer: "You always have human backup. Accountant support is available anytime for review or strategic guidance. For Bot Mode, you can upgrade anytime.",
  },
  {
    question: "How fast is setup?",
    answer: "Most founders complete setup within fifteen minutes. The crew guides each step automatically.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to understand Directed Intelligence.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-3 border-foreground px-6 bg-card hover:border-accent transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 animate-fade-in"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                borderRadius: "25px 5px 25px 5px"
              }}
            >
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-accent py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;

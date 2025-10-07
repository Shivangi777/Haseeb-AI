import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How accurate is the AI accounting?",
    answer: "Our AI is trained on millions of transactions and maintains 99.9% accuracy. Every calculation is verified and you can always review the details.",
  },
  {
    question: "Is my financial data secure?",
    answer: "Absolutely. We use bank-level encryption (AES-256) and comply with all major financial regulations including SOC 2 Type II and GDPR.",
  },
  {
    question: "Can I integrate with my existing tools?",
    answer: "Yes! We integrate seamlessly with QuickBooks, Xero, Stripe, PayPal, and over 50+ other platforms you already use.",
  },
  {
    question: "What if I need human support?",
    answer: "Our expert team is available 24/7 via chat, email, or phone. Plus, you can schedule consultations with real accountants anytime.",
  },
  {
    question: "How long does setup take?",
    answer: "Most businesses are fully set up in under 15 minutes. Our AI guides you through everything step-by-step.",
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
            Everything you need to know about Haseeb AI
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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader from "../components/SectionHeader";

const faqs = [
  {
    question: "How fast can you deliver a project?",
    answer: "Most landing pages and simple websites are delivered in 2 weeks. Web apps with authentication and payment integration typically take 3-4 weeks. We'll give you a precise timeline before starting.",
  },
  {
    question: "Do you work with clients in different timezones?",
    answer: "Yes. I schedule overlap hours for calls and use async communication (Loom videos, detailed updates) so progress never stops. US and European clients are my primary focus.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "Frontend: React, Next.js, Tailwind CSS. Backend: Java Spring Boot, Node.js. Mobile: Flutter (iOS + Android). CMS: Headless WordPress. I pick the best stack for your specific needs.",
  },
  {
    question: "How does payment work?",
    answer: "50% upfront to start, 50% on delivery. For larger projects, we can split into milestones (30/40/30). I accept bank transfer, Wise, and PayPal.",
  },
  {
    question: "Can I edit the website content myself?",
    answer: "Absolutely. For WordPress projects, you get a familiar admin dashboard. For custom React apps, I can integrate a headless CMS like Sanity or Strapi so your team can update content without code.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes. I offer 30 days of free bug fixes after launch. For ongoing maintenance and feature updates, I have monthly retainer packages starting at $500/month.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="FAQ"
          title="Common Questions"
          subtitle="Everything you need to know before starting your project."
        />

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-slate-200 rounded-xl px-6 data-[state=open]:border-blue-200 transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
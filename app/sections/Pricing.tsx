import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "../components/SectionHeader";
import ScrollReveal from "../components/ScrollReveal";

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    description: "Perfect for landing pages and simple websites",
    features: [
      "5-page React/Next.js website",
      "Mobile responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "2 revision rounds",
      "2 weeks delivery",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$5,000",
    description: "For startups needing full-featured web apps",
    features: [
      "10-page website or web app",
      "Headless WordPress CMS",
      "User authentication",
      "Stripe payment integration",
      "Admin dashboard",
      "Advanced animations",
      "4 revision rounds",
      "3-4 weeks delivery",
    ],
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$8,000+",
    description: "Custom solutions for complex requirements",
    features: [
      "Unlimited pages/features",
      "Custom API development",
      "Flutter mobile app (iOS + Android)",
      "Database design & optimization",
      "Third-party integrations",
      "Performance optimization",
      "Priority support",
      "Custom timeline",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Pricing"
          title="Simple, Transparent Pricing"
          subtitle="Fixed-price projects with clear deliverables. No hidden fees, no hourly surprises."
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.15}>
              <div
                className={`relative rounded-2xl p-6 lg:p-8 h-full flex flex-col ${
                  plan.popular
                    ? "bg-slate-900 text-white shadow-xl shadow-slate-900/20 scale-105 lg:scale-110"
                    : "bg-white border border-slate-200/60"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-500 to-violet-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      <Zap className="w-3 h-3" />
                      Best Value
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-lg font-semibold ${plan.popular ? "text-white" : "text-slate-900"}`}>
                    {plan.name}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className={`text-3xl lg:text-4xl font-bold ${plan.popular ? "text-white" : "text-slate-900"}`}>
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className={`text-sm ${plan.popular ? "text-slate-300" : "text-slate-500"}`}>
                        /project
                      </span>
                    )}
                  </div>
                  <p className={`mt-2 text-sm ${plan.popular ? "text-slate-300" : "text-slate-600"}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? "text-blue-400" : "text-blue-600"}`} />
                      <span className={`text-sm ${plan.popular ? "text-slate-300" : "text-slate-600"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-white text-slate-900 hover:bg-slate-100"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Code, Smartphone, Globe, Database, Palette, Rocket } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import AnimatedCard from "../components/AnimatedCard";

const services = [
  {
    icon: Globe,
    title: "Headless WordPress + React",
    description: "Modern React frontends with WordPress CMS backend. Edit content easily while your site loads in under 1 second.",
    tags: ["Next.js", "WordPress", "SEO"],
  },
  {
    icon: Smartphone,
    title: "Flutter Mobile Apps",
    description: "Cross-platform iOS and Android apps built with Flutter. One codebase, faster delivery, lower cost for your startup.",
    tags: ["iOS", "Android", "Firebase"],
  },
  {
    icon: Code,
    title: "Spring Boot APIs",
    description: "Robust REST APIs and admin dashboards using Java Spring Boot and React. Enterprise-grade security and performance.",
    tags: ["Java", "Spring Boot", "React"],
  },
  {
    icon: Database,
    title: "Node.js Backend",
    description: "Scalable Node.js backends with Express, MongoDB, and PostgreSQL. Real-time features and third-party integrations.",
    tags: ["Node.js", "MongoDB", "PostgreSQL"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Clean, conversion-focused design systems using Tailwind CSS and shadcn/ui. Accessible and responsive on all devices.",
    tags: ["Tailwind", "Figma", "Accessibility"],
  },
  {
    icon: Rocket,
    title: "MVP Development",
    description: "Rapid MVP builds for startups. Go from idea to launch in 2-4 weeks with a working product you can show investors.",
    tags: ["MVP", "Startup", "Launch"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Services"
          title="Everything You Need to Launch"
          subtitle="Full-stack development services tailored for startups and agencies who value speed, quality, and clean code."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <AnimatedCard key={service.title} delay={i * 0.1}>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-violet-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
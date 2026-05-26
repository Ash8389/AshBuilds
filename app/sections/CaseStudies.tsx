import { ArrowUpRight, TrendingUp, Users, Clock } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import ScrollReveal from "../components/ScrollReveal";

const caseStudies = [
  {
    title: "Fintech Dashboard",
    client: "PayFlow Inc.",
    description: "Built a real-time analytics dashboard for a fintech startup, reducing their data processing time by 60%.",
    image: "bg-gradient-to-br from-blue-500 to-cyan-400",
    stats: [
      { icon: TrendingUp, label: "Performance", value: "+60%" },
      { icon: Users, label: "Active Users", value: "12K" },
      { icon: Clock, label: "Delivery", value: "3 Weeks" },
    ],
    tags: ["React", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "E-Commerce Platform",
    client: "StyleMart",
    description: "Headless WordPress + Next.js storefront with Stripe integration. Page load time dropped from 4s to 0.8s.",
    image: "bg-gradient-to-br from-violet-500 to-purple-400",
    stats: [
      { icon: TrendingUp, label: "Speed Boost", value: "5x" },
      { icon: Users, label: "Conversion", value: "+34%" },
      { icon: Clock, label: "Delivery", value: "2 Weeks" },
    ],
    tags: ["Next.js", "WordPress", "Stripe"],
  },
  {
    title: "Health & Fitness App",
    client: "FitTrack",
    description: "Cross-platform Flutter app with Firebase backend. Features workout tracking, nutrition logging, and social sharing.",
    image: "bg-gradient-to-br from-emerald-500 to-teal-400",
    stats: [
      { icon: TrendingUp, label: "Downloads", value: "50K+" },
      { icon: Users, label: "Rating", value: "4.8★" },
      { icon: Clock, label: "Delivery", value: "4 Weeks" },
    ],
    tags: ["Flutter", "Firebase", "Node.js"],
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Case Studies"
          title="Recent Work"
          subtitle="Real projects delivered for startups and agencies. Fast turnaround, measurable results."
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <ScrollReveal key={study.title} delay={i * 0.15}>
              <div className="group bg-white rounded-2xl border border-slate-200/60 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                {/* Image placeholder */}
                <div className={`h-48 ${study.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-semibold text-white/90 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {study.client}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{study.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{study.description}</p>

                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {study.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <stat.icon className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                        <div className="text-lg font-bold text-slate-900">{stat.value}</div>
                        <div className="text-xs text-slate-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
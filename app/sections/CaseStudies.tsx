import { ArrowUpRight, TrendingUp, Users, Clock } from "lucide-react"
import SectionHeader from "../components/SectionHeader"
import ScrollReveal from "../components/ScrollReveal"

const caseStudies = [
  {
    title: "Fintech Dashboard",
    // client: "PayFlow Inc.",
    description:
      "Built a real-time analytics dashboard for a fintech startup, reducing their data processing time by 60%.",
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
    // client: "StyleMart",
    description:
      "Headless WordPress + Next.js storefront with Stripe integration. Page load time dropped from 4s to 0.8s.",
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
    // client: "FitTrack",
    description:
      "Cross-platform Flutter app with Firebase backend. Features workout tracking, nutrition logging, and social sharing.",
    image: "bg-gradient-to-br from-emerald-500 to-teal-400",
    stats: [
      { icon: TrendingUp, label: "Downloads", value: "50K+" },
      { icon: Users, label: "Rating", value: "4.8★" },
      { icon: Clock, label: "Delivery", value: "4 Weeks" },
    ],
    tags: ["Flutter", "Firebase", "Node.js"],
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-slate-50 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Case Studies"
          title="Recent Work"
          subtitle="Real projects delivered for startups and agencies. Fast turnaround, measurable results."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {caseStudies.map((study, i) => (
            <ScrollReveal key={study.title} delay={i * 0.15}>
              <div className="group overflow-hidden rounded-2xl border border-slate-200/60 bg-white transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50">
                {/* Image placeholder */}
                <div className={`h-48 ${study.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute right-4 bottom-4 left-4">
                    {/* <span className="rounded-full bg-black/20 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-sm">
                      {study.client}
                    </span> */}
                  </div>
                  <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-slate-900">
                    {study.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-600">
                    {study.description}
                  </p>

                  <div className="mb-4 grid grid-cols-3 gap-3">
                    {study.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <stat.icon className="mx-auto mb-1 h-4 w-4 text-blue-600" />
                        <div className="text-lg font-bold text-slate-900">
                          {stat.value}
                        </div>
                        <div className="text-xs text-slate-500">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700"
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
  )
}

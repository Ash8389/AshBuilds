import { Star, Quote } from "lucide-react"
import SectionHeader from "../components/SectionHeader"
import ScrollReveal from "../components/ScrollReveal"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, PayFlow Inc.",
    content:
      "AshBuilds delivered our fintech dashboard in 3 weeks — half the time quoted by other agencies. The code quality was exceptional and they communicated daily.",
    rating: 5,
    avatar: "SC",
    color: "bg-blue-500",
  },
  {
    name: "Marcus Johnson",
    role: "Founder, StyleMart",
    content:
      "Our site speed went from 4 seconds to 0.8 seconds. Conversions jumped 34% in the first month. Best investment we've made for our e-commerce business.",
    rating: 5,
    avatar: "MJ",
    color: "bg-violet-500",
  },
  {
    name: "Elena Rodriguez",
    role: "Product Lead, FitTrack",
    content:
      "The Flutter app they built works flawlessly on both iOS and Android. Our users love the smooth animations and fast load times. Highly recommended.",
    rating: 5,
    avatar: "ER",
    color: "bg-emerald-500",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Testimonials"
          title="What Clients Say"
          subtitle="Don't just take our word for it. Here's what founders and product leaders say about working with us."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <ScrollReveal key={testimonial.name} delay={i * 0.15}>
              <div className="flex h-full flex-col rounded-2xl bg-slate-50 p-6 lg:p-8">
                <Quote className="mb-4 h-8 w-8 text-blue-200" />

                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="mb-6 flex-grow leading-relaxed text-slate-700">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3 border-t border-slate-200 pt-4">
                  <div
                    className={`h-10 w-10 ${testimonial.color} flex items-center justify-center rounded-full text-sm font-semibold text-white`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-500">
                      {testimonial.role}
                    </div>
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

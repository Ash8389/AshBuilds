"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Mail,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import ScrollReveal from "../components/ScrollReveal"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "jhaashish270@gmail.com", // ← CHANGE THIS
    href: "mailto:jhaashish270@gmail.com", // ← CHANGE THIS
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Remote — Worldwide",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
]

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xwvzwpod", {
        // ← PASTE YOUR ID HERE
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      }
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-slate-900 py-20 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <ScrollReveal>
            <span className="mb-4 inline-block rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-blue-400 uppercase">
              Get In Touch
            </span>
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl xl:text-5xl">
              Ready to Build Something{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Amazing?
              </span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              Tell me about your project. I'll respond within 24 hours with a
              clear timeline and fixed-price quote.
            </p>

            <div className="mt-8 space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                    <item.icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium transition-colors hover:text-blue-400"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-medium">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right Form */}
          <ScrollReveal delay={0.2}>
            {isSubmitted ? (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
                <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-400" />
                <h3 className="mb-2 text-xl font-semibold">Message Sent!</h3>
                <p className="text-slate-400">
                  I'll get back to you within 24 hours.
                </p>
                <Button
                  className="mt-4 bg-white/10 hover:bg-white/20"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:p-8"
              >
                <div className="mb-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                      Name
                    </label>
                    <Input
                      name="name"
                      required
                      placeholder="John Doe"
                      className="border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Project Type
                  </label>
                  <Input
                    name="project_type"
                    placeholder="Website, Mobile App, API..."
                    className="border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:border-blue-500"
                  />
                </div>

                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Project Details
                  </label>
                  <Textarea
                    name="message"
                    required
                    placeholder="Tell me about your project, timeline, and budget..."
                    rows={4}
                    className="resize-none border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:border-blue-500"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-500 hover:to-violet-500 disabled:opacity-50"
                  size="lg"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                <p className="mt-4 text-center text-xs text-slate-500">
                  No spam. Your information is kept confidential.
                </p>
              </form>
            )}
          </ScrollReveal>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row"
        >
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-500">
              <span className="text-sm font-bold text-white">A</span>
            </div>
            <span className="text-lg font-bold">AshBuilds</span>
          </div>
          <p className="text-sm text-slate-500">
            © 2026 AgencyPro. Built with React, Next.js & Tailwind CSS.
          </p>
          <a
            href="#"
            className="flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-white"
          >
            Back to top
            <ArrowRight className="h-4 w-4 rotate-[-90deg]" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Calendar, ArrowRight, Video, Clock, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "../components/ScrollReveal"

export default function BookCall() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-violet-600 py-16 text-white lg:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal>
          <span className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wider text-blue-100 uppercase">
            Free Consultation
          </span>

          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
            Not Sure Where to Start?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-blue-100">
            Book a free 20-minute call. I'll review your project, suggest the
            best approach, and give you a fixed-price quote — no commitment
            required.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              <span>Zoom / Google Meet</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>20 Minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>Your Timezone</span>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8"
          >
            <a
              href="https://calendly.com/jhaashish270/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white px-8 text-blue-600 hover:bg-blue-50"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Free Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>

          <p className="mt-4 text-sm text-blue-200">
            No spam. Cancel or reschedule anytime.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

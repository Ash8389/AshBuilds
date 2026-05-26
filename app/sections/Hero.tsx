"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Zap, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { icon: Zap, label: "Projects Delivered", value: "120+" },
  { icon: Shield, label: "Client Satisfaction", value: "98%" },
  { icon: Clock, label: "Avg. Delivery", value: "2 Weeks" },
]

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-violet-50/20" />
      <div className="absolute top-0 right-0 h-[600px] w-[600px] translate-x-1/4 -translate-y-1/2 rounded-full bg-gradient-to-bl from-blue-100/40 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/4 translate-y-1/3 rounded-full bg-gradient-to-tr from-violet-100/30 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
              Available for new projects
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl leading-[1.1] font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              We Build Digital{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Products
              </span>{" "}
              That Convert
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 lg:text-xl"
            >
              Headless WordPress + React websites and Flutter mobile apps that
              load in under 1 second. Built for agencies and startups who need
              speed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-slate-900 px-8 text-white hover:bg-slate-800"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300">
                <Play className="mr-2 h-4 w-4" />
                View Demo
              </Button>
            </motion.div>
          </div>

          {/* Right - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid gap-4"
          >
            <div className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-lg shadow-slate-200/50">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500">
                  Performance Score
                </span>
                <span className="rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                  Lighthouse 98
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "98%" }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  className="h-full rounded-full bg-gradient-to-r from-green-400 to-green-500"
                />
              </div>
              <div className="mt-2 flex justify-between text-xs text-slate-400">
                <span>0</span>
                <span>100</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="rounded-xl border border-slate-200/60 bg-white p-4 text-center"
                >
                  <stat.icon className="mx-auto mb-2 h-5 w-5 text-blue-600" />
                  <div className="text-xl font-bold text-slate-900">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-6 text-white">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Quick-Turn Projects</div>
                  <div className="text-sm text-white/70">
                    2-4 weeks delivery
                  </div>
                </div>
              </div>
              <p className="text-sm text-white/80">
                Perfect for startups and agencies who need MVPs, landing pages,
                and admin dashboards fast.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

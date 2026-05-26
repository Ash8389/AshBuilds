"use client"

import { motion } from "framer-motion"
import ScrollReveal from "./ScrollReveal"

interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  return (
    <ScrollReveal
      className={`mb-12 lg:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {label && (
        <motion.span className="mb-4 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wider text-blue-600 uppercase">
          {label}
        </motion.span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl xl:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  )
}

"use client"

import { motion } from "framer-motion"
import { AuroraButton } from "@/components/ui/aurora-button"

export default function CTA() {
  return (
    <motion.section
      className="relative overflow-hidden py-24 sm:py-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-black/90" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10"
        style={{
          maskImage: "radial-gradient(circle at center, black, transparent)",
          WebkitMaskImage: "radial-gradient(circle at center, black, transparent)",
        }}
      />

      {/* Animated gradient orbs */}
      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-purple-500/30 blur-3xl animate-pulse" />
      <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl animate-pulse" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to revolutionize your hotel&apos;s reputation?
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-300 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Start your free trial today and experience the power of AI-driven review management.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AuroraButton className="rounded-lg px-8 py-4">
              <span className="text-lg sm:text-xl font-bold px-3 py-1.5 inline-flex items-center justify-center">
                Try for free
              </span>
            </AuroraButton>
            <p className="mt-4 text-sm text-gray-400">No credit card required</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}


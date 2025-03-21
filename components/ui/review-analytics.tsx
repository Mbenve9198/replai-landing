"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import DynamicVideoPlayer from "./dynamic-video-player"

// Standardized brand blue
const BRAND_BLUE = "#3085ff"
const BRAND_BLUE_LIGHT = "#5a9dff"

const ReviewAnalytics = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="relative w-full h-full perspective-1000" ref={ref}>
      {/* Primary glow effect */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(circle at center, ${BRAND_BLUE}59, ${BRAND_BLUE}33, transparent)`,
          transform: "translateY(10%) scale(0.95)",
          filter: "blur(30px)",
          borderRadius: "24px",
        }}
      />

      {/* Secondary glow effect */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background: `radial-gradient(circle at center, ${BRAND_BLUE}26, ${BRAND_BLUE}11, transparent)`,
          transform: "translateY(10%) scale(1.1)",
          filter: "blur(90px)",
          borderRadius: "24px",
        }}
      />

      <motion.div
        className="relative z-10 w-full h-full aspect-video rounded-xl overflow-hidden shadow-lg"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(-5deg) rotateY(5deg) scale(0.98)",
          boxShadow: `
          0 20px 40px -10px rgba(0,0,0,0.3),
          0 10px 20px -10px rgba(0,0,0,0.2),
          0 -5px 20px -5px rgba(0,0,0,0.1),
          0 0 0 1px ${BRAND_BLUE}33
        `,
          background: "rgba(0,0,0,0.8)",
          borderRadius: "24px",
        }}
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <DynamicVideoPlayer src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0303%284%29-tPIfb86ko2qmW0LRWAShhLgZmazT0N.mp4" />
      </motion.div>

      {/* Projected shadow */}
      <div
        className="absolute inset-0 -z-10 blur-2xl opacity-50"
        style={{
          background: `linear-gradient(45deg, ${BRAND_BLUE}33, ${BRAND_BLUE_LIGHT}33)`,
          transform: "translateY(16px) rotateX(8deg) rotateY(-8deg) scale(0.92)",
          borderRadius: "32px",
        }}
      />
    </div>
  )
}

export default ReviewAnalytics


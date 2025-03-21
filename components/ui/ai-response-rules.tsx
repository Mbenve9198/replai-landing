"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Coffee, Home, Utensils, Star, ChevronLeft, ChevronRight } from "lucide-react"

const AIResponseRules = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const rules = [
    {
      icon: Coffee,
      trigger: "Excellent breakfast",
      action: "Mention new chef",
      response:
        "We're thrilled you enjoyed our breakfast! Our new chef, Marco, has been working hard to create a delightful morning experience.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Home,
      trigger: "Small rooms",
      action: "Explain historical building",
      response:
        "We appreciate your feedback on the room size. Our hotel is housed in a historic building, and we've chosen to preserve its authentic charm rather than altering the original architecture.",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: Utensils,
      trigger: "Great dinner",
      action: "Highlight local ingredients",
      response:
        "We're delighted you enjoyed your dinner! Our chef takes pride in sourcing the finest local ingredients to create memorable dining experiences.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Star,
      trigger: "Poor value for money",
      action: "Highlight unique features",
      response:
        "Thank you for your candid feedback. While our rates reflect our prime location and unique historic setting, we continuously strive to enhance the value we offer through exceptional service and distinctive experiences.",
      color: "from-purple-400 to-pink-500",
    },
  ]

  const nextRule = () => {
    setCurrentIndex((prev) => (prev + 1) % rules.length)
  }

  const prevRule = () => {
    setCurrentIndex((prev) => (prev - 1 + rules.length) % rules.length)
  }

  return (
    <div className="relative w-full h-full perspective-1000" ref={ref}>
      {/* Glow effects */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(circle at center, rgba(147,51,234,0.3), rgba(147,51,234,0), transparent)",
          transform: "translateY(10%) scale(0.95)",
          filter: "blur(40px)",
          borderRadius: "24px",
        }}
      />
      <div
        className="absolute inset-0 -z-20"
        style={{
          background: "radial-gradient(circle at center, rgba(147,51,234,0.15), rgba(147,51,234,0), transparent)",
          transform: "translateY(10%) scale(1.1)",
          filter: "blur(90px)",
          borderRadius: "24px",
        }}
      />

      <motion.div
        className="relative z-10 w-full h-auto min-h-[400px] sm:min-h-[450px] md:min-h-[300px] rounded-lg overflow-hidden shadow-lg backdrop-blur-sm"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(5deg) rotateY(-5deg) scale(0.98)",
          boxShadow: `
            0 20px 40px -10px rgba(0,0,0,0.3),
            0 10px 20px -10px rgba(0,0,0,0.2),
            0 -5px 20px -5px rgba(0,0,0,0.1),
            0 0 0 1px rgba(147,51,234,0.2)
          `,
          background: "rgba(0,0,0,0.8)",
          borderRadius: "24px",
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Main content */}
        <div className="relative z-10 p-6 flex flex-col justify-between">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="relative backdrop-blur-md bg-white/5 rounded-lg p-4 border border-white/10"
          >
            <div className="flex items-start gap-4">
              <div className={`p-2 rounded-full bg-gradient-to-br ${rules[currentIndex].color}`}>
                {(() => {
                  const IconComponent = rules[currentIndex].icon
                  return <IconComponent className="w-6 h-6 text-white" />
                })()}
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-white mb-2">
                  If review mentions: {rules[currentIndex].trigger}
                </h4>
                <p className="text-sm text-gray-300 mb-2">Then: {rules[currentIndex].action}</p>
                <div
                  className="mt-3 p-4 bg-gradient-to-br from-black/80 to-black/40 rounded-lg relative overflow-hidden group"
                  style={{
                    boxShadow: "inset 0 0 20px rgba(147,51,234,0.1)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-purple-500/10" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(45deg, rgba(147,51,234,0.1) 0%, rgba(220,38,38,0.1) 100%)",
                    }}
                  />
                  <p
                    className="text-sm relative z-10 italic"
                    style={{
                      color: "#f8f8f8",
                      textShadow: "0 0 20px rgba(147,51,234,0.3)",
                      fontFamily: "'Inter', system-ui, sans-serif",
                      letterSpacing: "0.01em",
                      lineHeight: "1.6",
                    }}
                  >
                    &quot;{rules[currentIndex].response}&quot;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation controls */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={prevRule}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous rule"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <div className="flex gap-2">
              {rules.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-purple-500" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextRule}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next rule"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Highlight effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom right, transparent, rgba(147,51,234,0.1))",
          }}
        />
      </motion.div>
    </div>
  )
}

export default AIResponseRules


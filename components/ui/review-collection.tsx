"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Star, ArrowRight, BarChart2 } from "lucide-react"

const ReviewCollection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const platforms = [
    {
      name: "Booking.com",
      logo: "https://cf.bstatic.com/static/img/favicon/favicon-32x32.png",
      color: "#003580",
      reviews: 324,
      rating: 8.9,
    },
    {
      name: "Google",
      logo: "https://www.google.com/favicon.ico",
      color: "#4285F4",
      reviews: 156,
      rating: 4.7,
    },
    {
      name: "TripAdvisor",
      logo: "https://static.tacdn.com/favicon.ico",
      color: "#00AA6C",
      reviews: 89,
      rating: 4.5,
    },
    {
      name: "Expedia",
      logo: "https://www.expedia.com/favicon.ico",
      color: "#00355F",
      reviews: 67,
      rating: 4.3,
    },
  ]

  return (
    <div className="relative w-full h-full perspective-1000" ref={ref}>
      {/* Primary glow effect */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(circle at center, rgba(34,197,94,0.35), rgba(34,197,94,0), transparent)",
          transform: "translateY(10%) scale(0.95)",
          filter: "blur(30px)",
          borderRadius: "24px",
        }}
      />

      {/* Secondary glow effect */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background: "radial-gradient(circle at center, rgba(34,197,94,0.15), rgba(34,197,94,0), transparent)",
          transform: "translateY(10%) scale(1.1)",
          filter: "blur(90px)",
          borderRadius: "24px",
        }}
      />

      {/* Outer glow rim */}
      <div
        className="absolute inset-0 -z-30"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, rgba(34,197,94,0.1), rgba(34,197,94,0), rgba(34,197,94,0.1))",
          transform: "translateY(10%) scale(1.2)",
          filter: "blur(120px)",
          borderRadius: "24px",
          animation: "spin 20s linear infinite",
        }}
      />

      <motion.div
        className="relative z-10 w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-lg backdrop-blur-sm"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(5deg) rotateY(-5deg) scale(0.98)",
          boxShadow: `
            0 20px 40px -10px rgba(0,0,0,0.3),
            0 10px 20px -10px rgba(0,0,0,0.2),
            0 -5px 20px -5px rgba(0,0,0,0.1),
            0 0 0 1px rgba(34,197,94,0.2)
          `,
          background: "rgba(0,0,0,0.8)",
          borderRadius: "24px",
        }}
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Main content */}
        <div className="relative z-10 h-full p-4">
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  className="relative backdrop-blur-md bg-white/5 rounded-lg p-3 border border-white/10 group hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-[56px] h-[56px] rounded-full flex items-center justify-center"
                        style={{ backgroundColor: platform.color }}
                      >
                        <Image
                          src={platform.logo || "/placeholder.svg"}
                          alt={platform.name}
                          width={20}
                          height={20}
                          className="w-[35px] h-[35px]"
                        />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-white">{platform.name}</h3>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <span className="text-xs text-gray-400">{platform.rating}</span>
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="mt-3 flex items-end justify-between">
                    <div className="space-y-1">
                      <p className="text-xs text-gray-400">Total Reviews</p>
                      <p className="text-2xl font-bold text-white">{platform.reviews}</p>
                    </div>
                    <div className="h-16 w-24 relative">
                      <BarChart2 className="w-full h-full text-green-500 opacity-50" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="backdrop-blur-md bg-white/5 rounded-lg p-3 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-white">Total Reviews</h3>
                  <p className="text-3xl font-bold text-white">{platforms.reduce((acc, p) => acc + p.reviews, 0)}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Average Rating</p>
                  <div className="flex items-center justify-end gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-xl font-bold text-white">
                      {(platforms.reduce((acc, p) => acc + p.rating, 0) / platforms.length).toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Highlight effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom right, transparent, rgba(34,197,94,0.1))",
          }}
        />
      </motion.div>
    </div>
  )
}

export default ReviewCollection


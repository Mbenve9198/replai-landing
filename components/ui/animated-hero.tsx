"use client"

import { useEffect, useMemo, useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { AuroraButton } from "./aurora-button"
import { Squares } from "@/components/ui/squares-background"
import { FloatingLogos } from "./floating-logos"
import { Phone, Zap, BarChart, Settings } from "lucide-react"
import ReviewAnalytics from "./review-analytics"
import type React from "react"
import DynamicVideoPlayer from "./dynamic-video-player"
import Image from "next/image"

// Standardized brand colors
const BRAND_BLUE = "#3085ff"
const BRAND_BLUE_LIGHT = "#5a9dff"
const BRAND_BLUE_DEEP = "#1e5fcc"
const BRAND_ORANGE = "#fe953e"
const BRAND_ORANGE_LIGHT = "#ffa95e"

export function Hero({
  title,
  description,
  buttonText,
  href,
  demoHref,
}: {
  title: React.ReactNode
  description: React.ReactNode
  buttonText: string
  href: string
  demoHref: string
}) {
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(
    () => [
      {
        text: "Profitable",
        emoji: "💎",
        className: "bg-clip-text text-transparent bg-gradient-to-r from-brand-orange to-brand-orange-light",
        shadowColor: `rgba(254, 149, 62, 0.5)`,
        darkShadowColor: `rgba(200, 100, 30, 0.6)`,
        lightHighlightColor: `rgba(255, 180, 140, 0.5)`,
      },
      {
        text: "Effortless",
        emoji: "🚀",
        className: "bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-purple-light",
        shadowColor: "rgba(139, 79, 209, 0.5)",
        darkShadowColor: "rgba(80, 30, 150, 0.6)",
        lightHighlightColor: "rgba(200, 180, 255, 0.5)",
      },
      {
        text: "Data-Driven",
        emoji: "📊",
        className: "bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-blue-light",
        shadowColor: `rgba(48, 133, 255, 0.5)`,
        darkShadowColor: `rgba(30, 95, 204, 0.6)`,
        lightHighlightColor: `rgba(90, 157, 255, 0.5)`,
      },
    ],
    [],
  )

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleNumber((prev) => (prev + 1) % titles.length)
    }, 2000)
    return () => clearInterval(intervalId)
  }, [titles.length])

  const reviewAnalyticsRef = useRef(null)
  const reviewAnalyticsInView = useInView(reviewAnalyticsRef, { once: true, margin: "-50px" })

  const extremeCustomizationRef = useRef(null)
  const extremeCustomizationInView = useInView(extremeCustomizationRef, { once: true, margin: "-50px" })

  const collectReviewsRef = useRef(null)
  const collectReviewsInView = useInView(collectReviewsRef, { once: true, margin: "-50px" })

  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  // Colors for the lamp effect based on the current title
  const currentLampColors = useMemo(() => {
    const colors = [
      [BRAND_ORANGE, BRAND_ORANGE_LIGHT, "#e07520"], // Orange for Profitable
      ["#8B4FD1", "#AB6FF1", "#6B2FB1"], // Purple for Effortless
      [BRAND_BLUE, BRAND_BLUE_LIGHT, BRAND_BLUE_DEEP], // Blue for Data-Driven
    ]
    return colors[titleNumber]
  }, [titleNumber])

  // Standard video dimensions class for consistency
  const videoContainerClass = "w-full aspect-video rounded-xl overflow-hidden shadow-lg lg:max-w-[90%] lg:mx-auto"

  // Animation variants for the slide-in and bounce effect
  const slideInVariants = {
    initial: {
      y: 50,
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 1,
        duration: 0.5,
      },
    },
    exit: {
      y: -50,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  // Animation variants for the emoji
  const emojiVariants = {
    initial: {
      opacity: 0,
      scale: 0,
      rotate: -45,
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0.2,
        duration: 0.4,
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      rotate: 45,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <section className="relative w-full bg-black">
      <div className="absolute inset-0">
        <Squares direction="diagonal" speed={0.5} squareSize={40} borderColor="#333" hoverFillColor="#222" />
      </div>

      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-screen items-center justify-center flex-col w-full py-16 sm:py-24 md:py-32">
            <div className="flex gap-2 sm:gap-3 md:gap-4 flex-col items-center w-full max-w-[90vw] sm:max-w-full">
              {/* Lamp effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] -z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={titleNumber}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(circle at center, ${currentLampColors[0]}33 0%, ${currentLampColors[1]}22 30%, ${currentLampColors[2]}11 60%, transparent 70%)`,
                      filter: "blur(60px)",
                    }}
                  />
                </AnimatePresence>
              </div>

              {/* Main heading */}
              <motion.h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-semibold tracking-tight text-white max-w-7xl text-center relative z-10">
                <span className="text-white font-bold tracking-tight">Grow your hotel reputation</span>
              </motion.h1>

              {/* Animated subtitle with slide-in and bounce effect */}
              <div className="h-24 sm:h-24 md:h-28 lg:h-32 xl:h-32 2xl:h-36 relative w-full overflow-hidden -mt-2 sm:-mt-4 md:-mt-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={titleNumber}
                    className="absolute inset-0 flex items-center justify-center"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={slideInVariants}
                  >
                    <span
                      className={`text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold italic ${titles[titleNumber].className}`}
                      style={{
                        textShadow: `
                        0 0 1px ${titles[titleNumber].lightHighlightColor},
                        1px 1px 2px ${titles[titleNumber].darkShadowColor},
                        0 0 8px ${titles[titleNumber].shadowColor}
                      `,
                      }}
                    >
                      {titles[titleNumber].text}
                      <motion.span className="text-white ml-2 inline-block" variants={emojiVariants}>
                        {titles[titleNumber].emoji}
                      </motion.span>
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl text-center">
                {description}
              </p>

              {/* Platform logos */}
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <FloatingLogos />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg justify-center mt-6 sm:mt-8">
                <AuroraButton
                  className="w-full sm:w-auto rounded-xl px-6 sm:px-8 py-3 sm:py-4 bg-black/90 backdrop-blur-sm border border-brand-blue hover:scale-105 transition-transform duration-300"
                  href={href}
                >
                  <span className="text-lg sm:text-xl font-bold px-3 py-1.5 inline-flex items-center justify-center whitespace-nowrap">
                    Try for free
                  </span>
                </AuroraButton>
                <button
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl font-bold text-white hover:text-gray-200 transition-all border border-white/20 rounded-xl hover:scale-105 duration-300 backdrop-blur-sm"
                  onClick={() => (window.location.href = demoHref)}
                >
                  <Phone className="w-5 h-5" />
                  <span className="whitespace-nowrap">Book a call</span>
                </button>
              </div>

              {/* Dashboard Preview */}
              <motion.div ref={containerRef} className="mt-8 sm:mt-10 w-full">
                <motion.div
                  className="relative w-full"
                  initial={{ opacity: 0, y: 100, scale: 0.9 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: {
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0.2,
                          },
                        }
                      : {}
                  }
                >
                  <div className="w-full max-w-full overflow-hidden shadow-2xl rounded-xl">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Testo%20del%20paragrafo%20%287%29-yYWB2tCjJ26OlPiZkWXobfdO0OucPm.png"
                      alt="ReplAI Dashboard"
                      width={1200}
                      height={800}
                      className="w-full h-auto"
                      priority
                    />
                  </div>

                  {/* Subtle glow effect */}
                  <motion.div
                    className="absolute -inset-0.5 bg-gradient-brand opacity-0 blur-2xl"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 0.15 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{
                      zIndex: -1,
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Features section */}
              <div className="mt-12 sm:mt-16 md:mt-24 w-full space-y-12 sm:space-y-16 md:space-y-24">
                {/* 1. Generate responses - Description left, Video right */}
                <motion.div
                  id="smart-replies"
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start mx-4 sm:mx-8 md:mx-12 lg:mx-16"
                >
                  <div className="flex flex-col items-start space-y-6 order-1 lg:order-1">
                    <div className="flex items-center">
                      <Zap className="w-6 h-6 sm:w-7 sm:h-7 mr-3 text-brand-orange" style={{ color: BRAND_ORANGE }} />
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                        Smart Replies, One Click Away
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                      AI-powered responses tailored to your hotel's voice—fast, effortless, and on-brand.
                    </p>
                    <AuroraButton className="rounded-lg px-5 py-3 mt-4">
                      <span className="text-base sm:text-lg font-bold px-3 py-1.5 inline-flex items-center justify-center">
                        Try for free
                      </span>
                    </AuroraButton>
                  </div>
                  <div className={`${videoContainerClass} order-2 lg:order-2`}>
                    <DynamicVideoPlayer src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0303%285%29-UcRaIYeoiXD3UxnE0V7CWdqYNEB7ig.mp4" />
                  </div>
                </motion.div>

                {/* 2. Make data-driven decisions - Video left, Description right */}
                <div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start mx-4 sm:mx-8 md:mx-12 lg:mx-16"
                  ref={reviewAnalyticsRef}
                >
                  <motion.div
                    className={`${videoContainerClass} order-2 lg:order-1`}
                    initial={{ opacity: 0, x: -50 }}
                    animate={reviewAnalyticsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <ReviewAnalytics />
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-start space-y-4 order-1 lg:order-2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={reviewAnalyticsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="flex items-center">
                      <BarChart className="w-6 h-6 sm:w-7 sm:h-7 mr-3 text-brand-blue" style={{ color: BRAND_BLUE }} />
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Actionable Insights</h3>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                      AI-powered analytics reveal strengths and weaknesses from every review, helping you refine your
                      hotel's reputation and outperform competitors.
                    </p>
                    <AuroraButton className="rounded-lg px-5 py-3 mt-4">
                      <span className="text-base sm:text-lg font-bold px-3 py-1.5 inline-flex items-center justify-center">
                        Try for free
                      </span>
                    </AuroraButton>
                  </motion.div>
                </div>

                {/* 3. Extreme customization - Description left, Video right */}
                <div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start mx-4 sm:mx-8 md:mx-12 lg:mx-16"
                  ref={extremeCustomizationRef}
                >
                  <motion.div
                    className="flex flex-col items-start space-y-4 order-1 lg:order-1"
                    initial={{ opacity: 0, x: -50 }}
                    animate={extremeCustomizationInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="flex items-center">
                      <Settings className="w-6 h-6 sm:w-7 sm:h-7 mr-3 text-brand-purple" />
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                        Hyper-Personalized AI Replies
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                      With smart automation, your AI knows your hotel better than you—delivering precise, brand-aligned
                      responses effortlessly.
                    </p>
                    <AuroraButton className="rounded-lg px-5 py-3 mt-4">
                      <span className="text-base sm:text-lg font-bold px-3 py-1.5 inline-flex items-center justify-center">
                        Try for free
                      </span>
                    </AuroraButton>
                  </motion.div>
                  <motion.div
                    className={`${videoContainerClass} order-2 lg:order-2`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={extremeCustomizationInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <DynamicVideoPlayer src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/response%20rule-qTO5hivWKoTEmd9wZmQBafXPk4Oojr.mp4" />
                  </motion.div>
                </div>

                {/* 4. Smart AI Concierge - Video left, Description right */}
                <div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start mx-4 sm:mx-8 md:mx-12 lg:mx-16"
                  ref={collectReviewsRef}
                >
                  <motion.div
                    className={`${videoContainerClass} order-2 lg:order-1`}
                    initial={{ opacity: 0, x: -50 }}
                    animate={collectReviewsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <DynamicVideoPlayer src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/whatsapp%20REPLAI%20%281%29-LWbLMVrfQTyOMd1zqfFmoFkxqAQkoX.mp4" />
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-start space-y-4 order-1 lg:order-2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={collectReviewsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="flex items-center">
                      <Zap className="w-6 h-6 sm:w-7 sm:h-7 mr-3 text-brand-orange" style={{ color: BRAND_ORANGE }} />
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                        24/7 AI Concierge & Review Boost
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                      Offer instant WhatsApp assistance and seamlessly increase guest reviews with AI-powered
                      engagement.
                    </p>
                    <AuroraButton className="rounded-lg px-5 py-3 mt-4">
                      <span className="text-base sm:text-lg font-bold px-3 py-1.5 inline-flex items-center justify-center">
                        Try for free
                      </span>
                    </AuroraButton>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


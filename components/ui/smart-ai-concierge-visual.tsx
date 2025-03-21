"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

const SmartAIConciergeVisual = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full max-w-sm mx-auto bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl overflow-hidden shadow-2xl p-4"
    >
      <div className="space-y-4">
        {/* Concierge Chat */}
        <div className="bg-white rounded-lg p-3 shadow-md">
          <div className="flex items-center mb-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KlR6ut9W07HCBvNUHgL71hGjtCd2GY.png"
              alt="WhatsApp"
              width={24}
              height={24}
              className="mr-2"
            />
            <span className="font-semibold text-gray-800">AI Concierge</span>
          </div>
          <p className="text-sm text-gray-600">
            I recommend "La Trattoria". It's a 5-minute walk and has great reviews. As our guest, you also have a 20%
            discount on dinner, isn't that great?
          </p>
        </div>

        {/* Customer Review */}
        <div className="bg-green-100 rounded-lg p-3 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nbBNQ2lKdd4sSvFc34obTs0iIwboFV.png"
                alt="Google Business"
                width={24}
                height={24}
                className="mr-2"
              />
              <span className="font-semibold text-gray-800">Your Review</span>
            </div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-600">
            "Amazing experience! The AI concierge was incredibly helpful and the dinner discount was a pleasant
            surprise. Highly recommended!"
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default SmartAIConciergeVisual


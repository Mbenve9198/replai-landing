"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function FloatingLogos() {
  return (
    <div className="flex justify-center items-center my-1">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: [-10, 10],
        }}
        transition={{
          opacity: { duration: 0.5 },
          y: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            duration: 2,
            ease: "easeInOut",
          },
        }}
        className="relative w-[400px] h-[100px]"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Progetto%20senza%20titolo%20(1)-ONvsLrjyEWQ4hHx4rrtRUuwzjlfJ18.png"
          alt="Review Platform Logos"
          width={400}
          height={100}
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  )
}


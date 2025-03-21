"use client"

import type React from "react"
import { motion } from "framer-motion"

const AppMockup: React.FC = () => {
  return (
    <motion.div
      className="relative w-full max-w-sm mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="relative z-10 overflow-hidden bg-black rounded-[2.5rem] shadow-xl border-8 border-gray-800">
        <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 rounded-b-lg"></div>
        <div className="h-[600px] bg-gradient-to-b from-blue-500 to-purple-600 p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="text-white font-bold">Replai</div>
            <div className="text-white">9:41</div>
          </div>
          <div className="bg-white rounded-lg p-3 mb-3">
            <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-white rounded-lg p-3 mb-3">
            <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-white rounded-lg p-3">
            <div className="h-4 w-5/6 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 blur-2xl opacity-30 transform scale-110"></div>
    </motion.div>
  )
}

export default AppMockup


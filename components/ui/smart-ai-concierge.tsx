"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

const SmartAIConcierge = () => {
  const [messages, setMessages] = useState([
    { text: "Welcome to Sunset Resort! I'm your AI concierge. How can I assist you today?", sender: "ai" },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return

    setMessages([...messages, { text: inputMessage, sender: "user" }])
    setInputMessage("")

    // Simulate AI response
    setTimeout(() => {
      let aiResponse
      if (inputMessage.toLowerCase().includes("restaurant")) {
        aiResponse =
          "Great choice! I recommend trying our partner restaurant 'Ocean View'. They have a special menu for our guests. Would you like me to make a reservation for you?"
      } else if (inputMessage.toLowerCase().includes("activity")) {
        aiResponse =
          "We have several exciting activities available! How about a sunset sailing trip? It's very popular among our guests and offers breathtaking views."
      } else {
        aiResponse =
          "I'd be happy to help with that. Is there anything specific you'd like to know about our resort or the local area?"
      }
      setMessages((prev) => [...prev, { text: aiResponse, sender: "ai" }])
    }, 1000)
  }

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-md mx-auto">
      <div className="bg-green-500 text-white p-4">
        <h3 className="text-lg font-semibold">Sunset Resort AI Concierge</h3>
      </div>
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg ${
                message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              {message.text}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="border-t p-4 flex">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Ask about restaurants, activities, or anything else..."
          className="flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          onClick={handleSendMessage}
          className="bg-green-500 text-white px-4 py-2 rounded-r-lg hover:bg-green-600 transition-colors"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  )
}

export default SmartAIConcierge


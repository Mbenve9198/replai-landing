"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, Sparkles, Send, Star } from "lucide-react"
import { ChatMessageList } from "@/components/ui/chat-message-list"
import { ChatBubble, ChatBubbleMessage, ChatBubbleAvatar } from "@/components/ui/chat-bubble"
import { ChatInput } from "@/components/ui/chat-input"
import Image from "next/image"

const mockReview = {
  platform: "Booking.com",
  rating: "8/10",
  author: "Emilia",
  content:
    "The breakfast was fantastic with a great variety. Staff was supportive and competent. The room was a bit small, but nicely done with everything I needed. Overall, a great experience.",
}

const responseTemplates = {
  professional: {
    short:
      "Dear Emilia, Thank you for your feedback. We're delighted you enjoyed our breakfast and staff. We appreciate your understanding regarding the room size. We hope to welcome you back soon. Best regards, Hotel Management",
    medium:
      "Dear Emilia, Thank you for sharing your experience. We're thrilled you enjoyed our breakfast and found our staff supportive. We apologize for the room size but are glad it met your needs. We value your feedback and hope to see you again. Best regards, Hotel Management",
    long: "Dear Emilia, Thank you for your detailed review. We're delighted our breakfast and staff exceeded your expectations. We apologize for the room size and appreciate your understanding. Your feedback is invaluable for our continuous improvement. We look forward to welcoming you back for an even better experience. Best regards, Hotel Management",
  },
  friendly: {
    short:
      "Hi Emilia! Thanks for the awesome review! So glad you loved our breakfast and our team. Sorry about the snug room, but happy it had what you needed. Hope to see you again soon! Cheers, The Hotel Team",
    medium:
      "Hey Emilia! Wow, thanks for the great feedback! We're stoked you enjoyed our breakfast spread and that our team took good care of you. Sorry the room was a bit cozy, but glad it did the trick. Your thoughts mean a lot to us. Hope you'll come back and see us again soon! Take care, The Hotel Crew",
    long: "Hi Emilia! Thanks a million for taking the time to share your experience! We're over the moon that you loved our breakfast - our chef will be thrilled to hear it! And it's fantastic to know our team made you feel well looked after. We're sorry the room was on the smaller side, but we're glad it had everything you needed. Your feedback is gold to us, and we're always looking for ways to make things even better. We'd love to have you back - maybe we can hook you up with a larger room next time? Thanks again for choosing us, and we can't wait to welcome you back for another great stay! All the best, Your friends at the Hotel",
  },
}

const suggestions = [
  "Highlight breakfast quality",
  "Address room size concerns",
  "Emphasize staff competence",
  "Offer future upgrade",
]

export function ReviewPanel() {
  const [tone, setTone] = useState<"professional" | "friendly">("friendly")
  const [length, setLength] = useState<"short" | "medium" | "long">("short")
  const [response, setResponse] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const generateResponse = async () => {
    setIsGenerating(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setResponse(responseTemplates[tone][length])
    setIsGenerating(false)
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute inset-0 bg-glow opacity-50 animate-pulse" />
      <div className="absolute inset-0 bg-glow opacity-30 animate-glow-spin" />

      <Card className="relative z-10 overflow-hidden rounded-xl shadow-2xl bg-black/90 backdrop-blur-md border border-white/20">
        <CardContent className="p-3 sm:p-4 space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#003580] flex items-center justify-center">
                <Image
                  src="https://cf.bstatic.com/static/img/favicon/favicon-32x32.png"
                  alt="Booking.com"
                  width={20}
                  height={20}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </div>
              <div>
                <h3 className="font-semibold text-white text-shadow text-sm sm:text-base">{mockReview.author}</h3>
                <div className="flex items-center">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300 mr-1 fill-current" />
                  <span className="text-xs sm:text-sm text-white/80">{mockReview.rating}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-2 bg-white/10 rounded-lg p-2 sm:p-3">
            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">{mockReview.content}</p>
          </div>

          <div className="flex space-x-2">
            <Select value={tone} onValueChange={(value: "professional" | "friendly") => setTone(value)}>
              <SelectTrigger className="w-1/2 bg-white/10 border-white/20 text-white text-xs sm:text-sm">
                <SelectValue placeholder="Style" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="professional" className="text-white hover:bg-gray-700 text-xs sm:text-sm">
                  Professional
                </SelectItem>
                <SelectItem value="friendly" className="text-white hover:bg-gray-700 text-xs sm:text-sm">
                  Friendly
                </SelectItem>
              </SelectContent>
            </Select>

            <Select value={length} onValueChange={(value: "short" | "medium" | "long") => setLength(value)}>
              <SelectTrigger className="w-1/2 bg-white/10 border-white/20 text-white text-xs sm:text-sm">
                <SelectValue placeholder="Length" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="short" className="text-white hover:bg-gray-700 text-xs sm:text-sm">
                  Short
                </SelectItem>
                <SelectItem value="medium" className="text-white hover:bg-gray-700 text-xs sm:text-sm">
                  Medium
                </SelectItem>
                <SelectItem value="long" className="text-white hover:bg-gray-700 text-xs sm:text-sm">
                  Long
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-colors text-xs sm:text-sm"
            onClick={generateResponse}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Generate Response
              </>
            )}
          </Button>

          <div className="bg-white/10 rounded-lg p-2 sm:p-3 h-28 sm:h-36 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            <ChatMessageList className="space-y-2 sm:space-y-3">
              {isGenerating && (
                <ChatBubble>
                  <ChatBubbleAvatar>
                    <div className="bg-white/20 rounded-full p-1">
                      <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 animate-spin text-white" />
                    </div>
                  </ChatBubbleAvatar>
                  <ChatBubbleMessage isLoading className="bg-white/10 border-0">
                    <span className="text-white text-xs sm:text-sm">Generating response...</span>
                  </ChatBubbleMessage>
                </ChatBubble>
              )}
              {response && (
                <ChatBubble>
                  <ChatBubbleAvatar>
                    <div className="bg-white/20 rounded-full p-1">
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                  </ChatBubbleAvatar>
                  <ChatBubbleMessage className="bg-white/10 border-0">
                    <div className="text-xs sm:text-sm whitespace-pre-wrap text-gray-200">{response}</div>
                  </ChatBubbleMessage>
                </ChatBubble>
              )}
            </ChatMessageList>
          </div>

          <div className="flex flex-wrap gap-1 sm:gap-2">
            {suggestions.map((suggestion) => (
              <Button
                key={suggestion}
                variant="outline"
                size="sm"
                className="bg-white/5 text-white border-white/20 hover:bg-white/10 hover:text-white transition-colors text-[10px] sm:text-xs"
              >
                {suggestion}
              </Button>
            ))}
          </div>

          <div className="relative">
            <ChatInput
              placeholder="Ask for changes..."
              className="w-full bg-white/5 text-white placeholder-white/50 border-white/20 rounded-md py-1 sm:py-2 pl-2 sm:pl-3 pr-8 sm:pr-10 focus:outline-none focus:ring-2 focus:ring-blue-300 text-xs sm:text-sm"
            />
            <Button
              size="icon"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 transition-colors"
            >
              <Send className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


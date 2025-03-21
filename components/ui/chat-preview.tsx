"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, Sparkles } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

const mockReview = {
  platform: "B.",
  rating: "7/10",
  author: "Emilia",
  content:
    "Staff was supportive and competent, the standard for breakfast wasn't great but the main issue was with the lift, a very very very slow one. It takes forever to get one during pick times. The rooms are small but nicely done and with everything needed.",
}

export function ChatPreview() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [tone, setTone] = useState("professional")
  const [length, setLength] = useState("medium")

  const generateResponse = async () => {
    setIsGenerating(true)
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsGenerating(false)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-start gap-3 mb-6">
          <div className="flex-shrink-0 w-8 h-8 bg-[#003580] text-white rounded flex items-center justify-center font-semibold">
            {mockReview.platform}
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-lg">{mockReview.author}</span>
              <span className="text-lg font-semibold">{mockReview.rating}</span>
            </div>
            <p className="text-gray-600 text-base">{mockReview.content}</p>
          </div>
        </div>

        <div className="flex gap-3 mb-4">
          <Select defaultValue={tone} onValueChange={setTone}>
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="friendly">Friendly</SelectItem>
              <SelectItem value="casual">Casual</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue={length} onValueChange={setLength}>
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="short">Short</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="long">Long</SelectItem>
            </SelectContent>
          </Select>

          <Button
            className="flex-1 bg-[#4285f4] hover:bg-[#3367d6] text-white"
            onClick={generateResponse}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Generate
              </>
            )}
          </Button>
        </div>

        <div className="flex gap-2 flex-wrap mb-4">
          <Button variant="outline" className="rounded-full">
            Emphasize elevator apology
          </Button>
          <Button variant="outline" className="rounded-full">
            Highlight breakfast improvements
          </Button>
          <Button variant="outline" className="rounded-full">
            Acknowledge room size
          </Button>
        </div>

        <Textarea placeholder="Ask for some changes..." className="w-full min-h-[100px] bg-gray-50" />
      </CardContent>
    </Card>
  )
}


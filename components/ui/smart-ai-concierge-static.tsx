import { MessageSquare, Star, ThumbsUp } from "lucide-react"

const SmartAIConciergeStatic = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] bg-gradient-to-br from-green-400 to-blue-500 rounded-lg overflow-hidden shadow-xl">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative z-10 h-full flex flex-col justify-between p-6">
        <div className="flex items-center space-x-2">
          <MessageSquare className="w-8 h-8 text-white" />
          <h3 className="text-2xl font-bold text-white">AI Concierge</h3>
        </div>
        <div className="space-y-4">
          <div className="bg-white bg-opacity-90 rounded-lg p-3 shadow-md max-w-[80%]">
            <p className="text-sm text-gray-800">Welcome! How can I assist you today?</p>
          </div>
          <div className="bg-green-100 rounded-lg p-3 shadow-md max-w-[80%] ml-auto">
            <p className="text-sm text-gray-800">Can you recommend a good restaurant nearby?</p>
          </div>
          <div className="bg-white bg-opacity-90 rounded-lg p-3 shadow-md max-w-[80%]">
            <p className="text-sm text-gray-800">
              I recommend "La Trattoria". It's a 5-minute walk and has great reviews. Shall I make a reservation?
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Star className="w-6 h-6 text-yellow-400" />
            <span className="text-white font-semibold">4.9</span>
          </div>
          <div className="flex items-center space-x-2">
            <ThumbsUp className="w-6 h-6 text-white" />
            <span className="text-white font-semibold">98% Satisfied</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmartAIConciergeStatic


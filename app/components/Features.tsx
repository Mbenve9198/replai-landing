import { Zap, BarChart, Settings, Database } from "lucide-react"
import { Squares } from "@/components/ui/squares-background"

const BRAND_ORANGE = "#fe953e"
const BRAND_BLUE = "#3085ff"

const features = [
  {
    name: "Your personal tone of voice",
    description: "Our AI-powered system generates tailored responses to reviews based on your training",
    icon: Zap,
    color: BRAND_ORANGE,
  },
  {
    name: "Analytics",
    description:
      "Leverage powerful analytics and insights to make informed decisions about your hotel's reputation and performance.",
    icon: BarChart,
    color: BRAND_BLUE,
  },
  {
    name: "Extreme customization",
    description: "Tailor every aspect of your review management process to fit your unique needs and brand voice.",
    icon: Settings,
    color: "#8B4FD1",
  },
  {
    name: "Unlimited Assistance",
    description: "Offer instant WhatsApp assistance and seamlessly increase guest reviews with AI-powered engagement.",
    icon: Database,
    color: BRAND_ORANGE,
  },
]

export default function Features() {
  return (
    <div className="relative py-12 sm:py-16 bg-black" id="features">
      <div className="absolute inset-0 z-0">
        <Squares direction="diagonal" speed={0.5} squareSize={40} borderColor="#333" hoverFillColor="#222" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div
                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white"
                    style={feature.color ? { backgroundColor: feature.color } : {}}
                  >
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg sm:text-xl leading-6 font-medium text-white">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-sm sm:text-base text-gray-300">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}


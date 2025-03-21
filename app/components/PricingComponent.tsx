"use client"
import { useState, useMemo, useCallback } from "react"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"
import { AuroraButton } from "@/components/ui/aurora-button"
import { Squares } from "@/components/ui/squares-background"
import { MessageSquare, BarChart } from "lucide-react"

const PricingComponent = () => {
  const [credits, setCredits] = useState(10000)

  const calculatePricing = useCallback((creditAmount: number) => {
    let pricePerCredit = 0.3
    const basePrice = creditAmount * 0.3
    let actualPrice = basePrice
    let savings = 0

    if (creditAmount >= 10000) {
      pricePerCredit = 0.1
      actualPrice = creditAmount * 0.1
      savings = basePrice - actualPrice
    } else if (creditAmount >= 500) {
      pricePerCredit = 0.15
      actualPrice = creditAmount * 0.15
      savings = basePrice - actualPrice
    }

    const reviewResponses = Math.floor(creditAmount / 2)
    const analyses = Math.floor(creditAmount / 10)

    return {
      totalPrice: actualPrice,
      pricePerCredit,
      savings,
      reviewResponses,
      analyses,
    }
  }, [])

  const pricing = useMemo(() => calculatePricing(credits), [credits, calculatePricing])

  return (
    <section className="relative bg-black py-8 sm:py-12 md:py-16" id="pricing-section">
      <div className="absolute inset-0 z-0">
        <Squares direction="diagonal" speed={0.5} squareSize={40} borderColor="#333" hoverFillColor="#222" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            The most competitive prices on the market
          </h2>
          <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-300">Pay only for what you use</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-lg bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center">
                  <div className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400">{credits}</div>
                  <div className="ml-2 text-sm sm:text-base md:text-lg text-gray-400">credits</div>
                </div>
                {pricing.savings > 0 && (
                  <div className="mt-2 bg-green-500 text-white px-3 py-1 rounded-full inline-block transform transition-transform duration-200 hover:scale-105">
                    <span className="text-sm font-semibold">Save €{pricing.savings.toFixed(2)}</span>
                    <span className="ml-1 text-xs">🎉</span>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="credit-slider" className="block text-sm font-medium text-gray-300 mb-2">
                  Select credits
                </label>
                <Slider
                  id="credit-slider"
                  min={500}
                  max={50000}
                  step={500}
                  value={[credits]}
                  onValueChange={(value) => setCredits(value[0])}
                  className="mb-4"
                />
                <div className="flex justify-between items-baseline text-sm sm:text-base">
                  <div className="font-semibold text-white">€{pricing.totalPrice.toFixed(2)}</div>
                  <div className="text-gray-400">€{pricing.pricePerCredit.toFixed(2)}/credit</div>
                </div>
              </div>

              <div className="mb-6 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2 text-blue-400" />
                    <span className="text-gray-300">AI Review Responses</span>
                  </div>
                  <span className="font-semibold text-white">{pricing.reviewResponses}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <BarChart className="w-4 h-4 mr-2 text-blue-400" />
                    <span className="text-gray-300">Analyses</span>
                  </div>
                  <span className="font-semibold text-white">{pricing.analyses}</span>
                </div>
              </div>

              <AuroraButton className="w-full rounded-lg px-5 py-3 transition-transform duration-200 hover:scale-105">
                <span className="text-lg font-bold px-3 py-1.5 inline-flex items-center justify-center">
                  Try for free
                </span>
              </AuroraButton>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Credit Usage Guide</h3>
              <ul className="space-y-4 text-sm sm:text-base">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Generate AI Review Response</p>
                    <p className="text-gray-400 text-sm">Craft a personalized reply to a customer review</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">10</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Perform Analysis</p>
                    <p className="text-gray-400 text-sm">Get insights on your reviews and performance</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Edit AI Response or Ask Question</p>
                    <p className="text-gray-400 text-sm">Refine an AI response or get clarification on analysis</p>
                  </div>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-blue-900/30 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">Bulk Savings</h4>
                <p className="text-sm text-gray-300 mb-2">Save more when you buy in bulk:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-300">500-9,999 credits:</span>
                    <span className="text-green-400 font-semibold animate-pulse">50% off</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-300">10,000+ credits:</span>
                    <span className="text-green-400 font-semibold animate-pulse">67% off</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default PricingComponent


"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"

type PricingSliderProps = {
  onPriceChange: (price: number) => void
}

const PricingSlider: React.FC<PricingSliderProps> = ({ onPriceChange }) => {
  const [reviews, setReviews] = useState(25)
  const [analyses, setAnalyses] = useState(1)

  const calculatePrice = (reviews: number, analyses: number) => {
    // Base price: $1 per review, $10 per analysis
    let price = reviews + analyses * 10

    // Apply discounts for higher volumes
    if (reviews > 1000) price *= 0.9
    if (reviews > 2000) price *= 0.8

    return Math.round(price)
  }

  useEffect(() => {
    const price = calculatePrice(reviews, analyses)
    onPriceChange(price)
  }, [reviews, analyses, onPriceChange])

  return (
    <div className="space-y-8">
      <div>
        <label htmlFor="reviews" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Monthly Reviews: {reviews}
        </label>
        <Slider
          id="reviews"
          min={25}
          max={2500}
          step={25}
          value={[reviews]}
          onValueChange={(value) => setReviews(value[0])}
        />
      </div>
      <div>
        <label htmlFor="analyses" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Monthly Analyses: {analyses}
        </label>
        <Slider
          id="analyses"
          min={1}
          max={50}
          step={1}
          value={[analyses]}
          onValueChange={(value) => setAnalyses(value[0])}
        />
      </div>
    </div>
  )
}

export default PricingSlider


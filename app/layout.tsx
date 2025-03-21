import "./globals.css"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import type React from "react"

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "StreamLine - Simplify Your Workflow",
  description:
    "StreamLine is a powerful SaaS platform that helps you streamline your business processes and boost productivity.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${manrope.variable}`}>
      <body className="bg-black text-white min-h-screen font-sans">{children}</body>
    </html>
  )
}



import './globals.css'
"use client"

import Layout from "./components/Layout"
import Header from "./components/Header"
import { Hero } from "@/components/ui/animated-hero"
import Features from "./components/Features"
import Pricing from "./components/Pricing"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

export default function HomeClient() {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen w-full">
        <Header />
        <main className="flex-grow w-full">
          <Hero
            title={<span className="text-white font-semibold tracking-tighter">Manage your hotel reputation</span>}
            description={
              <>
                <strong>Respond to reviews instantly</strong>, <em>analyze guest feedback</em>, offer{" "}
                <strong>24/7 support</strong> and <em>collect positive reviews</em> —all with the power of AI.
              </>
            }
            buttonText="Try for free"
            href="/signup"
            demoHref="/demo"
          />
          <Features />
          <Pricing />
          <CTA />
        </main>
        <Footer />
      </div>
    </Layout>
  )
}


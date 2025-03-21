"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0 py-2">
            <Link href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-replai-rH6dlkgpJiikSzfAQvY6O8WGHny7V6.svg"
                alt="Replai Logo"
                width={112}
                height={34}
                className="h-6 sm:h-8 w-auto"
                priority
              />
            </Link>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button
              variant="ghost"
              className="text-white hover:text-white hover:bg-white/10 hidden sm:inline-flex text-sm lg:text-base"
            >
              Login
            </Button>
            <Button className="bg-[#3085ff] text-white hover:bg-[#2a75e6] transition-colors hidden sm:inline-flex text-base lg:text-lg font-bold px-4 py-2">
              <Phone className="w-5 h-5 mr-2" />
              Book a call
            </Button>
            <Button
              variant="ghost"
              className="text-gray-200 hover:text-white hover:bg-white/10 sm:hidden p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 sm:hidden">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-gray-900 shadow-xl p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">Menu</h2>
              <button className="text-gray-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              <Button variant="ghost" className="w-full justify-start">
                Login
              </Button>
              <Button className="w-full justify-start bg-[#3085ff] hover:bg-[#2a75e6] font-bold text-base py-2.5">
                <Phone className="w-5 h-5 mr-2" />
                Book a call
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}


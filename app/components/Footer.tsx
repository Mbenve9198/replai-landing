import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#smart-replies" className="text-gray-300 hover:text-white text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing-section" className="text-gray-300 hover:text-white text-sm">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white text-sm">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; 2025 ReplAI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="https://www.facebook.com/profile.php?id=61572881335238&locale=it_IT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


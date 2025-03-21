import type React from "react"
import { RetroGrid } from "@/components/ui/retro-grid"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-black w-full overflow-x-hidden">
      <RetroGrid className="fixed inset-0" />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  )
}


import { cn } from "@/lib/utils"
import type React from "react"

export const LampContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn("relative flex items-center justify-center h-full w-full")}>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-500 opacity-20 blur-xl" />
      {children}
    </div>
  )
}


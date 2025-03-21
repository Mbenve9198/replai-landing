import type * as React from "react"
import { cn } from "@/lib/utils"

export interface ChatMessageListProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ChatMessageList({ className, children, ...props }: ChatMessageListProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)} {...props}>
      {children}
    </div>
  )
}


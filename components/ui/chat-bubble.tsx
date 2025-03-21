import * as React from "react"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export interface ChatBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "sent" | "received"
}

export interface ChatBubbleMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "sent" | "received"
  isLoading?: boolean
}

export interface ChatBubbleAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  fallback: string
}

const ChatBubble = React.forwardRef<HTMLDivElement, ChatBubbleProps>(
  ({ className, variant = "received", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-start gap-2", variant === "sent" && "flex-row-reverse", className)}
        {...props}
      >
        {children}
      </div>
    )
  },
)
ChatBubble.displayName = "ChatBubble"

const ChatBubbleMessage = React.forwardRef<HTMLDivElement, ChatBubbleMessageProps>(
  ({ className, variant = "received", isLoading, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg px-3 py-2 max-w-[85%] text-sm",
          variant === "received"
            ? "bg-muted text-muted-foreground ml-0 mr-auto"
            : "bg-primary text-primary-foreground ml-auto mr-0",
          className,
        )}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Generating response...</span>
          </div>
        ) : (
          children
        )}
      </div>
    )
  },
)
ChatBubbleMessage.displayName = "ChatBubbleMessage"

const ChatBubbleAvatar = React.forwardRef<HTMLDivElement, ChatBubbleAvatarProps>(
  ({ className, src, fallback, ...props }, ref) => {
    return (
      <div ref={ref} className={className} {...props}>
        <Avatar className="h-8 w-8">
          <AvatarImage src={src} />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
      </div>
    )
  },
)
ChatBubbleAvatar.displayName = "ChatBubbleAvatar"

export { ChatBubble, ChatBubbleMessage, ChatBubbleAvatar }


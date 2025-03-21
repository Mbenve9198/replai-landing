import * as React from "react"
import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea"

export interface ChatInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const ChatInput = React.forwardRef<HTMLTextAreaElement, ChatInputProps>(({ className, ...props }, ref) => {
  return (
    <Textarea
      ref={ref}
      className={cn(
        "min-h-[44px] w-full resize-none border rounded-lg px-4 py-3 focus-visible:ring-1 focus-visible:ring-offset-0",
        className,
      )}
      rows={1}
      {...props}
    />
  )
})
ChatInput.displayName = "ChatInput"

export { ChatInput }


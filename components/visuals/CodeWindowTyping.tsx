"use client"

import React, { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  codeString: string
  speed?: number
}

export function CodeWindowTyping({
  codeString,
  speed = 30,
  className,
  ...props
}: Props) {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i <= codeString.length) {
        setDisplayedText(codeString.substring(0, i))
        i++
      } else {
        setIsTyping(false)
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [codeString, speed])

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-lg border border-border/50 bg-[#0d1117] shadow-xl",
        className
      )}
      {...props}
    >
      <div className="flex items-center border-b border-white/10 bg-[#161b22] px-4 py-3">
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <div className="ml-4 font-mono text-xs text-slate-400">
          procedure_log.txt
        </div>
      </div>
      <div className="overflow-x-auto p-4 font-mono text-sm leading-relaxed whitespace-pre-wrap text-slate-300">
        {displayedText}
        <span
          className={cn(
            "ml-1 inline-block h-4 w-2 bg-primary align-middle",
            isTyping
              ? "animate-pulse"
              : "animate-[pulse_2s_ease-in-out_infinite]"
          )}
        />
      </div>
    </div>
  )
}

"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface AnimatedTitleProps {
  children: ReactNode
  className?: string
  delay?: number
  tag?: "h1" | "h2" | "h3" | "h4"
}

export function AnimatedTitle({ children, className = "", delay = 0, tag = "h2" }: AnimatedTitleProps) {
  const Tag = tag

  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0],
        }}
      >
        <Tag className={className}>{children}</Tag>
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-primary"
        initial={{ width: 0 }}
        whileInView={{ width: "100px" }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          delay: delay + 0.3,
          ease: [0.25, 0.1, 0.25, 1.0],
        }}
      />
    </div>
  )
}


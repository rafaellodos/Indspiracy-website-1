"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Button, type ButtonProps } from "@/components/ui/button"
import { type VariantProps } from "class-variance-authority"
import { buttonVariants } from "@/components/ui/button"

interface AnimatedButtonProps extends ButtonProps, VariantProps<typeof buttonVariants> {
  children: ReactNode
  className?: string
}

export function AnimatedButton({ children, className = "", ...props }: AnimatedButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
      <Button className={className} {...props}>
        {children}
      </Button>
    </motion.div>
  )
}


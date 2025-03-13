"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface AnimatedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
}

export function AnimatedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  priority = false,
}: AnimatedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      className={`relative overflow-hidden ${fill ? "h-full w-full" : ""} ${className}`}
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{
        opacity: isLoaded ? 1 : 0,
        scale: isLoaded ? 1 : 1.05,
      }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        fill={fill}
        className={`object-cover ${className}`}
        onLoadingComplete={() => setIsLoaded(true)}
        priority={priority}
      />
    </motion.div>
  )
}


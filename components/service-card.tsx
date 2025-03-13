"use client"

import type { LucideIcon } from "lucide-react"
import { Palette, Share2, Globe, Camera } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  delay?: number
}

export function ServiceCard({ title, description, icon, delay = 0 }: ServiceCardProps) {
  const IconComponent = getIcon(icon)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 + 0.3 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
        <CardHeader className="p-6">
          <motion.div
            className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay * 0.1 + 0.5 }}
          >
            <IconComponent className="h-6 w-6 text-primary" />
          </motion.div>
          <h3 className="text-xl font-bold">{title}</h3>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function getIcon(name: string): LucideIcon {
  switch (name) {
    case "Palette":
      return Palette
    case "Share2":
      return Share2
    case "Globe":
      return Globe
    case "Camera":
      return Camera
    default:
      return Palette
  }
}


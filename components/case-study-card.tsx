"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface CaseStudyCardProps {
  title: string
  category: string
  imageSrc: string
  delay?: number
}

export function CaseStudyCard({ title, category, imageSrc, delay = 0 }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 + 0.3 }}
    >
      <Link href="/work/case-study">
        <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="h-6 w-6" />
            </motion.div>
          </div>
          <CardContent className="p-6">
            <p className="mb-2 text-sm font-medium text-muted-foreground">{category}</p>
            <h3 className="text-xl font-bold">{title}</h3>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}


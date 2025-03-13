"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Navigation } from "@/components/navigation"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300 ${
        scrolled ? "bg-background/90 py-2" : "bg-background/70 py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex h-full w-full items-center justify-between px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tighter">INSPIRACY</span>
            <span className="text-xs font-light tracking-widest">BRANDING LABS</span>
          </Link>
        </motion.div>
        <div className="flex flex-1 items-center justify-end gap-6">
          <Navigation />
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex-shrink-0"
          >
            <ThemeToggle />
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}


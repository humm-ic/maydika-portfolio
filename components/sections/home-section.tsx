"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Typed from "typed.js"
import { ArrowDown, Instagram, Linkedin, Dribbble } from "lucide-react"
import { Button } from "@/components/ui/button"

export const HomeSection = () => {
  const typedRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!typedRef.current) return

    const typed = new Typed(typedRef.current, {
      strings: ["UI/UX Designer", "Graphic Designer"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/maydika-aslam-86009a295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Instagram",
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/mynameis.may?igsh=eXpqcGd2MzhrNjE5",
    },
    {
      name: "Dribbble",
      icon: <Dribbble size={20} />,
      href: "https://dribbble.com/maydika-asslam",
    },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center scroll-section pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            Maydika Aslam
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl font-medium mb-6 h-10"
          >
            <span ref={typedRef}></span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
          >
            Design is my way of speaking. I create visuals that are fun, bold, and meaningful
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button asChild size="lg">
              <Link href="#portfolio">View Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex gap-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <Link href="#about" aria-label="Scroll to About section">
              <ArrowDown className="text-primary" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

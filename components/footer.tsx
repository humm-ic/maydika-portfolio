"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Linkedin, Dribbble, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

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
    {
      name: "Email",
      icon: <Mail size={20} />,
      href: "mailto:maydika.asslam@example.com",
    },
  ]

  return (
    <footer className="bg-background/50 backdrop-blur-md border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="text-2xl font-bold gradient-text">
              Maydika
            </Link>
            <p className="mt-4 text-muted-foreground">
              Design is my way of speaking. I create visuals that are fun, bold, and meaningful.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:text-center"
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                Portfolio
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:text-right"
          >
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex gap-4 md:justify-end">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground"
        >
          &copy; {currentYear} Maydika Asslam. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

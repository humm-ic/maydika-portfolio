"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FileDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const AboutSection = () => {
  const stats = [
    {
      title: "Total Projects",
      value: "50+",
      href: "#portfolio",
    },
    {
      title: "Certificates",
      value: "12",
      href: "#portfolio",
    },
    {
      title: "Experience",
      value: "5+",
      href: "#portfolio",
    },
  ]

  return (
    <section id="about" className="py-20 scroll-section min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg text-muted-foreground mb-2">Hello, I'm</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6"> Mohammed Maydika Aslam</h2>
            <p className="text-lg mb-6">
              Welcome to my portfolio I'm a visual designer who focuses on creating clean, functional, and meaningful designs. My work includes branding, posters, UI layouts, and social media content all crafted with attention to detail and a love for clear visual communication.
            </p>
            <p className="text-lg mb-8">
              I use tools like Figma, Illustrator, and Photoshop to bring ideas to life and explore different creative directions. For me, good design isn't just about appearance it's about purpose, clarity, and the experience it delivers.
              Every project here reflects my growth, curiosity, and passion for design. Thanks for visiting, and feel free to reach out for collaborations, feedback, or just to connect.

            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button asChild>
                <a
                  href="https://drive.google.com/file/d/example/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <FileDown size={16} />
                  <span>Download CV</span>
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="#portfolio">See Projects</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <Link key={stat.title} href={stat.href}>
                  <Card className="card-hover">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.4 + index * 0.1,
                        }}
                        viewport={{ once: true }}
                      >
                        <h3 className="text-4xl font-bold mb-2 gradient-text">{stat.value}</h3>
                        <p className="text-muted-foreground">{stat.title}</p>
                      </motion.div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </motion.div>

                    <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-6"></div>
              <div className="absolute inset-0 overflow-hidden rounded-l">
                <Image
                  src="https://i.pinimg.com/736x/83/d2/22/83d222c597f68868513962ad637fb787.jpg"
                  alt="Maydika Asslam"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              ></motion.div>
              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/10 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              ></motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

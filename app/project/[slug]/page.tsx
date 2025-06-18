"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"

export default function ProjectDetail() {
  const { slug } = useParams()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulasi loading data
    const timer = setTimeout(() => {
      const foundProject = projects.find((p) => p.slug === slug)
      setProject(foundProject)
      setLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-12 w-48 bg-muted rounded-md"></div>
          <div className="h-64 w-full max-w-3xl bg-muted rounded-lg"></div>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Project tidak ditemukan</h1>
        <Link href="/#portfolio">
          <Button>Kembali ke Portfolio</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Kembali ke Portfolio</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative aspect-video overflow-hidden rounded-xl"
            >
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </motion.div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery?.map((img: string, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                  className="relative aspect-video overflow-hidden rounded-lg"
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${project.title} gallery ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl font-bold mb-4"
            >
              {project.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="prose dark:prose-invert mb-6"
            >
              <p className="text-lg">{project.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mb-8"
            >
              <h3 className="text-lg font-medium mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech: string, idx: number) => (
                  <span key={idx} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              {project.liveUrl && (
                <Button asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </Button>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

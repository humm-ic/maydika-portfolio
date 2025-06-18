"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { projects, certificates, techStack, gallery } from "@/data/projects"

export const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("projects")

  return (
    <section id="portfolio" className="py-20 scroll-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <Tabs defaultValue="projects" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-xl">
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="certificates">Certificates</TabsTrigger>
              <TabsTrigger value="tech">Tech Stack</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="projects">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="overflow-hidden h-full card-hover">
                      <div className="relative aspect-video">
                        <Image
                          src={project.image || "/"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                        <div className="flex gap-3">
                          <Button asChild size="sm">
                            <Link href={`/project/${project.slug}`}>View Details</Link>
                          </Button>
                          {project.liveUrl && (
                            <Button asChild variant="outline" size="sm">
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1"
                              >
                                <ExternalLink size={14} />
                                <span>Live Demo</span>
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </TabsContent>

          <TabsContent value="certificates">
            <div className="relative">
              <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
                <div className="flex gap-6">
                  {certificates.map((certificate, index) => (
                    <motion.div
                      key={certificate.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="min-w-[300px] md:min-w-[400px] snap-center"
                    >
                      <Card className="overflow-hidden card-hover">
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={certificate.image || "/placeholder.svg"}
                            alt={certificate.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-medium">{certificate.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {certificate.issuer} • {certificate.date}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-full bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-full bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
            </div>
          </TabsContent>

          <TabsContent value="tech">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full card-hover">
                    <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 mb-4 flex items-center justify-center">
                        <Image
                          src={tech.icon || "/placeholder.svg"}
                          alt={tech.name}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="font-medium">{tech.name}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="gallery">
            <div className="gallery-grid">
              {gallery.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`relative overflow-hidden rounded-lg ${
                    item.size === "wide"
                      ? "gallery-item-wide"
                      : item.size === "tall"
                        ? "gallery-item-tall"
                        : item.size === "large"
                          ? "gallery-item-large"
                          : ""
                  }`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <h3 className="text-white font-medium">{item.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

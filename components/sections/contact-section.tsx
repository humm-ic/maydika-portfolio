"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Instagram, Linkedin, Dribbble, Youtube, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [commentData, setCommentData] = useState({
    name: "",
    comment: "",
  })

  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Ahmad Fauzi",
      comment: "Desain yang sangat menginspirasi! Saya suka gaya visual Anda.",
      date: "2 hari yang lalu",
    },
    {
      id: 2,
      name: "Siti Rahayu",
      comment: "Terima kasih atas kolaborasi yang luar biasa. Hasil kerjanya memuaskan.",
      date: "1 minggu yang lalu",
    },
  ])

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCommentData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulasi pengiriman pesan
    toast({
      title: "Pesan Terkirim.",
      description: "Terima kasih telah menghubungi saya. Akan segera dibalas.",
    })
    setFormData({ name: "", email: "", message: "" })
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (commentData.name && commentData.comment) {
      const newComment = {
        id: comments.length + 1,
        name: commentData.name,
        comment: commentData.comment,
        date: "Baru saja",
      }
      setComments([newComment, ...comments])
      setCommentData({ name: "", comment: "" })
      toast({
        title: "Komentar Ditambahkan!",
        description: "Terima kasih atas feedback Anda.",
      })
    }
  }

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      href: "https://linkedin.com/in/maydika-asslam",
      color: "bg-[#0077B5] hover:bg-[#0077B5]/80",
    },
    {
      name: "Instagram",
      icon: <Instagram size={24} />,
      href: "https://instagram.com/maydika.asslam",
      color: "bg-[#E4405F] hover:bg-[#E4405F]/80",
    },
    {
      name: "Dribbble",
      icon: <Dribbble size={24} />,
      href: "https://dribbble.com/maydika-asslam",
      color: "bg-[#EA4C89] hover:bg-[#EA4C89]/80",
    },
    {
      name: "YouTube",
      icon: <Youtube size={24} />,
      href: "https://youtube.com/@maydika-asslam",
      color: "bg-[#FF0000] hover:bg-[#FF0000]/80",
    },
  ]

  return (
    <section id="contact" className="py-20 scroll-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Kirim Pesan */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Kirim Pesan</h3>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Nama Lengkap"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Pesan Anda"
                      rows={5}
                      value={formData.message}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send size={16} className="mr-2" />
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Kolom Komentar */}
            <Card className="mt-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Komentar</h3>
                <form onSubmit={handleCommentSubmit} className="space-y-4 mb-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Nama"
                      value={commentData.name}
                      onChange={handleCommentChange}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="comment"
                      placeholder="Komentar Anda"
                      rows={3}
                      value={commentData.comment}
                      onChange={handleCommentChange}
                      required
                    />
                  </div>
                  <Button type="submit" size="sm">
                    Kirim Komentar
                  </Button>
                </form>

                <div className="space-y-4 max-h-64 overflow-y-auto">
                  {comments.map((comment) => (
                    <div key={comment.id} className="p-4 bg-secondary rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{comment.name}</h4>
                        <span className="text-xs text-muted-foreground">{comment.date}</span>
                      </div>
                      <p className="text-sm">{comment.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${link.color} text-white p-6 rounded-lg flex items-center gap-4 transition-all duration-300 hover:scale-105`}
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.4 + index * 0.1,
                      }}
                      viewport={{ once: true }}
                    >
                      {link.icon}
                      <span className="font-medium">{link.name}</span>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-secondary rounded-lg">
                  <h4 className="font-medium mb-2">Email Langsung</h4>
                  <p className="text-muted-foreground">maydika.asslam@gmail.com</p>
                </div>

                <div className="mt-6 p-6 bg-secondary rounded-lg">
                  <h4 className="font-medium mb-2">Lokasi</h4>
                  <p className="text-muted-foreground">Padang, Indonesia</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

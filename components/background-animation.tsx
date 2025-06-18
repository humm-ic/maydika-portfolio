"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create gradient circles
    const circles = [
      {
        x: canvas.width * 0.2,
        y: canvas.height * 0.3,
        radius: canvas.width * 0.3,
        color: { r: 255, g: 100, b: 100, a: 0.15 }, // Red
        vx: 0.2,
        vy: 0.1,
      },
      {
        x: canvas.width * 0.7,
        y: canvas.height * 0.5,
        radius: canvas.width * 0.25,
        color: { r: 100, g: 100, b: 255, a: 0.15 }, // Blue
        vx: -0.15,
        vy: 0.2,
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.7,
        radius: canvas.width * 0.35,
        color: { r: 150, g: 100, b: 200, a: 0.15 }, // Purple
        vx: 0.1,
        vy: -0.1,
      },
    ]

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update circles
      circles.forEach((circle) => {
        // Update position
        circle.x += circle.vx
        circle.y += circle.vy

        // Bounce off edges
        if (circle.x - circle.radius < 0 || circle.x + circle.radius > canvas.width) {
          circle.vx *= -1
        }
        if (circle.y - circle.radius < 0 || circle.y + circle.radius > canvas.height) {
          circle.vy *= -1
        }

        // Draw gradient circle
        const gradient = ctx.createRadialGradient(circle.x, circle.y, 0, circle.x, circle.y, circle.radius)
        gradient.addColorStop(0, `rgba(${circle.color.r}, ${circle.color.g}, ${circle.color.b}, ${circle.color.a})`)
        gradient.addColorStop(1, `rgba(${circle.color.r}, ${circle.color.g}, ${circle.color.b}, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}

export default BackgroundAnimation

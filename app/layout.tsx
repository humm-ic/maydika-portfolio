import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import AnimatedCursor from "@/components/animated-cursor"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BackgroundAnimation from "@/components/background-animation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Maydika Asslam | UI/UX Designer | Graphic Designer",
  description: "Portfolio profesional Maydika Asslam, seorang UI/UX Designer dan Graphic Designer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AnimatedCursor />
          <BackgroundAnimation />
          <div className="relative z-10">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

import { HomeSection } from "@/components/sections/home-section"
import { AboutSection } from "@/components/sections/about-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  )
}

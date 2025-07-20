import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import ProfessionalStats from "@/components/professional-stats"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Testimonials from "@/components/testimonials"
import Certifications from "@/components/certifications"
import Achievements from "@/components/achievements"
import MetricsDashboard from "@/components/metrics-dashboard"
import AIProjectRecommender from "@/components/ai-project-recommender"
import PerformanceMetrics from "@/components/performance-metrics"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import MobilePortfolioCarousel from "@/components/mobile-portfolio-carousel"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        
        {/* Mobile Portfolio Carousel - Only shows on mobile */}
        <MobilePortfolioCarousel />
        
        {/* Desktop Sections - Hidden on mobile when carousel is active */}
        <div className="md:block hidden">
          <About />
          <ProfessionalStats />
          <Projects />
          <Skills />
          <Testimonials />
          <Certifications />
          <Achievements />
          <MetricsDashboard />
          <AIProjectRecommender />
          <PerformanceMetrics />
        </div>
        
        {/* Contact and Footer - Always visible */}
        <Contact />
        <Footer />
      </main>
    </>
  )
}

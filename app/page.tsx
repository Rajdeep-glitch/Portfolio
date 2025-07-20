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

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
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
        <Contact />
        <Footer />
      </main>
    </>
  )
}

import Hero from "@/components/hero"
import About from "@/components/about"
import Timeline from "@/components/timeline"
import Projects from "@/components/projects"
import MetricsDashboard from "@/components/metrics-dashboard"
import Skills from "@/components/skills"
import Testimonials from "@/components/testimonials"
import Certifications from "@/components/certifications"
import VideoIntro from "@/components/video-intro"
import BlogPreview from "@/components/blog-preview"
import Contact from "@/components/contact"
import PerformanceMetrics from "@/components/performance-metrics"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <MetricsDashboard />
      <Skills />
      <VideoIntro />
      <Testimonials />
      <Certifications />
      <PerformanceMetrics />
      <Contact />
      <Footer />
    </main>
  )
}

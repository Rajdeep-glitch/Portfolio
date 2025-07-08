import Hero from "@/components/hero"
import Timeline from "@/components/timeline"
import Projects from "@/components/projects"
import MetricsDashboard from "@/components/metrics-dashboard"
import Skills from "@/components/skills"
import BlogPreview from "@/components/blog-preview"
import Contact from "@/components/contact"
import PerformanceMetrics from "@/components/performance-metrics"
import Footer from "@/components/footer"
import AISkillAnalyzer from "@/components/ai-skill-analyzer"
import AIProjectRecommender from "@/components/ai-project-recommender"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Timeline />
      <Projects />
      <MetricsDashboard />
      <Skills />
      <AISkillAnalyzer />
      <AIProjectRecommender />
      <PerformanceMetrics />
      <Contact />
      <Footer />
    </main>
  )
}

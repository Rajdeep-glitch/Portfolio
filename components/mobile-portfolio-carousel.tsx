"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useIsMobile } from "@/hooks/use-mobile"
import { 
  ChevronLeft, 
  ChevronRight, 
  Trophy, 
  Award, 
  Star, 
  Code2, 
  Database, 
  Globe, 
  Layout, 
  Server, 
  GitBranch, 
  Brain, 
  Sparkles,
  ExternalLink,
  Github,
  Quote,
  Zap,
  Target,
  Users,
  Building
} from "lucide-react"
import Image from "next/image"

// Portfolio sections data
const portfolioSections = [
  {
    id: "experience",
    title: "Experience Highlights",
    icon: <Trophy className="h-6 w-6" />,
    gradient: "from-purple-500 to-blue-500",
    content: {
      highlights: [
        {
          title: "Web Development Intern",
          company: "Haridevpur NIRVRITI Foundation",
          duration: "6 months",
          description: "Led complete website development from scratch, enhancing community engagement",
          achievements: [
            "Received 2 outstanding recommendation letters",
            "Transformed NGO vision into modern platform",
            "Enhanced volunteer and donor engagement",
            "Full-stack development with modern tech"
          ]
        },
        {
          title: "Full-Stack Developer",
          company: "Personal Projects",
          duration: "Ongoing",
          description: "Developing innovative web and ML applications",
          achievements: [
            "Built ML-powered chatbot with NLP",
            "Created house price prediction system",
            "Developed hotel management system",
            "Agricultural technology solutions"
          ]
        }
      ]
    }
  },
  {
    id: "projects",
    title: "Featured Projects",
    icon: <Code2 className="h-6 w-6" />,
    gradient: "from-blue-500 to-cyan-500",
    content: {
      projects: [
        {
          name: "ML Chatbot",
          description: "AI-powered conversational bot with NLP capabilities",
          tech: ["Python", "Machine Learning", "NLP", "Google Colab"],
          highlights: ["Intelligent conversation flow", "Real-time responses", "ML model integration"]
        },
        {
          name: "House Price Predictor",
          description: "ML model for accurate real estate price prediction",
          tech: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
          highlights: ["Linear regression model", "Interactive web app", "Real-time predictions"]
        },
        {
          name: "NGO Website",
          description: "Complete website for community foundation",
          tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
          highlights: ["Responsive design", "Community engagement", "Modern UI/UX"]
        },
        {
          name: "Hotel Management System",
          description: "Comprehensive booking and management platform",
          tech: ["JavaScript", "Node.js", "MongoDB", "Express"],
          highlights: ["Booking system", "Admin dashboard", "Payment integration"]
        }
      ]
    }
  },
  {
    id: "skills",
    title: "Skills & Technologies",
    icon: <Brain className="h-6 w-6" />,
    gradient: "from-cyan-500 to-green-500",
    content: {
      categories: [
        {
          name: "Frontend",
          icon: <Layout className="h-5 w-5" />,
          skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
          level: 90
        },
        {
          name: "Backend",
          icon: <Server className="h-5 w-5" />,
          skills: ["Node.js", "Express.js", "RESTful APIs", "Authentication"],
          level: 85
        },
        {
          name: "Machine Learning",
          icon: <Brain className="h-5 w-5" />,
          skills: ["Python", "Scikit-learn", "Pandas", "NumPy", "NLP"],
          level: 80
        },
        {
          name: "Database",
          icon: <Database className="h-5 w-5" />,
          skills: ["MongoDB", "MySQL", "SQLite", "Database Design"],
          level: 85
        },
        {
          name: "Tools",
          icon: <GitBranch className="h-5 w-5" />,
          skills: ["Git", "GitHub", "VS Code", "Google Colab", "Postman"],
          level: 90
        }
      ]
    }
  },
  {
    id: "recommendations",
    title: "Recommendations & Impact",
    icon: <Quote className="h-6 w-6" />,
    gradient: "from-green-500 to-yellow-500",
    content: {
      testimonials: [
        {
          author: "President",
          company: "Haridevpur NIRVRITI Foundation",
          role: "NGO Leadership",
          content: "Exceptional technical skills and dedication. Single-handedly developed our complete website, significantly enhancing community engagement.",
          rating: 5,
          badge: "Letter of Recommendation"
        },
        {
          author: "Sr. Manager",
          company: "Schneider Electric",
          role: "External Partner",
          content: "Technical expertise combined with community understanding. Initiative and problem-solving skills stood out throughout the project.",
          rating: 5,
          badge: "Letter of Recommendation"
        }
      ],
      impact: [
        { metric: "Community Engagement", value: "+150%", description: "Increased volunteer participation" },
        { metric: "Digital Presence", value: "+200%", description: "Enhanced online visibility" },
        { metric: "Donor Outreach", value: "+120%", description: "Improved fundraising efficiency" }
      ]
    }
  },
  {
    id: "achievements",
    title: "Achievements & Recognition",
    icon: <Award className="h-6 w-6" />,
    gradient: "from-yellow-500 to-orange-500",
    content: {
      achievements: [
        {
          title: "NGO Internship Recognition",
          description: "Outstanding recommendation letters from NGO President and Schneider Electric Sr. Manager",
          category: "Professional Recognition",
          year: "2025",
          highlights: ["Leadership recognition", "Technical depth appreciation", "Problem-solving excellence"]
        },
        {
          title: "Complete Website Development",
          description: "Led full-stack development of NGO website from conception to deployment",
          category: "Project Leadership",
          year: "2025",
          highlights: ["Modern responsive design", "Community impact", "Real-world application"]
        },
        {
          title: "ML Project Excellence",
          description: "Successfully developed multiple machine learning applications",
          category: "Technical Achievement",
          year: "2024",
          highlights: ["NLP chatbot", "Price prediction model", "Interactive applications"]
        }
      ]
    }
  },
  {
    id: "performance",
    title: "Performance & Accessibility",
    icon: <Zap className="h-6 w-6" />,
    gradient: "from-orange-500 to-red-500",
    content: {
      lighthouse: {
        performance: 98,
        accessibility: 100,
        bestPractices: 95,
        seo: 100
      },
      metrics: [
        { name: "First Contentful Paint", value: "0.8s", status: "excellent" },
        { name: "Largest Contentful Paint", value: "1.2s", status: "good" },
        { name: "Cumulative Layout Shift", value: "0.01", status: "excellent" },
        { name: "Time to Interactive", value: "1.5s", status: "good" }
      ],
      accessibility: [
        { feature: "WCAG Compliance", level: "AAA" },
        { feature: "Keyboard Navigation", level: "Full Support" },
        { feature: "Screen Readers", level: "Optimized" },
        { feature: "Color Contrast", level: "Enhanced" }
      ]
    }
  }
]

export default function MobilePortfolioCarousel() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const isMobile = useIsMobile()

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || !isMobile) return

    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % portfolioSections.length)
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, isMobile])

  // Touch gesture handling
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSection()
    } else if (isRightSwipe) {
      prevSection()
    }
  }

  // Don't render on desktop
  if (!isMobile) return null

  const nextSection = () => {
    setCurrentSection((prev) => (prev + 1) % portfolioSections.length)
    setIsAutoPlaying(false)
  }

  const prevSection = () => {
    setCurrentSection((prev) => (prev - 1 + portfolioSections.length) % portfolioSections.length)
    setIsAutoPlaying(false)
  }

  const goToSection = (index: number) => {
    setCurrentSection(index)
    setIsAutoPlaying(false)
  }

  const currentData = portfolioSections[currentSection]

  return (
    <div 
      className="relative w-full min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(119, 198, 255, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col h-screen">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm border-b"
        >
          <div className="flex items-center space-x-3">
            <motion.div
              className={`p-2 rounded-full bg-gradient-to-r ${currentData.gradient}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {currentData.icon}
            </motion.div>
            <div>
              <h2 className="font-bold text-lg">{currentData.title}</h2>
              <p className="text-xs text-muted-foreground">
                {currentSection + 1} of {portfolioSections.length}
              </p>
            </div>
          </div>
          
          {/* Auto-play toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-xs"
          >
            {isAutoPlaying ? "Pause" : "Play"}
          </Button>
        </motion.div>

        {/* Content Area */}
        <div className="flex-1 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, x: 300, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -300, scale: 0.95 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                opacity: { duration: 0.3 },
                scale: { duration: 0.4 }
              }}
              className="absolute inset-0 p-4 overflow-y-auto scrollbar-hide mobile-carousel-content"
            >
              {renderSectionContent(currentData)}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="p-4 bg-background/80 backdrop-blur-sm border-t">
          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mb-4">
            {portfolioSections.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSection(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSection 
                    ? 'w-8 bg-gradient-to-r ' + currentData.gradient
                    : 'w-2 bg-muted-foreground/30'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSection}
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </Button>

            <div className="text-center">
              <p className="text-sm font-medium">{currentData.title}</p>
              <div className="w-full bg-muted-foreground/20 rounded-full h-1 mt-1">
                <motion.div
                  className={`h-1 rounded-full bg-gradient-to-r ${currentData.gradient}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentSection + 1) / portfolioSections.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextSection}
              className="flex items-center space-x-2"
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper function to render section content
function renderSectionContent(section: typeof portfolioSections[0]) {
  switch (section.id) {
    case "experience":
      return (
        <div className="space-y-4">
          {section.content.highlights?.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{exp.title}</CardTitle>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{exp.company}</span>
                    <Badge variant="secondary">{exp.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-3">{exp.description}</p>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <Star className="h-3 w-3 text-yellow-500 flex-shrink-0" />
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )

    case "projects":
      return (
        <div className="space-y-4">
          {section.content.projects?.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="sm">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-center space-x-2 text-xs text-muted-foreground"
                      >
                        <Target className="h-3 w-3 text-blue-500 flex-shrink-0" />
                        <span>{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )

    case "skills":
      return (
        <div className="space-y-4">
          {section.content.categories?.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20">
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{category.name}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Progress value={category.level} className="flex-1 h-2" />
                        <span className="text-sm font-medium">{category.level}%</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                      >
                        <Badge variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )

    case "recommendations":
      return (
        <div className="space-y-4">
          {/* Testimonials */}
          <div className="space-y-4">
            {section.content.testimonials?.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="relative">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{testimonial.author}</CardTitle>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {testimonial.badge}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Quote className="h-6 w-6 text-muted-foreground/30 mb-2" />
                    <p className="text-sm italic">{testimonial.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Impact Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Impact Metrics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  {section.content.impact?.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center justify-between p-3 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg"
                    >
                      <div>
                        <p className="font-semibold text-lg text-green-600">{metric.value}</p>
                        <p className="text-sm font-medium">{metric.metric}</p>
                        <p className="text-xs text-muted-foreground">{metric.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )

    case "achievements":
      return (
        <div className="space-y-4">
          {section.content.achievements?.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-l-4 border-l-yellow-500">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="secondary">{achievement.category}</Badge>
                        <Badge variant="outline">{achievement.year}</Badge>
                      </div>
                    </div>
                    <Award className="h-6 w-6 text-yellow-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-3">{achievement.description}</p>
                  <div className="space-y-2">
                    {achievement.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <Trophy className="h-3 w-3 text-yellow-500 flex-shrink-0" />
                        <span>{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )

    case "performance":
      return (
        <div className="space-y-4">
          {/* Lighthouse Scores */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>Lighthouse Scores</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(section.content.lighthouse).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center p-3 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-lg"
                    >
                      <div className="text-2xl font-bold text-green-600">{value}</div>
                      <div className="text-xs capitalize text-muted-foreground">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      <Progress value={value} className="mt-2 h-1" />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Performance Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Core Web Vitals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {section.content.metrics?.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center justify-between p-2 bg-muted/30 rounded-lg"
                    >
                      <span className="text-sm font-medium">{metric.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-bold">{metric.value}</span>
                        <div className={`w-2 h-2 rounded-full ${
                          metric.status === 'excellent' ? 'bg-green-500' : 'bg-yellow-500'
                        }`} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Accessibility Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Accessibility Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {section.content.accessibility?.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center justify-between p-2 bg-blue-500/10 rounded-lg"
                    >
                      <span className="text-sm font-medium">{feature.feature}</span>
                      <Badge variant="secondary" className="text-xs">
                        {feature.level}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )

    default:
      return <div>Content not found</div>
  }
}
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Loader2, ArrowRight, Code } from "lucide-react"
import Image from "next/image"

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  topics: string[]
  language: string
  fork: boolean
  updated_at: string
  enhancedDescription?: string
  highlights?: string[]
  techStack?: string[]
}

export default function Projects() {
  const [projects, setProjects] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [imageError, setImageError] = useState<{ [name: string]: boolean }>({})

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("https://api.github.com/users/Rajdeep-glitch/repos")
        if (!response.ok) {
          throw new Error("Failed to fetch repositories")
        }
        const data = await response.json()

        // Enhanced project data with custom descriptions and highlights
        const projectEnhancements: { [key: string]: { description: string; highlights: string[]; tech: string[] } } = {
          "ml-chatbot": {
            description: "ML-Powered Chatbot built using machine learning in Google Colab. Demonstrates NLP pipeline, training models, and user interaction with advanced conversational AI capabilities.",
            highlights: [
              "Implemented NLP pipeline for intelligent conversation",
              "Built using Python and Google Colab environment", 
              "Integrated machine learning models for response generation",
              "Featured project showcasing real-world AI applications"
            ],
            tech: ["Python", "Machine Learning", "NLP", "Google Colab", "HuggingFace"]
          },
          "ml-house-price-predictor": {
            description: "House Price Prediction App – ML & Streamlit. A real-time Streamlit web app predicting house prices using linear regression. Built with Python, pandas, and scikit-learn.",
            highlights: [
              "Built with Streamlit for interactive web interface",
              "Implemented linear regression model with scikit-learn",
              "Real-time price predictions with user-friendly UI",
              "Featured project demonstrating ML in real estate"
            ],
            tech: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Linear Regression"]
          },
          "Backend_VotingApp": {
            description: "Voting App Backend API – Node & MongoDB. RESTful API backend for a voting app. Includes routes, auth, and MongoDB integration for real-world backend experience.",
            highlights: [
              "RESTful API backend for voting applications",
              "Secure authentication and authorization system",
              "MongoDB integration for data persistence",
              "Real-world backend development experience"
            ],
            tech: ["Node.js", "MongoDB", "Express", "API", "Authentication"]
          },
          "MoodMap": {
            description: "A mood tracking application that helps users monitor and analyze their emotional well-being over time.",
            highlights: [
              "Interactive mood tracking interface",
              "Data visualization for mood patterns",
              "User-friendly dashboard for insights"
            ],
            tech: ["JavaScript", "Data Visualization", "UI/UX"]
          },
          "Frontend_Bounty": {
            description: "Frontend application for a bounty/reward system with modern UI design and responsive layout.",
            highlights: [
              "Responsive design for all device sizes",
              "Modern UI with clean aesthetics",
              "Interactive user experience"
            ],
            tech: ["HTML", "CSS", "JavaScript", "Responsive Design"]
          },
          "frontend_Agriculture": {
            description: "Agricultural management frontend application designed to help farmers and agricultural businesses manage their operations.",
            highlights: [
              "Agricultural data management interface",
              "Farmer-friendly user experience",
              "Crop and resource tracking features"
            ],
            tech: ["HTML", "CSS", "JavaScript", "Agriculture Tech"]
          },
          "node_hotels": {
            description: "Hotel management system backend built with Node.js, featuring booking management and customer service capabilities.",
            highlights: [
              "Complete hotel booking system",
              "Customer management features",
              "RESTful API for hotel operations"
            ],
            tech: ["Node.js", "Express", "Database", "API"]
          }
        }

        const filteredProjects = data
          .filter((repo: Repository) => 
            !repo.fork && 
            repo.name.toLowerCase() !== "rajdeep-glitch" && 
            repo.name.toLowerCase() !== "portfolio"
          )
          .map((repo: Repository) => ({
            ...repo,
            enhancedDescription: projectEnhancements[repo.name]?.description || repo.description,
            highlights: projectEnhancements[repo.name]?.highlights || [
              "Innovative solution with modern technology stack",
              "Clean code architecture and best practices",
              "Responsive design and user-friendly interface"
            ],
            techStack: projectEnhancements[repo.name]?.tech || [repo.language].filter(Boolean)
          }))
          .sort((a: Repository, b: Repository) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
          .slice(0, 6)
        setProjects(filteredProjects)
      } catch (err) {
        setError("Failed to load projects. Please try again later.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  const handleImageError = (name: string) => {
    setImageError(prev => ({ ...prev, [name]: true }))
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4">
            Showcasing real-world applications that demonstrate my expertise in web development, machine learning, and problem-solving.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
          </div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {projects.map((project) => (
              <motion.div 
                key={project.id} 
                variants={item}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/30 hover:from-purple-50/50 hover:to-blue-50/50 dark:hover:from-purple-950/20 dark:hover:to-blue-950/20">
                  <CardHeader className="pb-3 sm:pb-4">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="line-clamp-2 text-base sm:text-lg font-bold leading-tight">
                        {project.name.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
                      </CardTitle>
                      {project.language && (
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 text-xs flex-shrink-0">
                          {project.language}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow p-4 sm:p-6">
                    <div className="h-32 sm:h-40 relative mb-3 sm:mb-4 rounded-lg overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 z-10"></div>
                      {imageError[project.name] ? (
                        <div className="w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 flex items-center justify-center">
                          <div className="text-center">
                            <Code className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-purple-500" />
                            <p className="text-xs sm:text-sm font-medium text-purple-600 dark:text-purple-400">
                              {project.name.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <Image
                          src={`/projects/${project.name}.png`}
                          alt={project.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={() => handleImageError(project.name)}
                        />
                      )}
                    </div>
                    <p className="text-xs sm:text-sm line-clamp-3 leading-relaxed">
                      {project.enhancedDescription || project.description || `A ${project.language} project named ${project.name.replace(/-/g, " ")}`}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                      {project.techStack && project.techStack.length > 0 ? (
                        project.techStack.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs px-2 py-0.5">
                            {tech}
                          </Badge>
                        ))
                      ) : (
                        project.topics &&
                        project.topics.slice(0, 2).map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-xs px-2 py-0.5">
                            {topic}
                          </Badge>
                        ))
                      )}
                    </div>
                    <div className="mt-3 sm:mt-4">
                      <h4 className="font-semibold text-xs sm:text-sm mb-1 text-purple-600">Key Features</h4>
                      <ul className="list-disc list-inside text-xs text-muted-foreground space-y-0.5 sm:space-y-1">
                        {project.highlights?.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2 p-4 sm:p-6 pt-3 sm:pt-4">
                    <Button asChild variant="outline" size="sm" className="flex-1 text-xs sm:text-sm h-8 sm:h-9">
                      <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Code
                      </a>
                    </Button>
                    {project.homepage && (
                      <Button asChild size="sm" className="flex-1 bg-purple-100 text-purple-700 border-purple-300 hover:bg-purple-200 text-xs sm:text-sm h-8 sm:h-9">
                        <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        <div className="text-center mt-10">
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <a href="https://github.com/Rajdeep-glitch" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

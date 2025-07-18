"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Loader2, ArrowRight } from "lucide-react"
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
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Check out my GitHub for more.
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={item}>
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="line-clamp-1">{project.name.replace(/-/g, " ")}</CardTitle>
                    <CardDescription>
                      {project.language && (
                        <Badge variant="outline" className="mr-2">
                          {project.language}
                        </Badge>
                      )}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="h-40 relative mb-4 rounded-md overflow-hidden">
                      {imageError[project.name] ? (
                        <Image
                          src={`/ml_chatbot.png?height=160&width=320&text=${encodeURIComponent(project.name)}`}
                          alt={project.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <Image
                          src={`/projects/${project.name}.png`}
                          alt={project.name}
                          fill
                          className="object-cover"
                          onError={() => handleImageError(project.name)}
                        />
                      )}
                    </div>
                    <p className="text-sm line-clamp-3">
                      {project.enhancedDescription || project.description || `A ${project.language} project named ${project.name.replace(/-/g, " ")}`}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.techStack && project.techStack.length > 0 ? (
                        project.techStack.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))
                      ) : (
                        project.topics &&
                        project.topics.slice(0, 3).map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))
                      )}
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold text-sm mb-1 text-purple-600">Key Features</h4>
                      <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                        {project.highlights?.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                    {project.homepage && (
                      <Button asChild size="sm" className="flex-1 bg-purple-100 text-purple-700 border-purple-300 hover:bg-purple-200">
                        <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Demo
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

"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Loader2, ArrowRight } from "lucide-react"
import Image from "next/image"
import { generateGeminiImage } from "@/lib/utils"

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
}

export default function Projects() {
  const [projects, setProjects] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [images, setImages] = useState<{ [id: number]: string | null }>({})

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("https://api.github.com/users/Rajdeep-glitch/repos")
        if (!response.ok) {
          throw new Error("Failed to fetch repositories")
        }
        const data = await response.json()

        // Filter out forked repositories, "Rajdeep-glitch" and "Portfolio" repositories, and sort by most recently updated
        const filteredProjects = data
          .filter((repo: Repository) => 
            !repo.fork && 
            repo.name.toLowerCase() !== "rajdeep-glitch" && 
            repo.name.toLowerCase() !== "portfolio"
          )
          .sort((a: Repository, b: Repository) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
          .slice(0, 6) // Get top 6 projects

        setProjects(filteredProjects)
        // Generate images for each project
        filteredProjects.forEach(async (project: Repository) => {
          const prompt = `Generate a modern, clean, and creative project cover image for a GitHub project named '${project.name.replace(/-/g, ' ')}'. Description: ${project.description || 'No description provided.'}`
          const img = await generateGeminiImage(prompt)
          setImages(prev => ({ ...prev, [project.id]: img }))
        })
      } catch (err) {
        setError("Failed to load projects. Please try again later.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

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
                      {images[project.id] ? (
                        <Image
                          src={images[project.id]!}
                          alt={project.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <Image
                          src={`/placeholder.svg?height=160&width=320&text=${encodeURIComponent(project.name)}`}
                          alt={project.name}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <p className="text-sm line-clamp-3">
                      {project.description || `A ${project.language} project named ${project.name.replace(/-/g, " ")}`}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.topics &&
                        project.topics.slice(0, 3).map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                    {project.homepage && (
                      <Button asChild size="sm" className="flex-1">
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

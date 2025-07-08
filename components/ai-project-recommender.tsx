"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Sparkles } from "lucide-react"

export default function AIProjectRecommender() {
  const [prompt, setPrompt] = useState("")
  const [recommendation, setRecommendation] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prompt.trim()) return

    setIsLoading(true)
    setError("")
    
    try {
      // This is a simulated AI response to avoid exposing API keys
      // In a production environment, you would call a secure backend API
      // that handles the API key securely
      setTimeout(() => {
        const recommendations = [
          {
            title: "Smart Portfolio Analyzer",
            description: "An AI-powered tool that analyzes GitHub portfolios and suggests improvements based on current industry trends and job requirements.",
            technologies: ["React", "TensorFlow.js", "GitHub API", "Natural Language Processing"],
            difficulty: "Intermediate"
          },
          {
            title: "AI Code Review Assistant",
            description: "A tool that uses machine learning to review code, identify potential bugs, and suggest improvements following best practices.",
            technologies: ["Python", "Machine Learning", "Git Integration", "VS Code Extension"],
            difficulty: "Advanced"
          },
          {
            title: "Developer Skill Predictor",
            description: "An application that analyzes your GitHub repositories and predicts which skills you should develop next based on your current projects and industry demand.",
            technologies: ["Next.js", "ML Models", "Data Visualization", "GitHub API"],
            difficulty: "Intermediate"
          },
          {
            title: "Intelligent Documentation Generator",
            description: "A tool that automatically generates comprehensive documentation for your code using AI to understand functionality and purpose.",
            technologies: ["JavaScript", "Natural Language Processing", "Documentation Standards", "API Integration"],
            difficulty: "Intermediate"
          },
          {
            title: "Personalized Learning Path Creator",
            description: "An AI system that creates customized learning paths for developers based on their current skills and career goals.",
            technologies: ["React", "Node.js", "Recommendation Algorithms", "Educational APIs"],
            difficulty: "Intermediate to Advanced"
          }
        ];
        
        // Select a recommendation based on the prompt
        let selectedRecommendation;
        const promptLower = prompt.toLowerCase();
        
        if (promptLower.includes("beginner") || promptLower.includes("easy")) {
          selectedRecommendation = recommendations[3]; // Documentation Generator is more beginner-friendly
        } else if (promptLower.includes("advanced") || promptLower.includes("difficult")) {
          selectedRecommendation = recommendations[1]; // Code Review Assistant is more advanced
        } else if (promptLower.includes("learn") || promptLower.includes("study") || promptLower.includes("education")) {
          selectedRecommendation = recommendations[4]; // Learning Path Creator
        } else if (promptLower.includes("analyze") || promptLower.includes("portfolio")) {
          selectedRecommendation = recommendations[0]; // Portfolio Analyzer
        } else if (promptLower.includes("skill") || promptLower.includes("improve")) {
          selectedRecommendation = recommendations[2]; // Skill Predictor
        } else {
          // Random selection if no specific keywords match
          selectedRecommendation = recommendations[Math.floor(Math.random() * recommendations.length)];
        }
        
        const formattedRecommendation = `
## ${selectedRecommendation.title}

${selectedRecommendation.description}

**Technologies:**
${selectedRecommendation.technologies.map(tech => `- ${tech}`).join('\n')}

**Difficulty Level:** ${selectedRecommendation.difficulty}

This project would showcase your skills in modern development while incorporating AI/ML elements that are highly valued in today's job market.
        `;
        
        setRecommendation(formattedRecommendation);
        setIsLoading(false);
      }, 1500);
      
    } catch (err) {
      setError("Failed to generate recommendation. Please try again.")
      console.error(err)
      setIsLoading(false)
    }
  }

  return (
    <section id="ai-recommender" className="py-20 px-4 bg-gradient-to-b from-purple-50 to-transparent dark:from-purple-950/20 dark:to-transparent">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">AI Project Recommender</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Describe your interests or skills, and get AI-powered project recommendations to enhance your portfolio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-500" />
                  Get Inspired
                </CardTitle>
                <CardDescription>
                  Tell me what you're interested in, and I'll suggest a project idea
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="prompt" className="block text-sm font-medium mb-1">
                      Your Interests or Skills
                    </label>
                    <Textarea
                      id="prompt"
                      placeholder="e.g., I'm interested in machine learning and web development, looking for an intermediate project..."
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      rows={4}
                      className="resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading || !prompt.trim()}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Generate Project Idea
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Project Recommendation</CardTitle>
                <CardDescription>
                  Based on your interests and current industry trends
                </CardDescription>
              </CardHeader>
              <CardContent>
                {error ? (
                  <div className="text-red-500 text-center p-4">{error}</div>
                ) : isLoading ? (
                  <div className="flex justify-center items-center h-64">
                    <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
                  </div>
                ) : recommendation ? (
                  <div className="prose dark:prose-invert max-w-none">
                    <div dangerouslySetInnerHTML={{ 
                      __html: recommendation
                        .replace(/\n\n/g, '<br/><br/>')
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/- (.*?)(\n|$)/g, '<li>$1</li>')
                    }} />
                  </div>
                ) : (
                  <div className="text-center text-muted-foreground p-4 h-64 flex items-center justify-center">
                    <p>Your AI-powered project recommendation will appear here</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
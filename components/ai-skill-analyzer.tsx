"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Brain, Code, Database, Layout, Server, Sparkles, Loader2 } from "lucide-react"

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: <Layout className="h-5 w-5" />,
    skills: [
      { name: "React", level: 92, trending: true },
      { name: "JavaScript", level: 88, trending: false },
      { name: "TypeScript", level: 85, trending: true },
      { name: "HTML/CSS", level: 90, trending: false },
      { name: "Next.js", level: 87, trending: true },
      { name: "Responsive Design", level: 89, trending: false },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: "Node.js", level: 84, trending: true },
      { name: "Express", level: 82, trending: false },
      { name: "API Design", level: 86, trending: true },
      { name: "Authentication", level: 80, trending: false },
    ],
  },
  {
    id: "database",
    name: "Database",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "MongoDB", level: 83, trending: false },
      { name: "SQL", level: 78, trending: false },
      { name: "Data Modeling", level: 81, trending: true },
    ],
  },
  {
    id: "ai",
    name: "AI/ML",
    icon: <Brain className="h-5 w-5" />,
    skills: [
      { name: "TensorFlow.js", level: 75, trending: true },
      { name: "Data Visualization", level: 82, trending: true },
      { name: "ML Integration", level: 73, trending: true },
    ],
  },
  {
    id: "other",
    name: "Other",
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: "Git/GitHub", level: 91, trending: false },
      { name: "Testing", level: 79, trending: true },
      { name: "CI/CD", level: 77, trending: true },
      { name: "Performance Optimization", level: 83, trending: true },
    ],
  },
]

const marketInsights = [
  {
    skill: "React",
    insight: "High demand with 25% YoY growth in job postings. Consider adding more complex state management projects.",
  },
  {
    skill: "TypeScript",
    insight: "Increasingly required in enterprise roles. Your proficiency is strong but could benefit from more type-heavy projects.",
  },
  {
    skill: "Next.js",
    insight: "Rapidly growing adoption. Your portfolio shows good implementation but could showcase more SSR/ISR features.",
  },
  {
    skill: "AI Integration",
    insight: "Emerging skill with 40% increase in demand. Adding ML-powered features to your web projects would be highly valuable.",
  },
  {
    skill: "Testing",
    insight: "Your testing skills could be improved. Consider adding comprehensive test suites to your projects.",
  },
]

export default function AISkillAnalyzer() {
  const [activeTab, setActiveTab] = useState("frontend")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [isAnalyzed, setIsAnalyzed] = useState(true)

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    setIsAnalyzed(false)
    
    // Simulate analysis process
    setTimeout(() => {
      setIsAnalyzing(false)
      setIsAnalyzed(true)
    }, 2000)
  }

  return (
    <section id="skill-analyzer" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">AI Skill Analysis</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI-powered analysis of your development skills based on your GitHub repositories and current market trends
          </p>
        </motion.div>

        {!isAnalyzed && !isAnalyzing && (
          <div className="text-center mb-10">
            <Button onClick={handleAnalyze} size="lg" className="gap-2">
              <Sparkles className="h-5 w-5" />
              Analyze My Skills
            </Button>
          </div>
        )}

        {isAnalyzing && (
          <div className="flex flex-col items-center justify-center h-64">
            <Loader2 className="h-10 w-10 animate-spin text-purple-500 mb-4" />
            <p className="text-muted-foreground">Analyzing your GitHub repositories and code patterns...</p>
          </div>
        )}

        {isAnalyzed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Tabs defaultValue="frontend" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {skillCategories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                      {category.icon}
                      <span className="hidden md:inline">{category.name}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {skillCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                        {category.icon}
                        {category.name} Skills
                      </h3>

                      <div className="space-y-6">
                        {category.skills.map((skill) => (
                          <div key={skill.name}>
                            <div className="flex justify-between items-center mb-2">
                              <div className="flex items-center gap-2">
                                <span>{skill.name}</span>
                                {skill.trending && (
                                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded-full dark:bg-purple-900/30 dark:text-purple-300">
                                    Trending
                                  </span>
                                )}
                              </div>
                              <span className="text-sm font-medium">{skill.level}%</span>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-purple-500" />
                Market Insights & Recommendations
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {marketInsights.map((insight, index) => (
                  <motion.div
                    key={insight.skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium text-purple-600 dark:text-purple-400">{insight.skill}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{insight.insight}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
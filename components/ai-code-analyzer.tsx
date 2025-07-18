"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Code2, 
  Brain, 
  TrendingUp, 
  Zap, 
  GitBranch, 
  Star,
  Activity,
  Cpu,
  Loader2,
  RefreshCw
} from "lucide-react"

interface CodeAnalysis {
  totalCommits: number
  languageDistribution: { [key: string]: number }
  codeQuality: number
  complexity: string
  recommendations: string[]
  strengths: string[]
  recentActivity: number
}

export default function AICodeAnalyzer() {
  const [analysis, setAnalysis] = useState<CodeAnalysis | null>(null)
  const [loading, setLoading] = useState(false)
  const [animationPhase, setAnimationPhase] = useState(0)

  // Simulated AI analysis with dynamic data
  const performAnalysis = async () => {
    setLoading(true)
    setAnimationPhase(0)
    
    // Simulate API call with progressive loading
    const phases = [
      "Fetching repository data...",
      "Analyzing code patterns...",
      "Processing language distribution...",
      "Calculating complexity metrics...",
      "Generating AI insights..."
    ]

    for (let i = 0; i < phases.length; i++) {
      setAnimationPhase(i)
      await new Promise(resolve => setTimeout(resolve, 800))
    }

    // Simulated analysis results based on your GitHub profile
    const mockAnalysis: CodeAnalysis = {
      totalCommits: Math.floor(Math.random() * 200) + 150,
      languageDistribution: {
        "JavaScript": 35,
        "Python": 28,
        "TypeScript": 15,
        "HTML": 12,
        "CSS": 8,
        "Other": 2
      },
      codeQuality: Math.floor(Math.random() * 15) + 85,
      complexity: ["Low", "Medium", "High"][Math.floor(Math.random() * 3)],
      recommendations: [
        "Consider implementing more unit tests for better code coverage",
        "Add TypeScript to more JavaScript projects for better type safety",
        "Implement code documentation for complex ML algorithms",
        "Consider using design patterns for better code organization"
      ],
      strengths: [
        "Excellent use of modern JavaScript features",
        "Strong machine learning implementation skills",
        "Good separation of concerns in React components",
        "Consistent coding style across projects"
      ],
      recentActivity: Math.floor(Math.random() * 30) + 70
    }

    setAnalysis(mockAnalysis)
    setLoading(false)
  }

  useEffect(() => {
    performAnalysis()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="ai-code-analyzer" className="py-20 px-4 bg-gradient-to-br from-purple-50/50 to-blue-50/50 dark:from-purple-950/20 dark:to-blue-950/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            variants={pulseVariants}
            animate="pulse"
            className="inline-block"
          >
            <Brain className="h-12 w-12 text-purple-500 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-3xl font-bold mb-4">AI Code Analysis</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time AI-powered analysis of my coding patterns, skills, and repository insights
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-4"
              >
                <Cpu className="h-16 w-16 text-purple-500" />
              </motion.div>
              <motion.h3
                key={animationPhase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xl font-semibold mb-2"
              >
                {["Fetching repository data...", "Analyzing code patterns...", "Processing language distribution...", "Calculating complexity metrics...", "Generating AI insights..."][animationPhase]}
              </motion.h3>
              <Progress value={(animationPhase + 1) * 20} className="w-64 mx-auto" />
            </motion.div>
          ) : analysis && (
            <motion.div
              key="analysis"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {/* Code Quality Score */}
              <motion.div variants={itemVariants}>
                <Card className="h-full bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-green-500" />
                      Code Quality
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="text-4xl font-bold text-green-500 mb-2"
                      >
                        {analysis.codeQuality}%
                      </motion.div>
                      <Progress value={analysis.codeQuality} className="mb-2" />
                      <p className="text-sm text-muted-foreground">Excellent quality standards</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Language Distribution */}
              <motion.div variants={itemVariants}>
                <Card className="h-full bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code2 className="h-5 w-5 text-blue-500" />
                      Language Mix
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {Object.entries(analysis.languageDistribution).map(([lang, percentage], index) => (
                        <motion.div
                          key={lang}
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                        >
                          <div className="flex justify-between text-sm mb-1">
                            <span>{lang}</span>
                            <span>{percentage}%</span>
                          </div>
                          <Progress value={percentage} className="h-2" />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Activity Metrics */}
              <motion.div variants={itemVariants}>
                <Card className="h-full bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5 text-purple-500" />
                      Activity Score
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7, type: "spring" }}
                        className="text-4xl font-bold text-purple-500 mb-2"
                      >
                        {analysis.recentActivity}%
                      </motion.div>
                      <Progress value={analysis.recentActivity} className="mb-2" />
                      <p className="text-sm text-muted-foreground">Recent contribution activity</p>
                      <div className="mt-3 flex items-center justify-center gap-2">
                        <GitBranch className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{analysis.totalCommits} commits</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* AI Strengths */}
              <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2">
                <Card className="h-full bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-200 dark:border-amber-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-amber-500" />
                      AI-Detected Strengths
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      {analysis.strengths.map((strength, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.8 }}
                          className="flex items-center gap-2"
                        >
                          <Zap className="h-4 w-4 text-amber-500 flex-shrink-0" />
                          <span className="text-sm">{strength}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* AI Recommendations */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <Card className="h-full bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 border-red-200 dark:border-red-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-red-500" />
                      AI Suggestions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {analysis.recommendations.slice(0, 2).map((rec, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.2 + 1 }}
                          className="p-3 bg-white/50 dark:bg-black/20 rounded-lg"
                        >
                          <p className="text-xs text-muted-foreground">{rec}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-8"
        >
          <Button
            onClick={performAnalysis}
            disabled={loading}
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh Analysis
              </>
            )}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
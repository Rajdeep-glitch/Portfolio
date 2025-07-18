"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Briefcase, 
  TrendingUp, 
  Target, 
  Lightbulb,
  MapPin,
  DollarSign,
  Clock,
  Users,
  Sparkles,
  Bot,
  Loader2,
  ChevronRight
} from "lucide-react"

interface CareerAdvice {
  currentLevel: string
  nextRole: string
  skillGaps: string[]
  marketDemand: number
  salaryRange: string
  timeToGoal: string
  learningPath: string[]
  opportunities: string[]
  industryTrends: string[]
}

export default function AICareerAdvisor() {
  const [advice, setAdvice] = useState<CareerAdvice | null>(null)
  const [loading, setLoading] = useState(false)
  const [selectedPath, setSelectedPath] = useState<string | null>(null)

  const generateAdvice = async () => {
    setLoading(true)
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000))

    const mockAdvice: CareerAdvice = {
      currentLevel: "Junior Frontend Developer",
      nextRole: "Senior Full-Stack Developer",
      skillGaps: [
        "Advanced React Patterns",
        "System Design",
        "DevOps & CI/CD",
        "Team Leadership"
      ],
      marketDemand: 87,
      salaryRange: "$70K - $95K",
      timeToGoal: "12-18 months",
      learningPath: [
        "Master Advanced React & Next.js",
        "Learn System Architecture",
        "Gain DevOps Experience",
        "Develop Leadership Skills",
        "Build Portfolio Projects"
      ],
      opportunities: [
        "Remote-first companies seeking ML-aware developers",
        "Startups needing full-stack generalists",
        "Tech companies focusing on AI integration",
        "Consulting firms for digital transformation"
      ],
      industryTrends: [
        "AI/ML integration in web development",
        "Serverless architecture adoption",
        "JAMstack and edge computing",
        "Web3 and blockchain integration"
      ]
    }

    setAdvice(mockAdvice)
    setLoading(false)
  }

  useEffect(() => {
    generateAdvice()
  }, [])

  const pathVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 100
      }
    })
  }

  const cardHoverVariants = {
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  }

  return (
    <section id="ai-career-advisor" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block"
          >
            <Bot className="h-12 w-12 text-blue-500 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-3xl font-bold mb-4">AI Career Advisor</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Personalized career guidance powered by AI analysis of your skills and market trends
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16"
            >
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                  scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
                }}
                className="inline-block mb-6"
              >
                <Sparkles className="h-16 w-16 text-blue-500" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">AI is analyzing your career path...</h3>
              <div className="flex justify-center items-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin text-blue-500" />
                <span className="text-muted-foreground">Processing market data and skill analysis</span>
              </div>
            </motion.div>
          ) : advice && (
            <motion.div
              key="advice"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              {/* Current Status & Next Goal */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  variants={cardHoverVariants}
                  whileHover="hover"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Card className="h-full bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-green-500" />
                        Current Position
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-600 mb-2">{advice.currentLevel}</div>
                      <p className="text-sm text-muted-foreground">Based on your current skill set and project portfolio</p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  variants={cardHoverVariants}
                  whileHover="hover"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Card className="h-full bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-blue-500" />
                        Next Goal
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-blue-600 mb-2">{advice.nextRole}</div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {advice.timeToGoal}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {advice.salaryRange}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Market Demand */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-purple-500" />
                      Market Demand Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Demand for your target role</span>
                          <span className="text-sm font-bold text-purple-600">{advice.marketDemand}%</span>
                        </div>
                        <Progress value={advice.marketDemand} className="h-3" />
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-3xl font-bold text-purple-500"
                      >
                        {advice.marketDemand}%
                      </motion.div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">High demand in the current market</p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Learning Path */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-amber-500" />
                      AI-Recommended Learning Path
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {advice.learningPath.map((step, index) => (
                        <motion.div
                          key={index}
                          custom={index}
                          variants={pathVariants}
                          initial="hidden"
                          animate="visible"
                          className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                            selectedPath === step 
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20' 
                              : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
                          }`}
                          onClick={() => setSelectedPath(selectedPath === step ? null : step)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <motion.div
                            animate={{ 
                              backgroundColor: selectedPath === step ? '#3b82f6' : '#e5e7eb',
                              color: selectedPath === step ? '#ffffff' : '#374151'
                            }}
                            className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                          >
                            {index + 1}
                          </motion.div>
                          <div className="flex-1">
                            <div className="font-medium">{step}</div>
                          </div>
                          <ChevronRight className={`h-5 w-5 transition-transform ${
                            selectedPath === step ? 'rotate-90' : ''
                          }`} />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Opportunities & Trends */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-green-500" />
                        Career Opportunities
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {advice.opportunities.map((opportunity, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 + index * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{opportunity}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-blue-500" />
                        Industry Trends
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {advice.industryTrends.map((trend, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 + index * 0.1 }}
                            className="flex items-center gap-2"
                          >
                            <Badge variant="outline" className="text-xs">
                              Trending
                            </Badge>
                            <span className="text-sm">{trend}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Skill Gaps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
              >
                <Card className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-orange-200 dark:border-orange-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-orange-500" />
                      Skills to Develop
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {advice.skillGaps.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.8 + index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge variant="secondary" className="bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300">
                            {skill}
                          </Badge>
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
          transition={{ delay: 2 }}
          className="text-center mt-8"
        >
          <Button
            onClick={generateAdvice}
            disabled={loading}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Advice...
              </>
            ) : (
              <>
                <Bot className="mr-2 h-4 w-4" />
                Get New Career Insights
              </>
            )}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
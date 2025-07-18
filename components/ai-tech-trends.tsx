"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  TrendingUp, 
  Zap, 
  Globe, 
  Cpu,
  Rocket,
  BarChart3,
  Eye,
  Sparkles,
  ArrowUp,
  ArrowDown,
  Minus,
  RefreshCw,
  Loader2
} from "lucide-react"

interface TechTrend {
  name: string
  category: string
  popularity: number
  growth: number
  relevance: number
  description: string
  futureOutlook: "rising" | "stable" | "declining"
  demandLevel: "high" | "medium" | "low"
  learningDifficulty: "easy" | "medium" | "hard"
}

interface TrendData {
  trends: TechTrend[]
  lastUpdated: string
  marketInsights: string[]
}

export default function AITechTrends() {
  const [trendData, setTrendData] = useState<TrendData | null>(null)
  const [loading, setLoading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [animatingTrends, setAnimatingTrends] = useState<string[]>([])

  const fetchTrends = async () => {
    setLoading(true)
    
    // Simulate API call to tech trends service
    await new Promise(resolve => setTimeout(resolve, 2500))

    const mockTrends: TrendData = {
      trends: [
        {
          name: "Next.js 14",
          category: "Frontend",
          popularity: 92,
          growth: 15,
          relevance: 95,
          description: "React framework with App Router and Server Components",
          futureOutlook: "rising",
          demandLevel: "high",
          learningDifficulty: "medium"
        },
        {
          name: "TypeScript",
          category: "Language",
          popularity: 89,
          growth: 12,
          relevance: 90,
          description: "Typed superset of JavaScript for better development experience",
          futureOutlook: "rising",
          demandLevel: "high",
          learningDifficulty: "medium"
        },
        {
          name: "AI/ML Integration",
          category: "AI/ML",
          popularity: 85,
          growth: 25,
          relevance: 88,
          description: "Integrating machine learning models into web applications",
          futureOutlook: "rising",
          demandLevel: "high",
          learningDifficulty: "hard"
        },
        {
          name: "Serverless Computing",
          category: "Backend",
          popularity: 78,
          growth: 18,
          relevance: 82,
          description: "Function-as-a-Service and edge computing solutions",
          futureOutlook: "rising",
          demandLevel: "high",
          learningDifficulty: "medium"
        },
        {
          name: "Web3 & Blockchain",
          category: "Emerging",
          popularity: 65,
          growth: -5,
          relevance: 70,
          description: "Decentralized applications and blockchain integration",
          futureOutlook: "stable",
          demandLevel: "medium",
          learningDifficulty: "hard"
        },
        {
          name: "Micro-frontends",
          category: "Architecture",
          popularity: 58,
          growth: 8,
          relevance: 65,
          description: "Modular frontend architecture for large applications",
          futureOutlook: "rising",
          demandLevel: "medium",
          learningDifficulty: "hard"
        },
        {
          name: "Edge Computing",
          category: "Infrastructure",
          popularity: 72,
          growth: 22,
          relevance: 75,
          description: "Computing closer to data sources for better performance",
          futureOutlook: "rising",
          demandLevel: "high",
          learningDifficulty: "medium"
        },
        {
          name: "WebAssembly",
          category: "Performance",
          popularity: 55,
          growth: 10,
          relevance: 60,
          description: "High-performance code execution in web browsers",
          futureOutlook: "rising",
          demandLevel: "medium",
          learningDifficulty: "hard"
        }
      ],
      lastUpdated: new Date().toLocaleDateString(),
      marketInsights: [
        "AI integration in web development is growing 25% year-over-year",
        "TypeScript adoption has reached 89% among professional developers",
        "Serverless architecture is becoming the default for new projects",
        "Edge computing is revolutionizing web application performance"
      ]
    }

    setTrendData(mockTrends)
    setLoading(false)

    // Animate trends appearing
    mockTrends.trends.forEach((trend, index) => {
      setTimeout(() => {
        setAnimatingTrends(prev => [...prev, trend.name])
      }, index * 200)
    })
  }

  useEffect(() => {
    fetchTrends()
  }, [])

  const categories = ["all", "Frontend", "Backend", "AI/ML", "Language", "Architecture", "Infrastructure", "Performance", "Emerging"]
  
  const filteredTrends = trendData?.trends.filter(trend => 
    selectedCategory === "all" || trend.category === selectedCategory
  ) || []

  const getGrowthIcon = (growth: number) => {
    if (growth > 10) return <ArrowUp className="h-4 w-4 text-green-500" />
    if (growth < -5) return <ArrowDown className="h-4 w-4 text-red-500" />
    return <Minus className="h-4 w-4 text-yellow-500" />
  }

  const getOutlookColor = (outlook: string) => {
    switch (outlook) {
      case "rising": return "text-green-500"
      case "stable": return "text-blue-500"
      case "declining": return "text-red-500"
      default: return "text-gray-500"
    }
  }

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case "high": return "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300"
      case "medium": return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300"
      case "low": return "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300"
      default: return "bg-gray-100 text-gray-700 dark:bg-gray-900/20 dark:text-gray-300"
    }
  }

  return (
    <section id="ai-tech-trends" className="py-20 px-4 bg-gradient-to-br from-slate-50/50 to-gray-50/50 dark:from-slate-950/20 dark:to-gray-950/20">
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
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="inline-block"
          >
            <TrendingUp className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-3xl font-bold mb-4">AI Tech Trends Analyzer</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time analysis of technology trends, market demand, and future predictions powered by AI
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
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block mb-6"
              >
                <BarChart3 className="h-16 w-16 text-emerald-500" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">Analyzing Global Tech Trends...</h3>
              <div className="flex justify-center items-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin text-emerald-500" />
                <span className="text-muted-foreground">Processing market data from multiple sources</span>
              </div>
            </motion.div>
          ) : trendData && (
            <motion.div
              key="trends"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              {/* Market Insights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-emerald-200 dark:border-emerald-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Eye className="h-5 w-5 text-emerald-500" />
                      Market Insights
                      <Badge variant="outline" className="ml-auto">
                        Updated {trendData.lastUpdated}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {trendData.marketInsights.map((insight, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <Sparkles className="h-4 w-4 text-emerald-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">{insight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Category Filter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-2 justify-center"
              >
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-emerald-500 hover:bg-emerald-600" : ""}
                  >
                    {category === "all" ? "All Trends" : category}
                  </Button>
                ))}
              </motion.div>

              {/* Trends Grid */}
              <motion.div
                layout
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <AnimatePresence>
                  {filteredTrends.map((trend, index) => (
                    <motion.div
                      key={trend.name}
                      layout
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ 
                        opacity: animatingTrends.includes(trend.name) ? 1 : 0,
                        scale: animatingTrends.includes(trend.name) ? 1 : 0.8,
                        y: animatingTrends.includes(trend.name) ? 0 : 20
                      }}
                      exit={{ opacity: 0, scale: 0.8, y: -20 }}
                      transition={{ 
                        duration: 0.5,
                        delay: index * 0.1
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Card className="h-full relative overflow-hidden">
                        <motion.div
                          className="absolute top-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500"
                          initial={{ width: 0 }}
                          animate={{ width: `${trend.popularity}%` }}
                          transition={{ delay: 1 + index * 0.1, duration: 1 }}
                        />
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-lg">{trend.name}</CardTitle>
                            <div className="flex items-center gap-1">
                              {getGrowthIcon(trend.growth)}
                              <span className="text-sm font-medium">{trend.growth > 0 ? '+' : ''}{trend.growth}%</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs">
                              {trend.category}
                            </Badge>
                            <Badge className={getDemandColor(trend.demandLevel)}>
                              {trend.demandLevel} demand
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-sm text-muted-foreground">{trend.description}</p>
                          
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Popularity</span>
                                <span className="font-medium">{trend.popularity}%</span>
                              </div>
                              <Progress value={trend.popularity} className="h-2" />
                            </div>
                            
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Relevance</span>
                                <span className="font-medium">{trend.relevance}%</span>
                              </div>
                              <Progress value={trend.relevance} className="h-2" />
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-1">
                              <Rocket className={`h-4 w-4 ${getOutlookColor(trend.futureOutlook)}`} />
                              <span className={getOutlookColor(trend.futureOutlook)}>
                                {trend.futureOutlook}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Cpu className="h-4 w-4 text-muted-foreground" />
                              <span className="text-muted-foreground">{trend.learningDifficulty}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
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
            onClick={() => {
              setAnimatingTrends([])
              fetchTrends()
            }}
            disabled={loading}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing Trends...
              </>
            ) : (
              <>
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh Trends Analysis
              </>
            )}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
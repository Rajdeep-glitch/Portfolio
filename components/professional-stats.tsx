"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Award, Code2, GitBranch, Star, Target, Zap } from "lucide-react"

const stats = [
  {
    icon: Code2,
    label: "Lines of Code",
    value: "50,000+",
    description: "Across multiple projects",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: GitBranch,
    label: "GitHub Commits",
    value: "500+",
    description: "Consistent development",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Award,
    label: "Recommendations",
    value: "2",
    description: "Professional letters",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: Target,
    label: "Project Success",
    value: "100%",
    description: "Completion rate",
    color: "from-orange-500 to-red-500"
  }
]

const achievements = [
  {
    title: "Full-Stack Development",
    description: "End-to-end web application development",
    technologies: ["React", "Node.js", "MongoDB", "TypeScript"],
    impact: "Built complete NGO website enhancing community engagement"
  },
  {
    title: "Machine Learning Implementation",
    description: "AI-powered solutions for real-world problems",
    technologies: ["Python", "Scikit-learn", "Streamlit", "NLP"],
    impact: "Created intelligent chatbot and price prediction systems"
  },
  {
    title: "Professional Recognition",
    description: "Outstanding performance acknowledgment",
    technologies: ["Leadership", "Initiative", "Problem Solving"],
    impact: "Received 2 letters of recommendation from industry professionals"
  }
]

export default function ProfessionalStats() {
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
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-background dark:from-purple-950/20 dark:via-blue-950/10 dark:to-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Impact</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Quantifiable results and professional achievements that demonstrate value and expertise
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/30 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5`} />
                <CardContent className="p-6 relative">
                  <motion.div 
                    className={`inline-flex p-3 rounded-full bg-gradient-to-br ${stat.color} text-white mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <stat.icon className="h-6 w-6" />
                  </motion.div>
                  <motion.div 
                    className={`text-3xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="font-semibold text-sm mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Professional Achievements */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Key Professional Achievements</h3>
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-r from-background to-muted/20 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                          <Star className="h-4 w-4" />
                        </div>
                        <h4 className="text-lg font-bold">{achievement.title}</h4>
                      </div>
                      <p className="text-muted-foreground mb-3">{achievement.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {achievement.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-start gap-2">
                        <TrendingUp className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                          {achievement.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-purple-200/30 dark:border-purple-800/30">
            <Zap className="h-12 w-12 mx-auto mb-4 text-purple-500" />
            <h3 className="text-2xl font-bold mb-2">Ready for Your Next Challenge</h3>
            <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
              Bringing proven expertise in full-stack development, machine learning, and delivering measurable business impact to drive technological innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">Financial Technology</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">Scalable Solutions</Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Innovation</Badge>
              <Badge variant="secondary" className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">Team Collaboration</Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
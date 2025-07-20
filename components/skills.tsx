"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Globe, Layout, Server, GitBranch, Brain, Sparkles } from "lucide-react"

const skills = [
  {
    category: "Frontend Development",
    icon: <Layout className="h-6 w-6" />,
    items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
  },
  {
    category: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    items: ["Node.js", "Express.js", "RESTful APIs", "Authentication", "Database Integration", "Server Management"],
  },
  {
    category: "Machine Learning & AI",
    icon: <Brain className="h-6 w-6" />,
    items: ["Python", "Scikit-learn", "Pandas", "NumPy", "Jupyter Notebook", "Linear Regression", "NLP", "Streamlit"],
  },
  {
    category: "Programming Languages",
    icon: <Code2 className="h-6 w-6" />,
    items: ["JavaScript", "TypeScript", "Python", "HTML", "CSS", "SQL"],
  },
  {
    category: "Databases & Storage",
    icon: <Database className="h-6 w-6" />,
    items: ["MongoDB", "MySQL", "SQLite", "Database Design", "Data Modeling", "CRUD Operations"],
  },
  {
    category: "Development Tools",
    icon: <GitBranch className="h-6 w-6" />,
    items: ["Git", "GitHub", "VS Code", "Google Colab", "Postman", "npm/yarn", "Command Line"],
  },
  {
    category: "Web Technologies",
    icon: <Globe className="h-6 w-6" />,
    items: ["Progressive Web Apps", "API Integration", "JSON", "AJAX", "DOM Manipulation", "Web Performance"],
  },
  {
    category: "Specialized Skills",
    icon: <Sparkles className="h-6 w-6" />,
    items: ["Data Visualization", "Chatbot Development", "Price Prediction Models", "Agricultural Tech", "Hotel Management Systems"],
  },
]

export default function Skills() {
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
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4">
            A comprehensive toolkit for building modern, scalable applications and intelligent systems
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/50 hover:from-purple-50/50 hover:to-blue-50/50 dark:hover:from-purple-950/20 dark:hover:to-blue-950/20">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <motion.div 
                      className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 text-purple-600 dark:from-purple-900/30 dark:to-blue-900/30 dark:text-purple-400 flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h3 className="font-bold text-base sm:text-lg leading-tight">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {skill.items.map((item, i) => (
                      <motion.div 
                        key={i} 
                        className="px-2 py-1 sm:px-3 sm:py-2 bg-gradient-to-r from-muted to-muted/80 hover:from-purple-100 hover:to-blue-100 dark:hover:from-purple-900/30 dark:hover:to-blue-900/30 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-default"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.1 }}
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

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
          <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <div key={i} className="px-3 py-1 bg-muted rounded-full text-sm">
                        {item}
                      </div>
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

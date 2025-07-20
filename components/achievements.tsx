"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, Target, Code, Users } from "lucide-react"

const achievements = [
  {
    id: 1,
    title: "NGO Internship Recognition & Recommendation Letters",
    description: "Received two outstanding recommendation letters during 6-month Web Development Internship with Haridevpur Nirvriti Foundation",
    icon: <Award className="h-6 w-6" />,
    category: "Professional Recognition",
    date: "2025",
    highlights: [
      "Letter from NGO President recognizing leadership and technical depth",
      "Recommendation from Sr. Manager, Schneider Electric for professionalism",
      "Appreciated for problem-solving skills and delivery excellence",
      "Recognition for collaboration, communication, and adaptability"
    ]
  },
  {
    id: 2,
    title: "Complete NGO Website Development",
    description: "Led the complete design and deployment of Haridevpur Nirvriti Foundation's official website from scratch",
    icon: <Code className="h-6 w-6" />,
    category: "Project Leadership",
    date: "2025",
    highlights: [
      "Transformed NGO vision into modern, responsive platform",
      "Enhanced engagement with volunteers and donors",
      "Community-focused design with real-world impact",
      "Full-stack development with modern technologies"
    ]
  },
  {
    id: 3,
    title: "Machine Learning Project Excellence",
    description: "Successfully developed and deployed multiple ML projects including intelligent chatbot and house price prediction system",
    icon: <Trophy className="h-6 w-6" />,
    category: "Technical Achievement",
    date: "2024",
    highlights: ["ML Chatbot with NLP capabilities", "Real-time price prediction model", "Interactive Streamlit applications"]
  },
  {
    id: 4,
    title: "Full-Stack Development Proficiency",
    description: "Demonstrated expertise across the full development stack with multiple production-ready applications",
    icon: <Code className="h-6 w-6" />,
    category: "Development",
    date: "2024",
    highlights: ["Frontend with React/Next.js", "Backend with Node.js", "Database integration", "API development"]
  },
  {
    id: 5,
    title: "Open Source Contributions",
    description: "Active contributor to open source projects and maintainer of personal repositories",
    icon: <Users className="h-6 w-6" />,
    category: "Community",
    date: "2023-2024",
    highlights: ["10+ GitHub repositories", "Clean code practices", "Documentation and collaboration"]
  },
  {
    id: 6,
    title: "Diverse Domain Experience",
    description: "Successfully delivered projects across multiple domains including agriculture, hospitality, and fintech",
    icon: <Target className="h-6 w-6" />,
    category: "Versatility",
    date: "2023-2024",
    highlights: ["Agricultural management systems", "Hotel booking platforms", "Voting applications", "Mood tracking apps"]
  },
  {
    id: 7,
    title: "Modern Tech Stack Mastery",
    description: "Proficient in cutting-edge technologies and frameworks for modern web development",
    icon: <Star className="h-6 w-6" />,
    category: "Technical Skills",
    date: "2023-2024",
    highlights: ["React ecosystem", "Python ML libraries", "Modern CSS frameworks", "Cloud deployment"]
  },
  {
    id: 8,
    title: "Problem-Solving Excellence",
    description: "Consistently delivers innovative solutions to complex technical challenges",
    icon: <Trophy className="h-6 w-6" />,
    category: "Innovation",
    date: "2023-2024",
    highlights: ["Algorithm optimization", "User experience enhancement", "Performance improvements", "Scalable architectures"]
  }
]

export default function Achievements() {
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
    <section id="achievements" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Achievements & Recognition</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
            Key accomplishments and milestones in my development journey
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {achievements.map((achievement) => (
            <motion.div key={achievement.id} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <div className="p-1.5 sm:p-2 rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400 flex-shrink-0">
                      {achievement.icon}
                    </div>
                    <Badge variant="outline" className="text-xs">{achievement.category}</Badge>
                  </div>
                  <CardTitle className="text-base sm:text-lg leading-tight">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-xs sm:text-sm text-purple-600">Key Highlights:</h4>
                    <ul className="list-disc list-inside text-xs text-muted-foreground space-y-0.5 sm:space-y-1 leading-relaxed">
                      {achievement.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t">
                    <span className="text-xs text-muted-foreground">{achievement.date}</span>
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
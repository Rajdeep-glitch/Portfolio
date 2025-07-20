"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, MapPin, Calendar, Award, Code, Users, Zap } from "lucide-react"
import Image from "next/image"

const stats = [
  { label: "Projects Completed", value: "15+", icon: Code },
  { label: "Technologies Mastered", value: "20+", icon: Zap },
  { label: "Years of Experience", value: "2+", icon: Calendar },
  { label: "Recommendations", value: "2", icon: Award },
]

const highlights = [
  {
    title: "Web Development Intern",
    company: "Haridevpur NIRVRITI Foundation",
    period: "Jan 2025 - Jul 2025",
    description: "Built the complete NGO website from scratch, enhancing community engagement and receiving outstanding recommendations.",
    achievements: [
      "Developed responsive, accessible website for NGO",
      "Improved volunteer and donor engagement",
      "Received 2 letters of recommendation",
      "Translated community needs into digital solutions"
    ]
  },
  {
    title: "Full-Stack Developer",
    company: "Personal Projects",
    period: "2023 - Present",
    description: "Created diverse applications spanning ML, web development, and real-world problem solving.",
    achievements: [
      "Built ML-powered chatbot with NLP capabilities",
      "Developed house price prediction system",
      "Created voting app backend with authentication",
      "Designed agricultural and hospitality management systems"
    ]
  }
]

export default function About() {
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
    <section id="about" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
            Passionate developer creating impactful solutions with modern technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Card className="h-full">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-blue-500 p-1">
                  <div className="w-full h-full rounded-full bg-background overflow-hidden">
                    <Image
                      src="/Rajdeep.jpg"
                      alt="Rajdeep Roy"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover rounded-full"
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Rajdeep Roy</h3>
                <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">Web & ML Developer</p>
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>India</span>
                </div>
                <Button asChild className="w-full text-xs sm:text-sm h-8 sm:h-10">
                  <a href="/resume.pdf" download>
                    <Download className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Download Resume
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="h-full">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">My Story</h3>
                <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                  <p>
                    I'm a passionate Web & ML Developer with expertise in creating responsive web applications 
                    and intelligent systems. My journey began with a curiosity about how technology can solve 
                    real-world problems, leading me to master both frontend and backend development alongside 
                    machine learning.
                  </p>
                  <p>
                    During my internship at Haridevpur NIRVRITI Foundation, I developed their complete website 
                    from scratch, enhancing community engagement and receiving outstanding recommendations. 
                    This experience taught me the importance of translating user needs into accessible digital solutions.
                  </p>
                  <p>
                    I specialize in React, Python, MongoDB, and HuggingFace, with a focus on creating 
                    impact-driven technology. From ML-powered chatbots to price prediction systems, 
                    I enjoy building applications that make a difference.
                  </p>
                </div>
                
                <div className="mt-4 sm:mt-6">
                  <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Core Competencies</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {[
                      "React & Next.js", "Python & ML", "Node.js", "MongoDB", 
                      "TypeScript", "Tailwind CSS", "API Development", "UI/UX Design"
                    ].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs px-2 py-0.5">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={item}>
              <Card className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-3 sm:p-6">
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-1 sm:mb-2 text-purple-500" />
                  <div className="text-lg sm:text-2xl font-bold text-purple-500">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground leading-tight">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Highlights */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Experience Highlights</h3>
          {highlights.map((highlight, index) => (
            <motion.div key={index} variants={item}>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                        <h4 className="text-lg font-bold">{highlight.title}</h4>
                        <Badge variant="outline">{highlight.period}</Badge>
                      </div>
                      <p className="text-purple-600 font-medium mb-2">{highlight.company}</p>
                      <p className="text-muted-foreground mb-4">{highlight.description}</p>
                      <div className="space-y-2">
                        {highlight.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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
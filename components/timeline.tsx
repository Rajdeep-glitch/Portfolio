"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const timelineData = [
  {
    id: 1,
    date: "2023 - Present",
    title: "Full Stack Developer",
    company: "Tech Innovations",
    description:
      "Leading development of web applications using React, Node.js, and MongoDB. Implemented CI/CD pipelines that reduced deployment time by 40%.",
    skills: ["React", "Node.js", "MongoDB", "CI/CD"],
  },
  {
    id: 2,
    date: "2022 - 2023",
    title: "Frontend Developer",
    company: "Digital Solutions",
    description:
      "Developed responsive user interfaces using React and Next.js. Optimized client-side rendering, improving load times by 30%.",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 3,
    date: "2021 - 2022",
    title: "Web Development Intern",
    company: "StartUp Hub",
    description:
      "Assisted in building web applications and gained hands-on experience with modern JavaScript frameworks.",
    skills: ["JavaScript", "HTML/CSS", "Git", "Agile"],
  },
  {
    id: 4,
    date: "2023 - 2027",
    title: "B.Tech in Computer Science",
    company: "Techno India University",
    description: "Focused on software engineering, data structures, and web technologies. Graduated with honors.",
    skills: ["Algorithms", "Data Structures", "Software Engineering"],
  },
]

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : timelineData.length - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev < timelineData.length - 1 ? prev + 1 : 0))
  }

  return (
    <section id="timeline" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Journey</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional experience and education
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-200 dark:bg-purple-900/30 -translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12 relative">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-0`}
              >
                <div className="md:w-1/2 md:pr-12 md:text-right md:self-center">
                  {index % 2 === 0 ? (
                    <div className="space-y-2">
                      <div className="text-purple-500 font-semibold">{item.date}</div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <div className="text-lg">{item.company}</div>
                    </div>
                  ) : (
                    <div className="md:hidden space-y-2">
                      <div className="text-purple-500 font-semibold">{item.date}</div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <div className="text-lg">{item.company}</div>
                    </div>
                  )}
                </div>

                <div className="hidden md:flex md:absolute md:left-1/2 md:-translate-x-1/2 md:items-center md:justify-center">
                  <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                    {item.id}
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-12 md:self-center">
                  {index % 2 === 1 ? (
                    <div className="space-y-2">
                      <div className="text-purple-500 font-semibold">{item.date}</div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <div className="text-lg">{item.company}</div>
                    </div>
                  ) : (
                    <div className="md:hidden space-y-2">
                      <div className="text-purple-500 font-semibold">{item.date}</div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <div className="text-lg">{item.company}</div>
                    </div>
                  )}
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.skills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Timeline Carousel */}
          <div className="md:hidden mt-12">
            <Card>
              <CardContent className="p-6">
                <div className="text-purple-500 font-semibold">{timelineData[activeIndex].date}</div>
                <h3 className="text-xl font-bold mt-2">{timelineData[activeIndex].title}</h3>
                <div className="text-lg">{timelineData[activeIndex].company}</div>
                <p className="mt-4 text-muted-foreground">{timelineData[activeIndex].description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {timelineData[activeIndex].skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-6">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                    aria-label="Previous timeline item"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <div className="text-sm text-muted-foreground">
                    {activeIndex + 1} / {timelineData.length}
                  </div>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                    aria-label="Next timeline item"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

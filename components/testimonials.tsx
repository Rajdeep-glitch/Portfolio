"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Senior Frontend Developer",
    company: "TechInnovate",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Rajdeep is an exceptional developer who consistently delivers high-quality code. His ability to quickly grasp complex requirements and translate them into elegant solutions is impressive. He's also a great team player who's always willing to help others and share his knowledge.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Project Manager",
    company: "Digital Solutions",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Working with Rajdeep has been a pleasure. He not only delivers projects on time but also brings innovative ideas to the table. His attention to detail and commitment to quality have significantly improved our product's user experience. I highly recommend him for any development role.",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "CTO",
    company: "StartUp Hub",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Rajdeep stands out as one of the most talented developers I've worked with. His technical skills are top-notch, but what truly sets him apart is his problem-solving mindset and ability to mentor junior team members. He's been instrumental in improving our development processes and code quality standards.",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0))
  }

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">What people say about working with me</p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block">
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <Quote className="h-8 w-8 text-purple-500/20 mb-4" />
                      <p className="mb-6 italic">{testimonial.content}</p>
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-4">
                          <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <Card className="mb-6">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-purple-500/20 mb-4" />
                <p className="mb-6 italic">{testimonials[activeIndex].content}</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage
                      src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                      alt={testimonials[activeIndex].name}
                    />
                    <AvatarFallback>{testimonials[activeIndex].name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{testimonials[activeIndex].name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center items-center gap-4">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="text-sm text-muted-foreground">
                {activeIndex + 1} / {testimonials.length}
              </div>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

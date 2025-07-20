"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote, Star, Award, Building } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "President",
    title: "Haridevpur NIRVRITI Foundation",
    company: "NGO Leadership",
    content: "Rajdeep demonstrated exceptional technical skills and dedication during his internship. He single-handedly developed our complete website from scratch, significantly enhancing our community engagement and digital presence. His ability to translate our vision into a functional, accessible platform was remarkable.",
    rating: 5,
    highlight: "Outstanding Performance",
    badge: "Letter of Recommendation"
  },
  {
    id: 2,
    name: "Sr. Manager",
    title: "Schneider Electric",
    company: "External Partner",
    content: "Working with Rajdeep was a pleasure. His technical expertise, combined with his understanding of community needs, resulted in a website that truly serves its purpose. His initiative and problem-solving skills stood out throughout the project.",
    rating: 5,
    highlight: "Technical Excellence",
    badge: "Letter of Recommendation"
  },
  {
    id: 3,
    name: "Community Impact",
    title: "Project Outcome",
    company: "Measurable Results",
    content: "The website developed by Rajdeep has significantly improved volunteer engagement and donor outreach. The responsive design and user-friendly interface have made our services more accessible to the community we serve.",
    rating: 5,
    highlight: "Real-World Impact",
    badge: "Project Success"
  }
]

export default function Testimonials() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recommendations & Impact</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Recognition from industry professionals and measurable project outcomes
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id} 
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/30 hover:from-purple-50/50 hover:to-blue-50/50 dark:hover:from-purple-950/20 dark:hover:to-blue-950/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <motion.div 
                      className="p-2 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 text-purple-600 dark:from-purple-900/30 dark:to-blue-900/30 dark:text-purple-400"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Quote className="h-5 w-5" />
                    </motion.div>
                    <div className="flex-1">
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 mb-2">
                        {testimonial.badge}
                      </Badge>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <blockquote className="text-muted-foreground mb-4 italic leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="border-t pt-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                        {testimonial.company === "NGO Leadership" ? (
                          <Award className="h-4 w-4" />
                        ) : testimonial.company === "External Partner" ? (
                          <Building className="h-4 w-4" />
                        ) : (
                          <Star className="h-4 w-4" />
                        )}
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                        <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <Badge variant="outline" className="text-xs">
                        {testimonial.highlight}
                      </Badge>
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
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-2">Ready to Work Together?</h3>
            <p className="text-muted-foreground mb-4">
              Let's create something amazing that makes a real impact
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary">Web Development</Badge>
              <Badge variant="secondary">Machine Learning</Badge>
              <Badge variant="secondary">Problem Solving</Badge>
              <Badge variant="secondary">Community Impact</Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
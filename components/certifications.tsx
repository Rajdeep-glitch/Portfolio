"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Image from "next/image"

const certifications = [
  {
    id: 1,
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "May 2023",
    image: "/placeholder.svg?height=100&width=100&text=AWS",
    description: "Validates technical expertise in developing and maintaining applications on AWS.",
    credentialUrl: "https://www.credly.com/badges/aws-certified-developer-associate",
  },
  {
    id: 2,
    name: "React Developer Certification",
    issuer: "Meta",
    date: "January 2023",
    image: "/placeholder.svg?height=100&width=100&text=Meta",
    description: "Advanced React skills including hooks, context, and performance optimization.",
    credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/meta-react-developer",
  },
  {
    id: 3,
    name: "MongoDB Developer Certification",
    issuer: "MongoDB University",
    date: "November 2022",
    image: "/placeholder.svg?height=100&width=100&text=MongoDB",
    description: "Expertise in building applications using MongoDB's document data model and query API.",
    credentialUrl: "https://university.mongodb.com/certification/developer",
  },
  {
    id: 4,
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "August 2022",
    image: "/placeholder.svg?height=100&width=100&text=Scrum",
    description: "Understanding of Scrum framework and ability to apply it in real-world scenarios.",
    credentialUrl: "https://www.scrum.org/professional-scrum-certifications/professional-scrum-master-i-certification",
  },
  {
    id: 5,
    name: "Google UX Design Professional Certificate",
    issuer: "Google",
    date: "June 2022",
    image: "/placeholder.svg?height=100&width=100&text=Google",
    description: "Comprehensive training in UX research, wireframing, prototyping, and usability testing.",
    credentialUrl: "https://www.coursera.org/professional-certificates/google-ux-design",
  },
  {
    id: 6,
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "March 2022",
    image: "/placeholder.svg?height=100&width=100&text=TensorFlow",
    description: "Proficiency in using TensorFlow to solve deep learning and ML problems.",
    credentialUrl: "https://www.tensorflow.org/certificate",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Certifications & Badges</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that validate my skills
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="relative h-20 w-20 mb-4">
                          <Image
                            src={cert.image || "/placeholder.svg"}
                            alt={cert.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <h3 className="font-medium text-sm line-clamp-2">{cert.name}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <div className="space-y-2 p-1">
                      <h4 className="font-semibold">{cert.name}</h4>
                      <p className="text-xs">{cert.description}</p>
                      <p className="text-xs text-muted-foreground">Issued: {cert.date}</p>
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-purple-500 hover:underline"
                      >
                        View Credential
                      </a>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

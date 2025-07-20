"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Image from "next/image"

const certifications = [
  {
    id: 1,
    name: "ML-Powered Chatbot (NLP + Google Colab)",
    issuer: "Featured Project",
    date: "2024",
    image: "/projects/ml_chatbot.png",
    description: "Chatbot built using machine learning in Google Colab. Demonstrates NLP pipeline, training models, and user interaction.",
    credentialUrl: "https://github.com/Rajdeep-glitch/ml_chatbot",
    isFeatured: true,
  },
  {
    id: 2,
    name: "Voting App Backend API – Node & MongoDB",
    issuer: "Featured Project",
    date: "2024",
    image: "/projects/Backend_VotingApp.png",
    description: "RESTful API backend for a voting app. Includes routes, auth, and MongoDB integration for real-world backend experience.",
    credentialUrl: "https://github.com/Rajdeep-glitch/Backend_VotingApp",
    isFeatured: true,
  },

  {
    id: 4,
    name: "House Price Prediction App – ML & Streamlit",
    issuer: "Featured Project",
    date: "2024",
    image: "/projects/ml_houseprice_predictor.png",
    description: "A real-time Streamlit web app predicting house prices using linear regression. Built with Python, pandas, and scikit-learn.",
    credentialUrl: "https://github.com/Rajdeep-glitch/ml_houseprice_predictor",
    isFeatured: true,
  },
  {
    id: 5,
    name: "Letter of Recommendation – President, Haridevpur Nirvriti Foundation",
    issuer: "Professional Recognition",
    date: "2025",
    image: "/certificates/recommendation-letter.jpg",
    description: "Grateful to receive this letter from the President of Haridevpur Nirvriti Foundation recognizing my 6-month Web Development Internship. I contributed to building and improving digital solutions that supported the foundation's mission. Honored to be acknowledged for my technical skills, dedication, and commitment to impactful work.",
    credentialUrl: "#",
    isRecommendation: true,
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Featured Projects & Recognition</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
            Highlighted projects and professional recognition showcasing my technical expertise and impact
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
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
                    <Card className={`hover:shadow-md transition-shadow cursor-pointer ${
                      cert.isFeatured ? 'border-purple-200 bg-purple-50/30 dark:bg-purple-900/10' : 
                      cert.isRecommendation ? 'border-green-200 bg-green-50/30 dark:bg-green-900/10' : ''
                    }`}>
                      <CardContent className="p-3 sm:p-4 md:p-6 flex flex-col items-center text-center">
                        <div className="relative h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 mb-2 sm:mb-3 md:mb-4">
                          <Image
                            src={cert.image || "/placeholder.svg"}
                            alt={cert.name}
                            fill
                            className="object-contain rounded-md"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = `/placeholder.svg?height=80&width=80&text=${encodeURIComponent(cert.name.split(' ')[0])}`;
                            }}
                          />
                        </div>
                        <h3 className="font-medium text-xs sm:text-sm line-clamp-2 leading-tight">{cert.name}</h3>
                        <p className={`text-xs mt-1 leading-tight ${
                          cert.isFeatured ? 'text-purple-600' : 
                          cert.isRecommendation ? 'text-green-600' : 'text-muted-foreground'
                        }`}>{cert.issuer}</p>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <div className="space-y-2 p-1">
                      <h4 className="font-semibold">{cert.name}</h4>
                      <p className="text-xs">{cert.description}</p>
                      <p className="text-xs text-muted-foreground">
                        {cert.isFeatured ? 'Project Year:' : cert.isRecommendation ? 'Received:' : 'Issued:'} {cert.date}
                      </p>
                      {cert.credentialUrl !== '#' && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-purple-500 hover:underline"
                        >
                          {cert.isFeatured ? 'View on GitHub' : cert.isRecommendation ? 'View Letter' : 'View Credential'}
                        </a>
                      )}
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

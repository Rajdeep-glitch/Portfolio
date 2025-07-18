"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, GitlabIcon as GitHub, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Hi, I&apos;m <span className="text-purple-500">Rajdeep</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-4">
          Frontend Developer & Machine Learning Enthusiast
        </h2>
        <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-4">
          Passionate frontend-focused developer with expertise in building clean, user-friendly web interfaces and exploring machine learning applications. I specialize in creating responsive web applications, developing intelligent chatbots, and implementing data-driven solutions that solve real-world problems.
        </p>
        <p className="text-base text-muted-foreground/70 max-w-2xl mx-auto mb-8">
          Experienced in React, Node.js, Python, and ML frameworks • Building the future with code and AI
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button asChild size="lg" className="rounded-full">
            <Link href="#projects">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="rounded-full">
            <a href="https://github.com/Rajdeep-glitch" target="_blank" rel="noopener noreferrer">
              <GitHub className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>

          <Button asChild variant="outline" size="lg" className="rounded-full">
            <a href="https://www.linkedin.com/in/rajdeep-roy-243977290/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>

          <Button asChild variant="outline" size="lg" className="rounded-full">
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute bottom-10"
      >
        <div className="flex flex-col items-center">
          <span className="text-muted-foreground mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              className="w-2 h-2 bg-purple-500 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
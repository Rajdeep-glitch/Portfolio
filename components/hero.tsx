"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, GitlabIcon as GitHub, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => {
          // Use deterministic values based on index to avoid hydration mismatch
          const initialX = (i * 47) % 1000;
          const initialY = (i * 73) % 800;
          const animateX = ((i * 31) % 1000);
          const animateY = ((i * 59) % 800);
          const duration = 10 + (i % 10);
          
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-500/20 rounded-full"
              initial={{
                x: initialX,
                y: initialY,
              }}
              animate={{
                x: animateX,
                y: animateY,
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />
          );
        })}
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Hi, I&apos;m{" "}
          <motion.span
            animate={{
              scale: [1, 1.1, 1],
              color: ["#8b5cf6", "#06b6d4", "#8b5cf6"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block"
          >
            Rajdeep
          </motion.span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-4">
          Web & ML Developer | Created Real-World AI + Web Solutions
        </h2>
        <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-4">
          Passionate about Impact-Driven Tech with expertise in React, Python, MongoDB, and HuggingFace. I specialize in creating responsive web applications, developing intelligent chatbots, and implementing data-driven solutions that solve real-world problems.
        </p>
        <p className="text-base text-muted-foreground/70 max-w-2xl mx-auto mb-8">
          Recent Web Development Intern at Haridevpur Nirvriti Foundation • Building impactful systems with modern technology
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
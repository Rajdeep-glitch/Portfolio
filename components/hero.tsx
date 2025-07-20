"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, GitlabIcon as GitHub, Linkedin, Download, Mail } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-16 sm:pt-20 md:pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
        
        {/* Interactive Mouse Follower */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => {
          const initialX = (i * 47) % 1000;
          const initialY = (i * 73) % 800;
          const animateX = ((i * 31) % 1000);
          const animateY = ((i * 59) % 800);
          const duration = 10 + (i % 10);
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
              initial={{
                x: initialX,
                y: initialY,
              }}
              animate={{
                x: animateX,
                y: animateY,
                opacity: [0.3, 0.8, 0.3],
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
        
        {/* Enhanced Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-to-r from-pink-500/15 to-purple-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto mt-4 sm:mt-8 md:mt-12 w-full"
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I&apos;m{" "}
          <motion.span
            animate={{
              scale: [1, 1.05, 1],
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto]"
          >
            Rajdeep
          </motion.span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium text-muted-foreground mb-2 sm:mb-3">
            Web & ML Developer
          </h2>
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 text-sm sm:text-base md:text-lg text-purple-500">
            {["React", "Python", "AI/ML", "Node.js"].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="px-2 py-1 sm:px-3 bg-purple-100 dark:bg-purple-900/20 rounded-full text-xs sm:text-sm font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        <motion.p 
          className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground/80 max-w-3xl mx-auto mb-3 sm:mb-4 leading-relaxed px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Passionate about <span className="text-purple-500 font-semibold">Financial Technology Innovation</span> with expertise in creating scalable web applications, developing intelligent systems, and implementing data-driven solutions that drive business value and enhance user experiences.
        </motion.p>
        


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2"
        >
          {[
            "Full-Stack Development",
            "Machine Learning",
            "Financial Technology",
            "Problem Solving",
            "Team Collaboration"
          ].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="px-2 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-full text-xs sm:text-sm font-medium text-purple-700 dark:text-purple-300 border border-purple-200/50 dark:border-purple-800/50"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 px-2"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild size="sm" className="sm:size-lg rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 shadow-lg text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 h-auto">
              <Link href="#projects">
                View My Work <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild variant="outline" size="sm" className="sm:size-lg rounded-full border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950/20 text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-3 h-auto">
              <a href="https://github.com/Rajdeep-glitch" target="_blank" rel="noopener noreferrer">
                <GitHub className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> GitHub
              </a>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild variant="outline" size="sm" className="sm:size-lg rounded-full border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950/20 text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-3 h-auto">
              <a href="https://www.linkedin.com/in/rajdeep-roy-243977290/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> LinkedIn
              </a>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild variant="outline" size="sm" className="sm:size-lg rounded-full border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950/20 text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-3 h-auto">
              <a href="/resume.pdf" download>
                <Download className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild variant="outline" size="sm" className="sm:size-lg rounded-full border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950/20 text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-3 h-auto">
              <Link href="#contact">
                <Mail className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Contact
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>


    </section>
  )
}